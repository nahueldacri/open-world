/* Validate password */

var getPassword = document.getElementById('input-password')
var alertErrorPassword = document.getElementsByClassName('error-password')

function validatePassword () {
    var inputPassword = getPassword.value;
    var space = inputPassword.includes(' ');
    var minCharacters = inputPassword.length >= 8;
    var contentLetters = /[A-Za-z]/i;
    var contentNumbers = /[0-9]/g;
    var letters = contentLetters.test(inputPassword);
    var numbers = contentNumbers.test(inputPassword);
    if (space == true || minCharacters == false || !letters || !numbers) {
        alertErrorPassword[0].className = 'error-msg-password';
    }
}

function changeValuePassword () {
    var getPassword = document.getElementById('input-password').value;
    var alertErrorPasswordClass = document.getElementById('error-password').getAttribute('class');
    if (getPassword == "" && alertErrorPasswordClass == 'error-password') {
        var alertErrorPassword = document.getElementById('error-password');
        alertErrorPassword.className = 'error-password';  
    }else{
        var alertErrorPassword = document.getElementsByClassName('error-msg-password')
        alertErrorPassword[0].className = 'error-password';
    }
}

getPassword.onblur = validatePassword
getPassword.onfocus = changeValuePassword