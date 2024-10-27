function togglePassword(passwordId) {
    const passwordField = document.getElementById(passwordId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const validUsername = 'GENTRIT';
    const validPassword = 'gentrit';

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        window.location.href = 'Newspage.html'; 
    } else {
        alert('Invalid credentials, please try again.');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Signup successful! You can now login.');
    switchToLogin();
});

document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault(); 
    switchToSignup();
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault(); 
    switchToLogin();
});

function switchToSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('signupTitle').style.display = 'block';
    document.getElementById('showLogin').parentElement.style.display = 'block'; 
    document.getElementById('showSignup').parentElement.style.display = 'none';
    document.querySelector('h2').style.display = 'none'; 
}
function switchToLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signupTitle').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('showLogin').parentElement.style.display = 'none'; 
    document.getElementById('showSignup').parentElement.style.display = 'block';
    document.querySelector('h2').style.display = 'block'; 
}
