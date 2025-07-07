import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light mb-5 mt-2">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Starwars Icon placeholder</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Place holder things</a></li>
							<li><a className="dropdown-item" href="#">Place holder things</a></li>
							<li><a className="dropdown-item" href="#">Place holder things</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};