(function() {

    function customScope() {
        return {
            template: "<h1>{{myproject}}</h1><h2>{{group}}</h2>",
            scope: {
                myproject: '@', //one way binding..
                group: "&"
            }
        }

    }

    angular.module("common")
        .directive("customScope", [customScope])

})();