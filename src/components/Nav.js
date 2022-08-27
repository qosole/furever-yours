import React from 'react';
import '../Style.css';

function Nav({ currentPage, handlePageChange }) {

  return (
    <nav className="main-nav-menu">
    <section className="main-nav-items">
    <ul>
      <li>
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
      <li>
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login / Logout
        </a>
      </li>
    </ul>
</section>
</nav>
  );
}

export default Nav;