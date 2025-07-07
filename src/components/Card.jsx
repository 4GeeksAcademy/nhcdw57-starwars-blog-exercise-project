import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {

    const [contentData, setContentData] = useState();

    useEffect(() => {
        const isACharacter = props.typeName === 'Characters';
        const isALocation = props.typeName === 'Locations';
        let fetchURL = "https://www.swapi.tech/api/";
        let cardContent = [];


        // The following code was designed to give card body contents, but there's too many requests

        // if (isACharacter) { // if else if is used in case more card types are added other than character/locations
        //     fetchURL = fetchURL + `people/${props.content.uid}`;
        // } else if (isALocation) {
        //     fetchURL = fetchURL + `planets/${props.content.uid}`;
        // }
        // fetch(fetchURL)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setContentData(data.result);
        //         if (isACharacter){
        //             cardContent = [`Gender: ${contentData.gender}`,`Hair Color: ${contentData.hair_color}`,`Eye-Color: ${contentData.eye_color}`].map((element,index)=>(<p className="card-text" key={index}>{element}</p>));
        //         } else if(isALocation){

        //         }
        //     }).catch((error) => console.error(error.message));


    }, []);



    return (
        <div className="col-3 my-2">
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.content.name}</h5>
                    { }
                    <span className="d-flex justify-content-between">
                        <Link to={`/${props.typeName}/${props.content.uid}`}>
                            <button href="#" className="btn btn-primary text-primary" style={{ backgroundColor: "white" }}>
                                Learn More!
                            </button>
                        </Link>
                        <a href="#" className="btn btn-warning text-warning" style={{ backgroundColor: "white" }}>
                            <i className="bi bi-heart" />
                        </a>
                    </span>

                </div>
            </div>
        </div>
    );
};

// What props.content Looks like:
//     {
//       "uid": "1",
//       "name": "Tatooine",
//       "url": "https://www.swapi.tech/api/planets/1"
//     }