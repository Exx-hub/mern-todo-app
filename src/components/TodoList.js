import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api";

function TodoList() {
	const [items, setItems] = useState([]);

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

	console.log(items);
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
								<td>{item.text}</td>
								<td>
									<Link to={`/edit/${item._id}`}>Edit</Link>
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
