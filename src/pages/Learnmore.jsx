// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Learnmore = props => {
  // Access the global state using the custom hook.

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { theId, infoType } = useParams()
  const isACharacter = infoType === 'Characters';
  const isALocation = infoType === 'Locations';
  let fetchURL = "https://www.swapi.tech/api/";
  const [contentData, setContentData] = useState();
  const [loaded, setLoaded] = useState(false);
  const [infos, setInfos] = useState();
  const characterInfoSet = [
    "Name",
    "Birth Year",
    'Gender',
    'Height',
    "Skin Color",
    "Eye Color"
  ];
  const planetInfoSet = [
    "Name",
    "Climate",
    'Population',
    'Orbital Period',
    "Rotation Period",
    "Diameter"
  ];
  let infoContent = [];

  useEffect(() => {
    if (isACharacter) { // if else if is used in case more card types are added other than character/locations
      fetchURL = fetchURL + `people/${theId}`;
    } else if (isALocation) {
      fetchURL = fetchURL + `planets/${theId}`;
    }
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        setContentData(data.result.properties);
        console.log(data.result.properties);
        if (isACharacter) {
          setInfos(characterInfoSet);
          console.log(infoContent);
        } else if (isALocation) {
          setInfos(planetInfoSet);
        }
      }).catch((error) => console.error(error.message))
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return (
      <div className="container d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)
  };
  if (contentData) {
    if (isACharacter) {
      infoContent = [
        `${contentData.name}`,
        `${contentData.birth_year}`,
        `${contentData.gender}`,
        `${contentData.height}`,
        `${contentData.skin_color}`,
        `${contentData.eye_color}`,
      ].map((element, index) => (<div className="col text-center" key={index}>{element}</div>));
    } else if (isALocation) {
      infoContent = [
        `${contentData.name}`,
        `${contentData.climate}`,
        `${contentData.population}`,
        `${contentData.orbital_period}`,
        `${contentData.rotation_period}`,
        `${contentData.diameter}`
      ].map((element, index) => (<div className="col text-center" key={index}>{element}</div>));
    }
  }

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-6">
          <div className="d-flex justify-content-center align-items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg" className="img-fluid" alt="..." />
          </div>
        </div>
        <div className="col-6 text-center">
          <h1>{contentData?.name ?? ""}</h1>
          <p className="mt-3">Have you heard of the critically acclaimed MMORPG Final Fantasy XIV? With an expanded free trial which you can play through the entirety of A Realm Reborn and the award-winning Stormblood expansion up to level 70 for free with no restrictions on playtime!</p>
        </div>
      </div>
      <div className="row border-top border-danger text-danger">
        {infos?.map((element, index) => (<div className="col text-center mt-4 mb-1" key={index} style={{ fontWeight: "bold" }}>{element}</div>))}
      </div>
      <div className="row text-danger">
        {infoContent}
      </div>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Learnmore.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};