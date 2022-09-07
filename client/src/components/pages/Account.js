// import React from 'react';
import '../../Style.css';
import { useState, useEffect } from 'react';

import React, { useMemo } from 'react';
import AuthService from "../../utils/auth";
import Login from './login2';


export default function Account() {
  const [user, setUser] = useState(null)
  const [save, setSave] = useState(null)


  
  const auth = useMemo(() => new AuthService(), [])

  useEffect(() => {
    if (auth.loggedIn()) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [auth])

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem('savedPets'));
    if (save) {
     setSave(save);
     
    }
    console.log(save)

  }, []);
  

//   function displayPet() {
    
//     const savedPet = JSON.parse(localStorage.getItem("savedPets"));
//     console.log(savedPet) 
// }


return (
    auth.loggedIn() ? (
      <div className="animate__animated animate__fadeIn">
        <h1>Account Information</h1>
          <div className="account-container">
          <p>
            {
              user ? `Username: ${user.username}` : 'Home'
            }
          </p>

          <p>
            {
              user ? `Email: ${user.email}` : 'Home'
            }
          </p>
          </div>
          <div className="pet-box">
            <h2>Saved pets: </h2>
            <div className="savedAnimals">
            {save?.map((animal, i) => {
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
                </div>)
            })

            }     
            </div>
            
          </div>
      </div>
      

    ) : <Login />
  )
}
