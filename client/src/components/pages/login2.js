import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("api/users/login", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: { "content-type": "application/json" }
      })
      const data = await response.json()
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="container my-1">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="emailinput flex-row space-between my-2">
          <label htmlFor="email"></label>
          <input
            placeholder="Enter your E-Mail Address here!! "
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="passwordinput flex-row space-between my-2">
          <label htmlFor="pwd"></label>
          <input
            placeholder="Enter your Password here!!"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;