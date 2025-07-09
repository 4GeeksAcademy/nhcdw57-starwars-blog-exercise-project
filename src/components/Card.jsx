import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = (props) => {
    const {favs, setFavs} = useGlobalReducer();
    const [isNotInFavs, setIsNotInFavs] = useState(true);
    const isACharacter = props.typeName === 'Characters';
    const isALocation = props.typeName === 'Locations';
    let cardContent = [];

    useEffect(()=>{
        setIsNotInFavs(favs.find((element)=>props.content.properties.name === element.content.properties.name) === undefined);
    },[favs]);


    if (isACharacter) {
        cardContent = [
            `Gender: ${props.content.properties.gender}`, 
            `Hair Color: ${props.content.properties.hair_color}`, 
            `Eye-Color: ${props.content.properties.eye_color}`
        ].map((element, index) => (<p className="card-text mb-0" key={index}>{element}</p>));
    } else if (isALocation) {
        cardContent = [
            `Population: ${props.content.properties.population}`, 
            `Terrain: ${props.content.properties.terrain}`
        ].map((element, index) => (<p className="card-text mb-0" key={index}>{element}</p>));
    }

    function toggleFav(){
        if(isNotInFavs){
            setFavs((oldFavList)=>{
                let newFavList = [...oldFavList,props];
                return newFavList
            });
            setIsNotInFavs(false);
        } else if(!isNotInFavs){
            setFavs((oldFavList)=>{
                let newFavList = oldFavList.filter((element)=>props.content.properties.name !== element.content.properties.name);
                return newFavList
            });
            setIsNotInFavs(true);
        }
    }


    return (
        <div className="col-3 my-2">
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-2">{props.content.properties.name}</h5>
                    {cardContent}
                    <span className="d-flex justify-content-between mt-3">
                        <Link to={`/${props.typeName}/${props.content.uid}`} className="btn btn-primary text-primary" style={{ backgroundColor: "white" }}>
                                Learn More!
                        </Link>
                        <button className="btn btn-warning text-warning" onClick={()=>toggleFav()} style={{ backgroundColor: "white" }}>
                            <i className={(isNotInFavs)?"bi bi-heart":"bi bi-heart-fill"} />
                        </button>
                    </span>

                </div>
            </div>
        </div>
    );
};

// What props.content Looks like:
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "Luke Skywalker",
//         "gender": "male",
//         "skin_color": "fair",
//         "hair_color": "blond",
//         "height": "172",
//         "eye_color": "blue",
//         "mass": "77",
//         "homeworld": "https://www.swapi.tech/api/planets/1",
//         "birth_year": "19BBY",
//         "url": "https://www.swapi.tech/api/people/1"
//       },
//       "_id": "5f63a36eee9fd7000499be42",
//       "description": "A person within the Star Wars universe",
//       "uid": "1",
//       "__v": 2
//     }