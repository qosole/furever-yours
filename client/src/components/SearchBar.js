import React, {useEffect, useState } from 'react';
import axios from "axios";
import useFetch from './fetchRequest';
import '../Style.css';

function CommitSearch() {
    const { data, loading, error } = useFetch("https://api.adoptapet.me/search?q=dogs");

    if (loading) return <h1> LOADING...</h1>;

    if (error) console.log(error);

    return (
        <div>
            <h1>
                test
                {console.log(data)}
                {data?.name}
                {data?.sex}
            </h1>
        </div>
    )
}

export default CommitSearch;