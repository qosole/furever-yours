import { useEffect, createContext, useState } from "react";


const petFinderKey = "WXh8Fm1P6GydlDOm9kP564MYwUs6ITqhBWye7MEwqcwvyU9XQy";
const petFinderSecret = "VSBGhUAftbzFDnPwh2pRc3x41qEVKGbMM96U74Uu";

const MyToken = async (setAccessToken) => {
    // const [accessToken, setAccessToken] = useState(null);


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
    await fetchAccessToken();

// console.log(accessToken);

return
}

export default MyToken;