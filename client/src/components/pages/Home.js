import React from 'react';
import '../../Style.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import SearchBar from '../SearchBar';


export default function Home() {

  const [pet, setPet] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState({pet:"", city:""});
 

  return (
    <div>
      <h1>Home</h1>
      
      <div className="searchform">
        <form id="form" className="form" >
          <div className="field">
            {/* <input
              type="text"
              placeholder="search for a pet"
              value= {pet}
              onChange={event=>setPet(event.target.value)}
            /> */}
            <input
              type="text"
              placeholder="city"
              value= {city}
              onChange={event=>setCity(event.target.value)}
            />
          
            <select
            className="dropdown"
            value={pet}
            onChange={event=>setPet(event.target.value)}
            > 
                  <option value="Cat"> Cat</option>
                  <option value="Dog">Dog</option>
            </select>
          
             <button className="searchbtn"
             onClick={event=>{
              event.preventDefault()
              setSearch({pet, city})
            }}
             > 
             <FontAwesomeIcon icon={ faMagnifyingGlass } size= '2x'/>
             </button>
          </div>
        </form>
      </div>

      <SearchBar pet={search.pet} city={search.city}/>
    </div>
  );
}


