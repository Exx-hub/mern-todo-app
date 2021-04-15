import React from "react";
import { useForm } from "react-hook-form";

function TodoForm({ todo, onSubmit, btnValue }) {
	const { register, handleSubmit, watch } = useForm({
		defaultValues: { text: todo ? todo.text : "" },
	}); // used to have control over input.

	const submitHandler = handleSubmit((data) => {
		onSubmit(data);
	});

	// console.log(watch("text"));

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<label htmlFor="text">Text:</label>
				<input
					className="form-control"
					type="text"
					name="text"
					id="text"
					{...register("text", { required: true })}
				/>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-primary">
					{btnValue}
				</button>
			</div>
		</form>
	);
}

export default TodoForm;
