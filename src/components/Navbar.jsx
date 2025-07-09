import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { favs, setFavs } = useGlobalReducer();

	function deleteFav(deleteTargetIndex) {
		setFavs((oldFavList) => {
			let newFavList = oldFavList.filter((element, index) => deleteTargetIndex !== index);
			return newFavList
		});
	}

	let favorites = favs
		.map((element, index) => {
			return (
				<li key={index}>
					<span className="dropdown-item d-flex justify-content-between">
						<Link to={`/${element.typeName}/${element.content.uid}`}>
							<span className="me-2">
								{element.content.properties.name}
							</span>
						</Link>
						<i className="text-light bi bi-trash-fill px-1 bg-danger rounded" onClick={() => deleteFav(index)} />
					</span>
				</li>
			)
		});

	return (
		<nav className="navbar navbar-light mb-5 mt-2">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Starwars Icon placeholder</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
							<span className="me-2">
								Favorites
							</span>
							<span className="bg-secondary rounded px-1">
								{favs.length}
							</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{(favs.length === 0) ? <li><span className="dropdown-item">{`Empty :(`}</span></li> : favorites}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

/* What each element in favs looks like:
	{
		typeName:'Characters', // can also be 'Locations'
		key:0,
		content: {} //see below 
	}

	What favs.content Looks like:
	{
	  "properties": {
		"created": "2025-07-06T23:28:13.123Z",
		"edited": "2025-07-06T23:28:13.123Z",
		"name": "Luke Skywalker",
		"gender": "male",
		"skin_color": "fair",
		"hair_color": "blond",
		"height": "172",
		"eye_color": "blue",
		"mass": "77",
		"homeworld": "https://www.swapi.tech/api/planets/1",
		"birth_year": "19BBY",
		"url": "https://www.swapi.tech/api/people/1"
	  },
	  "_id": "5f63a36eee9fd7000499be42",
	  "description": "A person within the Star Wars universe",
	  "uid": "1",
	  "__v": 2
	}
*/