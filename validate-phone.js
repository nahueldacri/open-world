/* Validate phone */

var getPhone = document.getElementById('input-phone')
var alertErrorPhone = document.getElementsByClassName('error-phone')

function validatePhone () {
    var inputPhone = getPhone.value;
    var minCharacter = inputPhone.length < 7;
    var space = inputPhone.includes(" ");
    var script = inputPhone.includes('-');
    var openingParenthesis = inputPhone.includes ('(');
    var closingParenthesis = inputPhone.includes (')');
    if (minCharacter == true || space == true || script == true || openingParenthesis == true || closingParenthesis == true) {
        alertErrorPhone[0].className = 'error-msg-phone';
    }
}

function changeValuePhone () {
    var alertErrorPhone = document.getElementsByClassName('error-msg-phone')
    alertErrorPhone[0].className = 'error-phone';
 }

getPhone.onblur = validatePhone
getPhone.onfocus = changeValuePhone