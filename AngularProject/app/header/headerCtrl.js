(function () {
    function headerCtrlFn($scope) {
        $scope.brandName = "kiran";
        /*$scope.navItems = ["Home", "Profile", "Products", "Cart", "Register", "Login"];*/
        $scope.navItems = [{
            name: "Home",
            templateUrl: "app/home/home.html"
        }, {
            name: "Products",
            templateUrl: "app/products/products.html"
        }, {
            name: "Cart",
            templateUrl: "app/cart/cart.html"
        }, {
            name: "Register",
            templateUrl: "app/register/register.html"
        }, {
            name: "Login",
            templateUrl: "app/login/login.html"
        }];

        $scope.loadPage = function (data) {
            console.log(data);
            $scope.contentUrl = data.templateUrl;
        };
    };
    angular.module("header").controller("headerCtrl",headerCtrlFn);
})();
