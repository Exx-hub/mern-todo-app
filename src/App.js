import { Route, Switch } from "react-router";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/" component={TodoList} />
				<Route path="/edit/:id" component={EditTodo} />
				<Route path="/create" component={CreateTodo} />
			</Switch>
		</div>
	);
}

export default App;
