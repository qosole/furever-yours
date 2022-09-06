import React from 'react';
import '../../Style.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

import AuthService from "../../utils/auth";
import SearchBar from '../SearchBar';
import Login from './login2';


export default function Home() {

  const [pet, setPet] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState({ pet: "", city: "" });

  const auth = new AuthService();

  const handleFormSubmit = () => {

  }

  if (auth.loggedIn()) {
    return (
      <div class="animate__animated animate__fadeInUp">
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
                className="inputSearch"
                type="text"
                placeholder="Enter a City"
                value={city}
                onChange={event => setCity(event.target.value)}
              />

              <select
                className="dropdown"
                value={pet}
                onChange={event => setPet(event.target.value)}
              >
                <option value="Cat"> Cat</option>
                <option value="Dog">Dog</option>
              </select>

              <button className="searchbtn"
                onClick={event => {
                  event.preventDefault()
                  setSearch({ pet, city })
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
              </button>
            </div>
          </form>
        </div>

        <SearchBar pet={search.pet} city={search.city} />
      </div>
    )
  }
  else {
    return <Login />
  }
}
