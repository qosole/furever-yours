import React, {useEffect, useState } from 'react';
import axios from "axios";
import useFetch from './fetchRequest';
import '../Style.css';

function CommitSearch() {
    const { data, loading, error } = useFetch("https://api.adoptapet.me/ap");

    if (loading) return <h1> LOADING...</h1>;

    if (error) console.log(error);

    return (
        <div>
            {console.log(data)}
            <img src={data?.page[0].pic_url} />
            <p>Species: {data?.page[0].species_breed.species_name}</p>
            <p>Breed: {data?.page[0].species_breed.breed_name}</p>
            <p>Name: {data?.page[0].name}</p>
            <p>Age: {data?.page[0].age}</p>
            <p>Sex: {data?.page[0].sex}</p>
            <p>Color: {data?.page[0].color}</p>
            <p>Location: {data?.page[0].center.name}</p>
            <p>City: {data?.page[0].center.city}</p>
            <p>State: {data?.page[0].center.state}</p>
            <p>Description: {data?.page[0].desc}</p>
        </div>
    )
}

export default CommitSearch;