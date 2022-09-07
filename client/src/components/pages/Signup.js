import React, { useState } from 'react';
import '../../Style.css';

// This helper function checks if the inputted email is a valid email address
import { validateEmail } from '../../utils/helper';

export default function Signup() {

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'username') {
      setUserName(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the form from refreshing on submit
    e.preventDefault();

    // Checking if email and username are valid
    if (!validateEmail(email) || !username) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    
    try {
      const response = await fetch("api/users/register", {
        method: "POST",
        body: JSON.stringify({ email, username, password }),
        headers: { "content-type": "application/json" }
      })
      const data = await response.json()

      localStorage.setItem("token", data.token)
      localStorage.setItem("expiration", data.expiration);

      window.location.reload();

      console.log(data)
    } catch (e) {
      console.log(e);
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');

  };

  return (
    <div className="container my-1">
      <h2>Sign Up</h2>
      <form>
        <div id="emailbox" className="flex-row space-between my-2">
        <label htmlFor="email"></label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="youremail@test.com"
          />
        </div>
        <br></br>
        <div id="usernamebox" className="flex-row space-between my-2">
        <label htmlFor="username"></label>
        <input
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Username"
        />
        </div>
        <div id="passwordbox" className="flex-row space-between my-2">
          <label htmlFor="pwd"></label>
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div id="submitbtn" className="flex-row flex-end">
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
     
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form>
    </div>
  );
}