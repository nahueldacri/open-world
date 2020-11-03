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
    var alertErrorRepeatPassword = document.getElementsByClassName('error-msg-repeat-password')
    alertErrorRepeatPassword[0].className = 'error-repeat-password';
 }

getRepeatPassword.onblur = validateRepeatPassword
getRepeatPassword.onfocus = changeValueRepeatPassword