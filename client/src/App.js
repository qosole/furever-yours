import {useEffect, createContext, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './Style.css';
// import { ArgumentOutOfRangeError } from 'rxjs';

export const AuthContext = createContext();

function App({Component, pageProps}) {
  const [accessToken, setAccessToken] = useState(null);

useEffect(() => {
  const fetchAccessToken = async () => {
    const res = await fetch("/api/oauth-token");
    const json = await res.json();
    setAccessToken(json.access_token);
    console.log(await res.json());
  };
  fetchAccessToken();
}, []);


  return (
    <AuthContext.Provider value={accessToken}>
      <Header />
      <Footer />
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default App;