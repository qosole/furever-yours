const petFinderKey = "WXh8Fm1P6GydlDOm9kP564MYwUs6ITqhBWye7MEwqcwvyU9XQy";
const petFinderSecret = "VSBGhUAftbzFDnPwh2pRc3x41qEVKGbMM96U74Uu";

export default async (req, res) => {
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
    const data = await petfinderRes.json();
    res.send(data);
}