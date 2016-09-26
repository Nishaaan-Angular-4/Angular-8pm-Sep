(function (validations) {
    validations.alphabetsOnly = function (e) {
        //console.log(e);

        //a:97
        //b:98....
        //z:122
        //A:65 Z:90
        if ((e.keyCode >= 97 && e.keyCode <= 122) ||
            (e.keyCode >= 65 && e.keyCode <= 90)) { //console.log("allowed key");
        } else {
            e.preventDefault();
        }
    }
})(window.validations = {});
