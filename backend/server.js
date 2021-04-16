const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

const uri =
	"mongodb+srv://alvinacosta:lokalsoul@fcccluster.aauoe.mongodb.net/freestyle-mern-db?retryWrites=true&w=majority";

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("DB connection established."));

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

// GET TODOS FROM DATABASE
app.get("/", (req, res) => {
	Todo.find({}, (err, todos) => {
		if (err) console.log(err);

		res.json(todos);
	});
});

// CREATE TODOS
app.post("/create", (req, res) => {
	console.log("creating an item");
	const todo = new Todo({
		text: req.body.text,
	});

	// req.body

	todo.save((err, savedTodo) => {
		if (err) {
			res.status(500).send(err.message);
		} else {
			res.json(savedTodo);
		}
	});

	// todo
	// 	.save()
	// 	.then((savedTodo) => {
	// 		res.json(savedTodo);
	// 	})
	// 	.catch((err) => {
	// 		res.status(500).send(err.message);
	// 	});
});

// GET SPECIFIC TODO ITEM
app.get("/todos/:id", (req, res) => {
	console.log("retrieving all items!");
	const id = req.params.id;
	Todo.findById(id, (err, foundItem) => {
		res.json(foundItem);
	});
});

// EDIT TODO ENDPOINT USING POST
// app.post("/todos/:id", (req, res) => {
// 	const id = req.params.id;
// 	Todo.findById(id, (err, foundTodo) => {
// 		if (!foundTodo) {
// 			res.status(404).sendStatus("Todo not found");
// 		} else {
// 			foundTodo.text = req.body.text;

// 			foundTodo
// 				.save()
// 				.then((savedTodo) => {
// 					res.json(savedTodo);
// 				})
// 				.catch((err) => res.status(500).send(err.message));
// 		}
// 	});
// });

// EDIT TODO ENDPOINT USING PUT
app.put("/todos/:id", (req, res) => {
	console.log("updating!");
	const id = req.params.id;

	Todo.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedTodo) => {
		if (err) return console.error(err);

		if (!updatedTodo) {
			return res.status(404).sendStatus("Cannot update todo");
		}

		return res.json({
			message: "Task was updated successfully.",
			update: req.body,
		});
	});
});

// DELETE A TODO ITEM
app.delete("/todos/:id", (req, res) => {
	console.log("deleting an item!");
	const id = req.params.id;
	Todo.findByIdAndRemove(id, (err, removedItem) => {
		if (err) return console.error(err);

		if (!removedItem) {
			return res.status(404).send("Todo item not found!");
		}

		return res.json({
			message: "Todo item successfully deleted",
			removed: removedItem,
		});
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
