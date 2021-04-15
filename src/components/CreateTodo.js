import React from "react";
import TodoForm from "./TodoForm";
import { createTodo } from "../api";
import { useHistory } from "react-router";

function CreateTodo() {
	const history = useHistory();
	console.log(history.location.pathname);

	const onSubmit = async (data) => {
		alert(JSON.stringify(data));
		await createTodo(data); // this waits for database process before rerouting
		history.push("/");
	};

	return (
		<div className="container">
			<div className="mt-3">
				<h3>Create Todo Item</h3>
				<TodoForm onSubmit={onSubmit} btnValue="Create Todo" />
			</div>
		</div>
	);
}

export default CreateTodo;
