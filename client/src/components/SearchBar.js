import React, { useEffect, useState } from 'react';
import axios from "axios";
import useFetch from './fetchRequest';
import '../Style.css';


function CommitSearch({ pet, city, savePet }) {
    const { data, loading, error } = useFetch("https://api.adoptapet.me/ap");

    if (loading) return <h1> LOADING...</h1>;

    if (error) console.log(error);

    var cityInput = city;
    var petInput = pet;

    let newData = data?.page.filter((animal) => {
        if (animal.center.city.toLowerCase() === cityInput && animal.species_breed.species_name.includes(petInput)) {
            return true
        } else {
            return false
        }
    })

    if (!newData?.length) return <h1> No results found. Sorry. </h1>;
    
   
    return (
        <div className="animate__animated animate__fadeIn">
        <div className="animalSearchResults">
            {newData?.map((animal, i) => {
                return (<div className="animalCard" key={i}>
                    <img className="animalImage" src={animal.pic_url} alt="animal"/>
                    <p>Species: {animal.species_breed.species_name}</p>
                    <p>Breed: {animal.species_breed.breed_name}</p>
                    <p>Name: {animal.name}</p>
                    <p>Age: {animal.age}</p>
                    <p>Sex: {animal.sex}</p>
                    <p>Color: {animal.color}</p>
                    <p>Location: {animal.center.name}</p>
                    <p>City: {animal.center.city}</p>
                    <p>State: {animal.center.state}</p>
                    <button className="savePet"
                     onClick={event => {
                        event.preventDefault()
                        savePet(animal)
                      }}
                    > Save Pet ❤️
                    </button>
                </div>)
            })

            }

        </div>

        </div>
    )
}

export default CommitSearch;