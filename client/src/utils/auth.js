class AuthService {

    getToken() {
        
        // // Finding a cookie with the name of jwt
        // let name = "jwt=";
        // let decodedCookie = decodeURIComponent(document.cookie);
        // let ca = decodedCookie.split(';');
        // for(let i = 0; i <ca.length; i++) {
        //     let c = ca[i];
        //     while (c.charAt(0) == ' ') {
        //     c = c.substring(1);
        //     }
        //     if (c.indexOf(name) == 0) {
        //     return c.substring(name.length, c.length);
        //     }
        // }
        // return "";
        const token = localStorage.getItem("token");

        return token;
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        //return !!token && !this.isTokenExpired(token);
        if (token) {
            return true;
        }
        return false;

    }
    isTokenExpired(token) {
        try {
            const expiration = localStorage.getItem("expiration") // "2h"
            const decoded = { exp: expiration };
            const isTokenExpired = decoded.exp < Date.now() / 1000;

            console.log("Date.now() / 1000: ", Date.now() / 1000);
            if (isTokenExpired) {
                return true;
            } else return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
};

export default AuthService;