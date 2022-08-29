import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import MyToken from './components/oauth-token';
import './Style.css';

// Pass users array to the List component as a prop
export default function App() {

const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
  if (!accessToken)
  {
  const petFinderKey = "WXh8Fm1P6GydlDOm9kP564MYwUs6ITqhBWye7MEwqcwvyU9XQy";
  const petFinderSecret = "VSBGhUAftbzFDnPwh2pRc3x41qEVKGbMM96U74Uu";

  const fetchAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", petFinderKey);
  params.append("client_secret", petFinderSecret);
  const petfinderRes = await fetch(
      "https://api.petfinder.com/v2/oauth2/token",
      {
          method: "POST",
          body: params
      }
  );
  setAccessToken(await petfinderRes.json());
};
fetchAccessToken();
}}, []);

console.log(accessToken);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}