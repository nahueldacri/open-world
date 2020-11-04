/* Validate adress */

var getAdress = document.getElementById('input-adress')
var alertErrorAdress = document.getElementsByClassName('error-adress')

function validateAdress () {
    var inputAdress = getAdress.value;
    var space = inputAdress.includes(' ');
    var minCharacters = inputAdress.length >= 5;
    var contentLetters = /[A-Za-z]/i;
    var contentNumbers = /[0-9]/g;
    var letters = contentLetters.test(inputAdress);
    var numbers = contentNumbers.test(inputAdress);
    if (space == false || minCharacters == false || !letters || !numbers) {
        alertErrorAdress[0].className = 'error-msg-adress';
    }
}

function changeValueAdress () {
    var getAdress = document.getElementById('input-adress').value;
    var alertErrorAdressClass = document.getElementById('error-adress').getAttribute('class');
    if (getAdress == "" && alertErrorAdressClass == 'error-adress') {
        var alertErrorAdress = document.getElementById('error-adress');
        alertErrorAdress.className = 'error-adress';  
    }else{
        var alertErrorAdress = document.getElementsByClassName('error-msg-adress')
        alertErrorAdress[0].classAdress = 'error-adress';
    }
    
}

getAdress.onblur = validateAdress
getAdress.onfocus = changeValueAdress