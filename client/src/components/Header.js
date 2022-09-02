import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/login2';
import '../Style.css';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Account') {
      return <Account />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main-page-body">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
