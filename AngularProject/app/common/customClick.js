(function () {
    function customClick() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind("click", function (e) {
                    var attr = attrs["customClick"];
                    console.log(attr);
                    scope.$eval(attr);
                });
            }
        }
    }

    angular.module("common")
        .directive("customClick", [customClick])
})();
