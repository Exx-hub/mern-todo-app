import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar bg-light navbar-expand-lg navbar-light">
			<ul className="navbar-nav mr-auto">
				<li className="navbar-item">
					<Link to="/" className="nav-link">
						TODOS
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/create" className="nav-link">
						CREATE TODO
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
