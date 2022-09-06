import React, { useState } from 'react';
import '../../Style.css';

// This helper function checks if the inputted email is a valid email address
import { validateEmail } from '../../utils/helper';

export default function Signup() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    } else {
      setLocation(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the form from refreshing on submit
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    
    try {
      const response = await fetch("api/users/register", {
        method: "POST",
        body: JSON.stringify({ email, userName, password, location }),
        headers: { "content-type": "application/json" }
      })
      const data = await response.json()

      localStorage.setItem("token", data.token)
      localStorage.setItem("expiration", data.expiration);

      // window.location.reload();

      console.log(data)
    } catch (e) {
      console.log(e);
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
    setLocation('');

  };

  return (
    <div className="signupContainer">
      <p>Sign Up</p>
      <form className="form container my-1">
        <div id="emailbox" className="flex-row space-between my-2">
        <label htmlFor="email">Email address:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="youremail@test.com"
          />
        </div>
        <br></br>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Username"
        />
        <div id="passwordbox" className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <input
          value={location}
          name="location"
          onChange={handleInputChange}
          type="text"
          placeholder="Location"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}