import React, { useState } from 'react';

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

      console.log('Data: ',data);

      localStorage.setItem("token", data.token)
      localStorage.setItem("expiration", data.expiration);
      localStorage.setItem("user", JSON.stringify(data.user))


      console.log(data)
      window.location.reload();
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

  // if (Auth.loggedIn()) {
  return (
    <div className="container my-1">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div id="emailbox" className="flex-row space-between my-2">
          <label htmlFor="email"></label>
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div id="passwordbox" className="flex-row space-between my-2">
          <label htmlFor="pwd"></label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div id="loginbtn" className="flex-row flex-end">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
  // }
  // else {
  //   return <Login />
  // }
}

export default Login;