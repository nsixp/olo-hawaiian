let password = document.getElementById('password');
let togglePassword = document.getElementById('toggle-pass');

function showHide() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        togglePassword.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        togglePassword.classList.remove('hide');
    }
}