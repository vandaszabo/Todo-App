const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const todoSchema = new Schema({
    title: String,
    comment: String,
    createdAt: Date,
    category: String
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;