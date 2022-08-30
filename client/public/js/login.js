const loginFormHandler = async (event) => {
    event.preventDefault();

    console.log('im here')

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {

        // Send a POST request to the API endpoint
        const response = await fetch('/api/User/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // if the response was successful, replace the page with user profile
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);