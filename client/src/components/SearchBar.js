import React, { useEffect, useState } from 'react';
import axios from "axios";
import useFetch from './fetchRequest';
import '../Style.css';

function CommitSearch({ pet, city }) {
    const { data, loading, error } = useFetch("https://api.adoptapet.me/ap");

    if (loading) return <h1> LOADING...</h1>;

    if (error) console.log(error);

    var cityInput = city;
    var petInput = pet;

    let newData = data?.page.filter((animal) => {
        if (animal.center.city === cityInput && animal.species_breed.species_name.includes(petInput)) {
            return true
        } else {
            return false
        }
    })

    if (!newData?.length) return <h1> No results found. Sorry. </h1>;

    return (

        <div className="animalSearchResults">
            {newData?.map(animal => {
                return (<div className="animalCard">
                    <img className="animalImage" src={animal.pic_url} />
                    <p>Species: {animal.species_breed.species_name}</p>
                    <p>Breed: {animal.species_breed.breed_name}</p>
                    <p>Name: {animal.name}</p>
                    <p>Age: {animal.age}</p>
                    <p>Sex: {animal.sex}</p>
                    <p>Color: {animal.color}</p>
                    <p>Location: {animal.center.name}</p>
                    <p>City: {animal.center.city}</p>
                    <p>State: {animal.center.state}</p>
                </div>)
            })

            }

        </div>

        // <div className="animalSearchResults">
        //     {/* {console.log(data)} */}
        //     <div className="animalCard">
        //         <img className="animalImage" src={data?.page[0].pic_url} />
        //         <p>Species: {data?.page[0].species_breed.species_name}</p>
        //         <p>Breed: {data?.page[0].species_breed.breed_name}</p>
        //         <p>Name: {data?.page[0].name}</p>
        //         <p>Age: {data?.page[0].age}</p>
        //         <p>Sex: {data?.page[0].sex}</p>
        //         <p>Color: {data?.page[0].color}</p>
        //         <p>Location: {data?.page[0].center.name}</p>
        //         <p>City: {data?.page[0].center.city}</p>
        //         <p>State: {data?.page[0].center.state}</p>
        //     {/* <p>Description: {data?.page[0].desc}</p> */}
        //     </div>
        // </div>
    )
}

export default CommitSearch;