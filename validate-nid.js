/* Validate NID */

var getNID = document.getElementById('input-nid')
var alertErrorNID = document.getElementsByClassName('error-nid')

function validateNID () {
    var inputNID = getNID.value;
    if (inputNID.length < 7 | inputNID.length >8) {
        alertErrorNID[0].className = 'error-msg-nid';
    }
}

function changeValueNID () {
    var getNID = document.getElementById('input-nid').value;
    var alertErrorNIDClass = document.getElementById('error-nid').getAttribute('class');
    if (getNID == "" && alertErrorNIDClass == 'error-nid') {
        var alertErrorNID = document.getElementById('error-nid');
        alertErrorNID.className = 'error-nid';  
    }else{
        var alertErrorNID = document.getElementsByClassName('error-msg-nid')
        alertErrorNID[0].className = 'error-nid';
    }
}

getNID.onblur = validateNID
getNID.onfocus = changeValueNID