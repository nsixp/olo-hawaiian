let password = document.getElementById('password');
let togglePassword = document.getElementById('toggle-pass');
let confirmPassword = document.getElementById('confirm-password');
let toggleConfirmPassword = document.getElementById('toggle-conf-pass');

function showHide() {
    if (password.type === 'password', confirmPassword.type === 'password') {
        password.setAttribute('type', 'text');
        togglePassword.classList.add('hide');
        confirmPassword.setAttribute('type', 'text');
        toggleConfirmPassword.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        togglePassword.classList.remove('hide');
        confirmPassword.setAttribute('type', 'password');
        toggleConfirmPassword.classList.remove('hide');
    }
}