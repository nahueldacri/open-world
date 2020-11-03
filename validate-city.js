/* Validate city */

var getCity = document.getElementById('input-city')
var alertErrorCity = document.getElementsByClassName('error-city')

function validateCity () {
    var inputCity = getCity.value;
    if (inputCity.length < 3) {
        alertErrorCity[0].className = 'error-msg-city';
    }
}

function changeValueCity () {
    var alertErrorCity = document.getElementsByClassName('error-msg-city')
    alertErrorCity[0].className = 'error-city';
 }

getCity.onblur = validateCity
getCity.onfocus = changeValueCity