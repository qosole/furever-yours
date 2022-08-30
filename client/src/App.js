import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MyToken from './components/oauth-token';
import './Style.css';

// Pass users array to the List component as a prop
export default function App() {

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}