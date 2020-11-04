/* Validate password repeat */

var getRepeatPassword = document.getElementById('input-repeat-password')
var alertErrorRepeatPassword = document.getElementsByClassName('error-repeat-password')
var getPassword = document.getElementById('input-password')

function validateRepeatPassword () {
    var inputRepeatPassword = getRepeatPassword.value;
    var inputPassword = getPassword.value
    if (inputRepeatPassword !== inputPassword) {
        alertErrorRepeatPassword[0].className = 'error-msg-repeat-password';
    }
}

function changeValueRepeatPassword () {
    var getRepeatPassword = document.getElementById('input-repeat-password').value;
    var alertErrorRepeatPasswordClass = document.getElementById('error-repeat-password').getAttribute('class');
    if (getRepeatPassword == "" && alertErrorRepeatPasswordClass == 'error-repeat-password') {
        var alertErrorRepeatPassword = document.getElementById('error-repeat-password');
        alertErrorRepeatPassword.className = 'error-repeat-password';  
    }else{
        var alertErrorRepeatPassword = document.getElementsByClassName('error-msg-repeat-password')
        alertErrorRepeatPassword[0].className = 'error-repeat-password';
    }
}

getRepeatPassword.onblur = validateRepeatPassword
getRepeatPassword.onfocus = changeValueRepeatPassword