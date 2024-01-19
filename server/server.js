require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
let Todo = require("./model/Todo.js");

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const app = express();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoDB = `mongodb+srv://${username}:${password}@db-around-us.u54b9co.mongodb.net/`;
mongoose.connect(mongoDB).then(() => {
    console.log("connected to mongoDB")

    // Find all todos
    app.get('/api/todo/list', async (req, res) => {
        try {
            const todos = await Todo.find();
            console.log(todos);
            res.json(todos);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    //Create new todo in database
    app.post('/api/todo/create', (req, res) => {
        console.log(req.body);
        const title = req.body.title;
        const comment = req.body.comment;
        const createdAt = req.body.createdAt;
        const category = req.body.category;
        const todo = new Todo({
            title,
            comment,
            createdAt,
            category
        });
        todo.save()
            .then((savedTodo) => res.json(savedTodo))
            .catch(err => res.status(400).json({ success: false }));
    });

    //Delete todo by id
    app.delete('/api/todo/delete', (req, res) => {
        const id = req.body.id;
        Todo.deleteOne({ _id: id })
            .then(() => {
                res.send('Todo deleted successfully.');
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Error deleting todo.');
            });
    });

    //Edit todo
    app.patch('/api/todo/edit', (req, res) => {
        Todo.findById(req.body.id)
            .then(todo => {
                todo.title = req.body.title
                todo.comment = req.body.comment
                todo.category = req.body.category
                return todo.save();
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Error deleting todo.');
            });
    })

    app.listen(4000, () => console.log(`App listening on port 4000`));
})
    .catch(error => {
        console.error(error); //this line sends the error into the console if something went wrong
        mongoose.disconnect();
    });