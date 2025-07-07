import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const Listings = (props) => {



    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <h1 className="my-4">{props.title}</h1>
                    <div className="container-fluid">
                        <div className="row flex-row flex-nowrap overflow-x-scroll">
                            {props.content.map((element, index)=><Card typeName={props.title} content={element} key={index}/>)}
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}; 
//     // What props.content Looks like: [
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
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "C-3PO",
//         "gender": "n/a",
//         "skin_color": "gold",
//         "hair_color": "n/a",
//         "height": "167",
//         "eye_color": "yellow",
//         "mass": "75",
//         "homeworld": "https://www.swapi.tech/api/planets/1",
//         "birth_year": "112BBY",
//         "url": "https://www.swapi.tech/api/people/2"
//       },
//       "_id": "5f63a36eee9fd7000499be43",
//       "description": "A person within the Star Wars universe",
//       "uid": "2",
//       "__v": 2
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "R2-D2",
//         "gender": "n/a",
//         "skin_color": "white, blue",
//         "hair_color": "n/a",
//         "height": "96",
//         "eye_color": "red",
//         "mass": "32",
//         "homeworld": "https://www.swapi.tech/api/planets/8",
//         "birth_year": "33BBY",
//         "url": "https://www.swapi.tech/api/people/3"
//       },
//       "_id": "5f63a36eee9fd7000499be44",
//       "description": "A person within the Star Wars universe",
//       "uid": "3",
//       "__v": 2
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "Darth Vader",
//         "gender": "male",
//         "skin_color": "white",
//         "hair_color": "none",
//         "height": "202",
//         "eye_color": "yellow",
//         "mass": "136",
//         "homeworld": "https://www.swapi.tech/api/planets/1",
//         "birth_year": "41.9BBY",
//         "url": "https://www.swapi.tech/api/people/4"
//       },
//       "_id": "5f63a36eee9fd7000499be45",
//       "description": "A person within the Star Wars universe",
//       "uid": "4",
//       "__v": 2
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "Leia Organa",
//         "gender": "female",
//         "skin_color": "light",
//         "hair_color": "brown",
//         "height": "150",
//         "eye_color": "brown",
//         "mass": "49",
//         "homeworld": "https://www.swapi.tech/api/planets/2",
//         "birth_year": "19BBY",
//         "url": "https://www.swapi.tech/api/people/5"
//       },
//       "_id": "5f63a36eee9fd7000499be46",
//       "description": "A person within the Star Wars universe",
//       "uid": "5",
//       "__v": 2
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "Owen Lars",
//         "gender": "male",
//         "skin_color": "light",
//         "hair_color": "brown, grey",
//         "height": "178",
//         "eye_color": "blue",
//         "mass": "120",
//         "homeworld": "https://www.swapi.tech/api/planets/1",
//         "birth_year": "52BBY",
//         "url": "https://www.swapi.tech/api/people/6"
//       },
//       "_id": "5f63a36eee9fd7000499be47",
//       "description": "A person within the Star Wars universe",
//       "uid": "6",
//       "__v": 2
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "Beru Whitesun lars",
//         "gender": "female",
//         "skin_color": "light",
//         "hair_color": "brown",
//         "height": "165",
//         "eye_color": "blue",
//         "mass": "75",
//         "homeworld": "https://www.swapi.tech/api/planets/1",
//         "birth_year": "47BBY",
//         "url": "https://www.swapi.tech/api/people/7"
//       },
//       "_id": "5f63a36eee9fd7000499be48",
//       "description": "A person within the Star Wars universe",
//       "uid": "7",
//       "__v": 2
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "R5-D4",
//         "gender": "n/a",
//         "skin_color": "white, red",
//         "hair_color": "n/a",
//         "height": "97",
//         "eye_color": "red",
//         "mass": "32",
//         "homeworld": "https://www.swapi.tech/api/planets/1",
//         "birth_year": "unknown",
//         "url": "https://www.swapi.tech/api/people/8"
//       },
//       "_id": "5f63a36eee9fd7000499be49",
//       "description": "A person within the Star Wars universe",
//       "uid": "8",
//       "__v": 2
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "Biggs Darklighter",
//         "gender": "male",
//         "skin_color": "light",
//         "hair_color": "black",
//         "height": "183",
//         "eye_color": "brown",
//         "mass": "84",
//         "homeworld": "https://www.swapi.tech/api/planets/1",
//         "birth_year": "24BBY",
//         "url": "https://www.swapi.tech/api/people/9"
//       },
//       "_id": "5f63a36eee9fd7000499be4a",
//       "description": "A person within the Star Wars universe",
//       "uid": "9",
//       "__v": 2
//     },
//     {
//       "properties": {
//         "created": "2025-07-06T23:28:13.123Z",
//         "edited": "2025-07-06T23:28:13.123Z",
//         "name": "Obi-Wan Kenobi",
//         "gender": "male",
//         "skin_color": "fair",
//         "hair_color": "auburn, white",
//         "height": "182",
//         "eye_color": "blue-gray",
//         "mass": "77",
//         "homeworld": "https://www.swapi.tech/api/planets/20",
//         "birth_year": "57BBY",
//         "url": "https://www.swapi.tech/api/people/10"
//       },
//       "_id": "5f63a36eee9fd7000499be4b",
//       "description": "A person within the Star Wars universe",
//       "uid": "10",
//       "__v": 2
//     }
//   ]