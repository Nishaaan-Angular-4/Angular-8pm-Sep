(function () {
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

    //function declaration
    function bindEvents() {
        controls.registerButton.addEventListener("click", registerUser);
        controls.registerButton.addEventListener("mouseover", changeClass);
        controls.firstName.addEventListener("keypress", validations.alphabetsOnly);
        controls.lastName.addEventListener("keypress", validations.alphabetsOnly);
    };

    //function call
    bindEvents();
})();
