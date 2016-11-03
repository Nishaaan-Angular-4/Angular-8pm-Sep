(function () {

    var customNavBar = function () {
        return {
            templateUrl: "app/common/customNavBar.html",
            restrict: "A,E,C"

        };
    };
    angular.module("common")
        .directive("customNavBar", [customNavBar]);
})();
