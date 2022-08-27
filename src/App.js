import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
