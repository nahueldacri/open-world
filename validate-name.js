/* Validate name */

var getName = document.getElementById('input-name')
var alertErrorName = document.getElementsByClassName('error-name')

function validateName (getName) {
    var inputName = getName.target.value;
    if (inputName.length < 6 || !inputName.includes(" ")){
        alertErrorName[0].className = 'error-msg-name';
    }
}

function changeValueName () {
   var alertErrorName = document.getElementsByClassName('error-msg-name')
   alertErrorName[0].className = 'error-name';
}

getName.onblur = validateName
getName.onfocus = changeValueName