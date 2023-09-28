// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values entered by the user
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform simple validation
    if (username === 'your_username' && password === 'your_password') {
        alert('Login successful!');
        // You can redirect the user to a different page here if needed.
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
