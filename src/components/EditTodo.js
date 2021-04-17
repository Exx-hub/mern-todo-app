import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { editTodo, getById } from "../api";
import TodoForm from "./TodoForm";

function EditTodo() {
	const match = useRouteMatch();
	const [todo, setTodo] = useState();
	const history = useHistory();

	useEffect(() => {
		const fetchById = async () => {
			const todo = await getById(match.params.id);
			setTodo(todo);
		};
		fetchById();
	}, [match.params.id]);

	const onSubmit = async (data) => {
		alert(JSON.stringify(data));
		await editTodo(data, match.params.id);
		history.push("/");
		// console.log(data);
	};

	return todo ? (
		<div className="container">
			<div className="mt-3">
				<h3>Edit Todo Item</h3>
				<TodoForm todo={todo} onSubmit={onSubmit} btnValue="Edit Todo" />
			</div>
		</div>
	) : (
		<div>Loading...</div>
	);
}

export default EditTodo;
