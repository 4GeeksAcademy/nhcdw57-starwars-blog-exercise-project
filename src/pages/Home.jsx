
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Listings } from "../components/Listings.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [loadedPlanets, setLoadedPlanets] = useState(false);
	const [loadedCharacters, setLoadedCharacters] = useState(false);
	const swapiURL = "https://www.swapi.tech/api/";

	useEffect(() => {
		fetch(`${swapiURL}people/?expanded=true`)
			.then((response) => response.json())
			.then((data) => setCharacters(data.results))
			.catch((error) => console.error(error.message))
			.finally(() => setLoadedCharacters(true));

		fetch(`${swapiURL}planets/?expanded=true`)
			.then((response) => response.json())
			.then((data) => setPlanets(data.results))
			.catch((error) => console.error(error.message))
			.finally(() => setLoadedPlanets(true));
	}, []);

	if (!loadedPlanets && !loadedCharacters) {
    return (
      <div className="container d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)
  };

	return (
		<div>
			<Listings title="Characters" content={characters} />
			<Listings title="Locations" content={planets} />
		</div>
	);
}; 