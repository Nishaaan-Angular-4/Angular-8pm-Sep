(function() {
    function headerCtrlFn($scope, lookupSvc) {
        $scope.brandName = "kiran";
        /*$scope.navItems = ["Home", "Profile", "Products", "Cart", "Register", "Login"];*/
        $scope.navItems = lookupSvc.getNavItems();

        $scope.loadPage = function(data) {
            console.log(data);
            $scope.contentUrl = data.templateUrl;
        };
        $scope.projectName = "The Presitige Group";
    };
    angular.module("header").controller("headerCtrl", headerCtrlFn);
})();