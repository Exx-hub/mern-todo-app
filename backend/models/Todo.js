const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
	text: { type: String },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
