//form validation///
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
        nameError.innerHTML = "Enter Full name (Letters only)";
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;

}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    
    if(email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = "Email invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required= 15;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateEmail() || !validateName() || !validateMessage() ){
    	alert("Fill the field correctly!")
        return false;
    }
    submitError.innerHTML = '<i id="tick-error" class="fa-solid fa-circle-check"></i> Form submitted successfully';
    return true;
}