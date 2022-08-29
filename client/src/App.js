import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MyToken from './components/oauth-token';
import './Style.css';

// Pass users array to the List component as a prop
export default function App() {

const petFinderKey = "WXh8Fm1P6GydlDOm9kP564MYwUs6ITqhBWye7MEwqcwvyU9XQy";
const petFinderSecret = "VSBGhUAftbzFDnPwh2pRc3x41qEVKGbMM96U74Uu";

const [accessToken, setAccessToken] = useState(null);

MyToken(setAccessToken);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}