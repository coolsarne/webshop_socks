addEventListener('load',init);

function init(){
    let achternaamveld = document.querySelector("#achternaam");
    let emailveld = document.querySelector("#email");
    let form = document.querySelector("#form");

    achternaamveld.style.backgroundColor = "yellow";
    achternaamveld.addEventListener('keyup', validateAchternaam);

    emailveld.style.backgroundColor = "orange";
    emailveld.addEventListener('blur', validateEmail);

    form.addEventListener('submit', validateForm);
}

function validateAchternaam(){

    let input = document.querySelector("#achternaam");
    let feedback = document.querySelector("#fb_achternaam");

    if (input.value.length < 5){
        feedback.style.color = "red";
        feedback.innerHTML = "Je ingevoerde waarde is kleiner dan 5 tekens.";
        return false;
    } else {
        feedback.innerHTML = "";
        return true;
    }
}

function validateEmail(){


    const regex = /(\w+\.?)+\w@((student.)?kdg\.be)$/;
    let input = document.querySelector("#email");
    let feedback = document.querySelector("#fb_email");


    if (!regex.test(input.value)) {
        feedback.style.color = "red";
        feedback.innerHTML = "Je ingevoerde e-mail behoort niet tot het KdG domein.";
        return false;
    } else {
        feedback.innerHTML = "";
        return true;
    }
}

function validateForm(event){

    let feedback = document.querySelector("#fb_form");
    if (!validateAchternaam() || !validateEmail()){
        validateEmail();
        event.preventDefault();
        feedback.style.color = "red";
        feedback.innerHTML = "Niet alle velden zijn correct ingevuld.";
        return false;
    } else {
        feedback.innerHTML = "";
        return true;
    }
}
