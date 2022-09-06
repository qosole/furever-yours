import React from 'react';
import '../Style.css';
import logo from "../../src/Furever-Yours-Logo.jpg";
import AuthService from '../utils/auth';

function Nav({ currentPage, handlePageChange }) {
  const auth = new AuthService()
  return (
    <nav className="main-nav-menu">
        <img src={logo} alt="Logo" className="logo" />
    <section className="main-nav-items">
    <ul>
      <li className="topBotomBordersIn">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#account"
          onClick={() => handlePageChange('Account')}
          className={currentPage === 'Account' ? 'nav-link active' : 'nav-link'}
        >
          Account
        </a>
      </li>
      {
        !auth.loggedIn() ? (
          <li>
            <a
              href="#login"
              onClick={() => handlePageChange('Login')}
              className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
            >
              Login
            </a>
          </li> ) : (
             <li>
              <a
                href="#login"
            
                className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
              >
                Logout
              </a>
            </li>
          )
        
      }
     
      <li>
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Sign up
        </a>
      </li>
    </ul>
</section>
</nav>
  );
}

export default Nav;