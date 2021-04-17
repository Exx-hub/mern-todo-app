import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteTodo, getTodos, toggleStatus } from "../api";

function TodoList() {
	const [items, setItems] = useState([]);
	const [undone, setUndone] = useState(true);

	useEffect(() => {
		// fetch("http://localhost:4000/")
		// .then((res) => res.json())
		// .then((data) => {
		// 	setItems(data);
		// });
		// TRANSFERRED to a separate file

		const fetchItems = async () => {
			let todos = await getTodos();
			setItems(todos);
		};

		fetchItems();
	}, []);

	const handleDelete = async (id) => {
		// console.log(id);
		await deleteTodo(id);

		let todos = await getTodos();

		setItems(todos);
	};

	const handleToggle = async (id, status) => {
		await toggleStatus(id, status);

		let todos = await getTodos();
		setItems(todos);
	};

	// console.log(items);
	return (
		<div className="container">
			<div className="mt-3">
				<h3>Todo List</h3>
				<table className="table table-striped mt-3">
					<thead>
						<tr>
							<th>Text</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => (
							<tr key={item._id}>
								<td
									className={item.done ? "item toggled" : "item"}
									onClick={() => handleToggle(item._id, item.done)}
								>
									{item.text}
								</td>
								<td>
									<Link to={`/edit/${item._id}`}>Edit</Link>
									<i
										onClick={() => handleDelete(item._id)}
										className="fas fa-trash"
									></i>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TodoList;
