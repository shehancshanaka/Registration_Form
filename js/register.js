var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var address = document.getElementById("address");
var contact = document.getElementById("contact");
var drop = document.getElementById("drop");
var radio = document.querySelectorAll(".form-check-input");
var x = document.querySelectorAll(".alert.alert-danger");
var z;
var alt;
window.onload = function() {
    fname = document.getElementById("fname");
    lname = document.getElementById("lname");
    email = document.getElementById("email");
    address = document.getElementById("address");
    contact = document.getElementById("contact");

    for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
    }

}






function validateInput() {
    alt = true;


    if (fname.value == '' || fname.value == null) {
        var er1 = document.getElementById("er1");
        er1.style.visibility = "visible";
        alt = false;

    }
    if (lname.value == '' || lname.value == null) {
        var er2 = document.getElementById("er2");
        er2.style.visibility = "visible";
        alt = false;
    }
    if (email.value == '' || email.value == null || !isEmail(email.value)) {
        var er3 = document.getElementById("er3");
        er3.style.visibility = "visible";
        alt = false;
    }
    if (address.value == '' || address.value == null) {
        var er7 = document.getElementById("er7");
        er7.style.visibility = "visible";
        alt = false;
    }
    if (contact.value == '' || contact.value == null || !isPhoneNumber(contact.value)) {
        var er5 = document.getElementById("er5");
        er5.style.visibility = "visible";
        alt = false;
    }
    if (drop.value == 'Default' || drop.value == null) {
        var er6 = document.getElementById("er6");
        er6.style.visibility = "visible";
        alt = false;
    }
    if (!validateRadio()) {
        var er4 = document.getElementById("er4");
        er4.style.visibility = "visible";
        alt = false;

    }



    console.log(alt + "return1");

    return alt;


}


function validateRadio() {
    var z;
    for (z = 0; z < radio.length; z++) {
        if (radio[z].checked) {
            return true;

        }
    }
    return false;
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isPhoneNumber(number) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number);
}

document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();

    if (validateInput()) {

        alert("User Added Successfully!");
        window.location.reload();
    }




});