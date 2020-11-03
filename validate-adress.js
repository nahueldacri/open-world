/* Validate adress */

var getAdress = document.getElementById('input-adress')
var alertErrorAdress = document.getElementsByClassName('error-adress')

function validateAdress () {
    var inputAdress = getAdress.value;
    var space = inputAdress.includes(' ');
    var minCharacters = inputAdress.length >= 5;
    if (space == false || minCharacters == false) {
        alertErrorAdress[0].className = 'error-msg-adress';
    }
}

function changeValueAdress () {
    var alertErrorAdress = document.getElementsByClassName('error-msg-adress')
    alertErrorAdress[0].className = 'error-adress';
 }

getAdress.onblur = validateAdress
getAdress.onfocus = changeValueAdress