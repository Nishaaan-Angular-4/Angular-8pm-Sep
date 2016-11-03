(
    function() {

        function magicDir() {
            return {
                restrict: "A",
                template: "<div ng-transclude></div><h1>Hey what is this {{name}}!!!</h1>",
                transclude: true,
                controller: function($scope) {
                    $scope.name = "Kiran";
                },
                link: function(scope, element, attrs) {
                    console.log(scope);
                }
            };
        }

        angular.module("common")
            .directive("magicDir", [magicDir]);
    }
)();