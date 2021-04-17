export const getTodos = () => {
	return fetch("http://localhost:4000/").then((res) => res.json());
};

export const createTodo = (todo) => {
	return fetch("http://localhost:4000/create", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify(todo),
	});
};

export const getById = (id) => {
	return fetch(`http://localhost:4000/todos/${id}`).then((res) => res.json());
};

export const editTodo = (todo, id) => {
	return fetch(`http://localhost:4000/todos/${id}`, {
		method: "PUT", // POST can also be used. diff function for that.
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify({ text: todo.text }),
	});
};

export const deleteTodo = (id) => {
	return fetch(`http://localhost:4000/todos/${id}`, {
		method: "DELETE",
	});
};

export const toggleStatus = (id, status) => {
	return fetch(`http://localhost:4000/todos/${id}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify({ done: !status }),
	});
};
