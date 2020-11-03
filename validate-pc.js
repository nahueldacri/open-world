/* Validate postal code */

var getPC = document.getElementById('input-pc')
var alertErrorPC = document.getElementsByClassName('error-pc')

function validatePC () {
    var inputPC = getPC.value;
    if (inputPC.length < 3) {
        alertErrorPC[0].className = 'error-msg-pc';
    }
}

function changeValuePC () {
    var alertErrorPC = document.getElementsByClassName('error-msg-pc')
    alertErrorPC[0].className = 'error-pc';
 }

getPC.onblur = validatePC
getPC.onfocus = changeValuePC