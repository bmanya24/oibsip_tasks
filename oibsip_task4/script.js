const loginSlide = document.querySelector('.login-slide');
const registerSlide = document.querySelector('.register-slide');
const toggleLoginButton = document.getElementById('toggle-login');
const toggleRegisterButton = document.getElementById('toggle-register');
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
const loginMessage = document.getElementById('login-message');
const registrationMessage = document.getElementById('registration-message');
const message = document.getElementById('message');
const logoutButton = document.getElementById('logout-button');
let users = [];

toggleLoginButton.addEventListener('click', () => {
    loginSlide.style.display = 'block';
    registerSlide.style.display = 'none';
    clearMessages();
});

toggleRegisterButton.addEventListener('click', () => {
    loginSlide.style.display = 'none';
    registerSlide.style.display = 'block';
    clearMessages();
});

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const loginUsername = loginForm.elements.username.value;
    const loginPassword = loginForm.elements.password.value;

    
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
        // Show the logout button
        logoutButton.style.display = 'block';
    } else {
        loginMessage.textContent = 'Invalid username or password';
        loginMessage.style.color = 'red';
    }
});

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const registerUsername = registrationForm.elements.username.value;
    const registerPassword = registrationForm.elements.password.value;

    const existingUser = users.find(u => u.username === registerUsername);

    if (existingUser) {
        registrationMessage.textContent = 'Username already exists';
        registrationMessage.style.color = 'red';
    } else {
        // You should hash the password before storing it (e.g., using bcrypt)
        users.push({ username: registerUsername, password: registerPassword });
        registrationMessage.textContent = 'Registration successful!';
        registrationMessage.style.color = 'green';
    }
});

logoutButton.addEventListener('click', function () {
    loginMessage.textContent = '';
    logoutButton.style.display = 'none';
    loginForm.elements.username.value = '';
    loginForm.elements.password.value = '';
});

function clearMessages() {
    loginMessage.textContent = '';
    registrationMessage.textContent = '';
    message.textContent = '';
}
