// import { useEffect, useContext, useState } from "react";

// const AuthContext = React.createContext();
// const petFinderKey = "WXh8Fm1P6GydlDOm9kP564MYwUs6ITqhBWye7MEwqcwvyU9XQy";
// const petFinderSecret = "VSBGhUAftbzFDnPwh2pRc3x41qEVKGbMM96U74Uu";

// function MyToken ({ Component, pageProps }) {
//     const [accessToken, setAccessToken] = useState(null);

// useEffect(() => {
//     const fetchAccessToken = async () => {
//         const params = new URLSearchParams();
//         params.append("grant_type", "client_credentials");
//         params.append("client_id", petFinderKey);
//         params.append("client_secret", petFinderSecret);
//         const petfinderRes = await fetch(
//             "https://api.petfinder.com/v2/oauth2/token",
//             {
//                 method: "POST",
//                 body: params
//             }
//         );
//         setAccessToken(await petfinderRes.json());
//     };
//     fetchAccessToken();
//     console.log(accessToken);
// }, []);

// return (
//     <AuthContext.Provider>

//     </AuthContext.Provider>
// );
// }



// export default MyToken;