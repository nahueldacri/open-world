/* Validate e-mail */

var getEmail = document.getElementById('input-email')
var alertErrorEmail = document.getElementsByClassName('error-email')

function validateEmail (){
    var inputEmail = getEmail.value
    if (!inputEmail.includes("@")) {
        alertErrorEmail[0].className = 'error-msg-email';
    }
}

function changeValueEmail () {
    var alertErrorEmail = document.getElementsByClassName('error-msg-email')
    alertErrorEmail[0].className = 'error-email';
 }

getEmail.onblur = validateEmail
getEmail.onfocus = changeValueEmail
