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
    var getPC = document.getElementById('input-pc').value;
    var alertErrorPCClass = document.getElementById('error-pc').getAttribute('class');
    if (getPC == "" && alertErrorPCClass == 'error-pc') {
        var alertErrorPC = document.getElementById('error-pc');
        alertErrorPC.className = 'error-pc';  
    }else{
        var alertErrorPC = document.getElementsByClassName('error-msg-pc')
        alertErrorPC[0].className = 'error-pc';
    }
}

getPC.onblur = validatePC
getPC.onfocus = changeValuePC