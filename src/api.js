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
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify(todo),
	});
};
