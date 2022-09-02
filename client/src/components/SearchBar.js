import React, {useEffect, useState } from 'react';
import axios from "axios";
import useFetch from './fetchRequest';
import '../Style.css';

function CommitSearch() {
    const { data, loading, error } = useFetch("https://api.adoptapet.me/ap");

    if (loading) return <h1> LOADING...</h1>;

    if (error) console.log(error);

    return (
        <div className="animalSearchResults">
            {/* {console.log(data)} */}
            <div className="animalCard">
                <img className="animalImage" src={data?.page[0].pic_url} />
                <p>Species: {data?.page[0].species_breed.species_name}</p>
                <p>Breed: {data?.page[0].species_breed.breed_name}</p>
                <p>Name: {data?.page[0].name}</p>
                <p>Age: {data?.page[0].age}</p>
                <p>Sex: {data?.page[0].sex}</p>
                <p>Color: {data?.page[0].color}</p>
                <p>Location: {data?.page[0].center.name}</p>
                <p>City: {data?.page[0].center.city}</p>
                <p>State: {data?.page[0].center.state}</p>
            {/* <p>Description: {data?.page[0].desc}</p> */}
            </div>

            <div className="animalCard">
                <img className="animalImage" src={data?.page[1].pic_url} />
                <p>Species: {data?.page[1].species_breed.species_name}</p>
                <p>Breed: {data?.page[1].species_breed.breed_name}</p>
                <p>Name: {data?.page[1].name}</p>
                <p>Age: {data?.page[1].age}</p>
                <p>Sex: {data?.page[1].sex}</p>
                <p>Color: {data?.page[1].color}</p>
                <p>Location: {data?.page[1].center.name}</p>
                <p>City: {data?.page[1].center.city}</p>
                <p>State: {data?.page[1].center.state}</p>
                {/* <p>Description: {data?.page[1].desc}</p> */}
            </div>

            <div className="animalCard">
                <img className="animalImage" src={data?.page[3].pic_url} />
                <p>Species: {data?.page[3].species_breed.species_name}</p>
                <p>Breed: {data?.page[3].species_breed.breed_name}</p>
                <p>Name: {data?.page[3].name}</p>
                <p>Age: {data?.page[3].age}</p>
                <p>Sex: {data?.page[3].sex}</p>
                <p>Color: {data?.page[3].color}</p>
                <p>Location: {data?.page[3].center.name}</p>
                <p>City: {data?.page[3].center.city}</p>
                <p>State: {data?.page[3].center.state}</p>
                {/* <p>Description: {data?.page[1].desc}</p> */}
            </div>

            <div className="animalCard">
                <img className="animalImage" src={data?.page[4].pic_url} />
                <p>Species: {data?.page[4].species_breed.species_name}</p>
                <p>Breed: {data?.page[4].species_breed.breed_name}</p>
                <p>Name: {data?.page[4].name}</p>
                <p>Age: {data?.page[4].age}</p>
                <p>Sex: {data?.page[4].sex}</p>
                <p>Color: {data?.page[4].color}</p>
                <p>Location: {data?.page[4].center.name}</p>
                <p>City: {data?.page[4].center.city}</p>
                <p>State: {data?.page[4].center.state}</p>
                {/* <p>Description: {data?.page[1].desc}</p> */}
            </div>

            <div className="animalCard">
                <img className="animalImage" src={data?.page[5].pic_url} />
                <p>Species: {data?.page[5].species_breed.species_name}</p>
                <p>Breed: {data?.page[5].species_breed.breed_name}</p>
                <p>Name: {data?.page[5].name}</p>
                <p>Age: {data?.page[5].age}</p>
                <p>Sex: {data?.page[5].sex}</p>
                <p>Color: {data?.page[5].color}</p>
                <p>Location: {data?.page[5].center.name}</p>
                <p>City: {data?.page[5].center.city}</p>
                <p>State: {data?.page[5].center.state}</p>
                {/* <p>Description: {data?.page[1].desc}</p> */}
            </div>

            <div className="animalCard">
                <img className="animalImage" src={data?.page[6].pic_url} />
                <p>Species: {data?.page[6].species_breed.species_name}</p>
                <p>Breed: {data?.page[6].species_breed.breed_name}</p>
                <p>Name: {data?.page[6].name}</p>
                <p>Age: {data?.page[6].age}</p>
                <p>Sex: {data?.page[6].sex}</p>
                <p>Color: {data?.page[6].color}</p>
                <p>Location: {data?.page[6].center.name}</p>
                <p>City: {data?.page[6].center.city}</p>
                <p>State: {data?.page[6].center.state}</p>
                {/* <p>Description: {data?.page[1].desc}</p> */}
            </div>

            <div className="animalCard">
                <img className="animalImage" src={data?.page[7].pic_url} />
                <p>Species: {data?.page[7].species_breed.species_name}</p>
                <p>Breed: {data?.page[7].species_breed.breed_name}</p>
                <p>Name: {data?.page[7].name}</p>
                <p>Age: {data?.page[7].age}</p>
                <p>Sex: {data?.page[7].sex}</p>
                <p>Color: {data?.page[7].color}</p>
                <p>Location: {data?.page[7].center.name}</p>
                <p>City: {data?.page[7].center.city}</p>
                <p>State: {data?.page[7].center.state}</p>
                {/* <p>Description: {data?.page[1].desc}</p> */}
            </div>

            <div className="animalCard">
                <img className="animalImage" src={data?.page[8].pic_url} />
                <p>Species: {data?.page[8].species_breed.species_name}</p>
                <p>Breed: {data?.page[8].species_breed.breed_name}</p>
                <p>Name: {data?.page[8].name}</p>
                <p>Age: {data?.page[8].age}</p>
                <p>Sex: {data?.page[8].sex}</p>
                <p>Color: {data?.page[8].color}</p>
                <p>Location: {data?.page[8].center.name}</p>
                <p>City: {data?.page[8].center.city}</p>
                <p>State: {data?.page[8].center.state}</p>
                {/* <p>Description: {data?.page[1].desc}</p> */}
            </div>
        </div>
    )
}

export default CommitSearch;