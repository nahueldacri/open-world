/* validate age */

var getAge = document.getElementById('input-age')
var alertErrorAge = document.getElementsByClassName('error-age')

function validateAge () {
    var inputAge = getAge.value
    if (inputAge < 18) {
        alertErrorAge[0].className = 'error-msg-age';
    }
}

function changeValueAge () {
    var alertErrorAge = document.getElementsByClassName('error-msg-age')
    alertErrorAge[0].className = 'error-age';
 }

getAge.onblur = validateAge
getAge.onfocus = changeValueAge

