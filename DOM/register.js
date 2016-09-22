var controls = {};
controls.firstName = document.getElementById("txtFirstName");
controls.lastName = document.getElementById("txtLastName");
controls.registerButton = document.getElementById("btnRegister");

//function declaration
function getDataFromControls() {}

//function declaration
function registerUser() {
    var userInfo = {};
    userInfo.fName = controls.firstName.value;
    userInfo.lName = controls.lastName.value;
    console.log(userInfo);
}

function changeClass() {
    //console.log("I need to change the color");
    if (controls.registerButton.className == "btn btn-warning") {
        controls.registerButton.className = "btn btn-primary";
    } else {
        controls.registerButton.className = "btn btn-warning"
    }
}

function alphabetsOnly(e) {
    //console.log(e);

    //a:97
    //b:98....
    //z:122
    //A:65 Z:90
    if ((e.keyCode >= 97 && e.keyCode <= 122) ||
      (e.keyCode >= 65 && e.keyCode <= 90)) {      //console.log("allowed key");
    } else {
        e.preventDefault();
    }
}

//function declaration
function bindEvents() {
    controls.registerButton.addEventListener("click", registerUser);
    controls.registerButton.addEventListener("mouseover", changeClass);
    controls.firstName.addEventListener("keypress", alphabetsOnly);
    controls.lastName.addEventListener("keypress", alphabetsOnly);
};

//function call
bindEvents();
