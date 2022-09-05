class AuthService {

    getToken() {

        const token = localStorage.getItem("token");

        return token;
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);

    }
    isTokenExpired(token) {
        try {
            // TODO: Please bring the correct decode
            // const decoded = decode(token);
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