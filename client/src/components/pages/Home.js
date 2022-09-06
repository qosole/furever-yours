import React, { useMemo } from 'react';
import '../../Style.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

import AuthService from "../../utils/auth";
import SearchBar from '../SearchBar';
import Login from './login2';


import { Hint } from 'react-autocomplete-hint';




export default function Home() {

  const [pet, setPet] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState({ pet: "", city: "" });
  const [user, setUser] = useState(null)

  const options = ["toms river", "new market", "montreal", "visalia", "st. louis", "new castle de"];

  const auth = useMemo(() => new AuthService(), [])

  useEffect(() => {
    if (auth.loggedIn()) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [auth])

  return (
    auth.loggedIn() ? (
      <div className="animate__animated animate__fadeInUp">
        <h1>
          {
            user ? `Welcome ${user.username}` : 'Home'
          }
        </h1>

        <div className="searchform">
          <form id="form" className="form" >
            <div className="field">
            
              <Hint options={options}>
                <input
                  className="inputSearch"
                  data-list="montreal"
                  type="text"
                  placeholder="Enter a City"
                  value={city}
                  onChange={event => setCity(event.target.value.toLowerCase())}
                />
              </Hint>

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
    ) : <Login />
  )

}


