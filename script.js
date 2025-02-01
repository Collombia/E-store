// Function to handle search button click
document.querySelector('.search-btn').addEventListener('click', function() {
    const itemName = document.querySelector('.search-bar input[type="text"]').value;
    const location = document.querySelector('.search-bar input[type="text"]:nth-child(2)').value;

    if (itemName && location) {
        alert(`Searching for "${itemName}" in "${location}"...`);
        // Here you can add functionality to perform the search
    } else {
        alert('Please enter both item name and location.');
    }
});

// Function to handle newsletter subscription
document.querySelector('.subscribe-btn').addEventListener('click', function() {
    const emailInput = document.querySelector('.newsletter-form input[type="email"]');
    const email = emailInput.value;

    if (email) {
        alert(`Thank you for subscribing with the email: ${email}`);
        emailInput.value = ''; // Clear the input field after subscription
    } else {
        alert('Please enter a valid email address.');
    }
});

// Function to toggle login and signup forms
function toggleLoginSignup() {
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    loginBtn.addEventListener('click', function() {
        alert('Login form would be displayed here.');
        // Here you can add functionality to display the login form
    });

    signupBtn.addEventListener('click', function() {
        alert('Signup form would be displayed here.');
        // Here you can add functionality to display the signup form
    });
}

// Initialize the functions
toggleLoginSignup();