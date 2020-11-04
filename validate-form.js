/* Validate form */

var formInput = document.getElementTagName('button')

function validateForm() {
    var nameForm = validateName();
    var emailForm = validateEmail();
    var ageForm = validateAge();
    var phoneForm = validatePhone();
    var adressForm = validateAdress();
    var cityForm = validateCity();
    var pcform = validatePc();
    var nidForm = validateNID();
    var passwordForm = validatePassword();
    var passwordRepeatForm = validateRepeatPassword();

    if (nameForm == true){
        alert('Name: ' document.getElementById('input-name').value)
    }


}



formInput.onclick = validateFor ()