// import React from 'react';
import '../../Style.css';
import { useState, useEffect } from 'react';

import React, { useMemo } from 'react';
import AuthService from "../../utils/auth";
import Login from './login2';


export default function Account() {
  const [user, setUser] = useState(null)


  
  const auth = useMemo(() => new AuthService(), [])

  useEffect(() => {
    if (auth.loggedIn()) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [auth])


  return (
    auth.loggedIn() ? (
      <div className="account">
        <h1>Account</h1>
          <h3>
            {
              user ? `Username: ${user.username}` : 'Home'
            }
          </h3>

          <h3>
            {
              user ? `Email: ${user.email}` : 'Home'
            }
          </h3>
      </div>
      

    ) : <Login />
  )
}