//i want to read the data entered in the controls
//i want to assign the data to the register Object
//i want to pring the data to the console.


/*
function registerUser() {
    var firstName = document.getElementById("txtFirstName");
    var lastName = document.getElementById("txtLastName");
    var register = {};
    register.firstName = firstName.value;
    register.lastName = lastName.value;
    console.log(register);
}

*/

function getControls() {
    var controls = {};
    controls.firstName = document.getElementById("txtFirstName");
    controls.lastName = document.getElementById("txtLastName");
    return controls;
}

function registerUser() {
    var controls = getControls();
    var registerUser = {};
}
