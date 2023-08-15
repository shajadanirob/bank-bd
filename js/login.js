document.getElementById('login-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input')
    const emailField = emailInput.value;
    console.log(emailField)

    const passwordInput = document.getElementById('password-input');
    const passwordField = passwordInput.value;

    if (emailField === 'nirob@gmail.com' && passwordField === 'nirob') {
        window.location.href = 'dashborad.html'
    }
})