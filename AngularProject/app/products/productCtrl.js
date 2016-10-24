(function () {
    function productCtrl($scope, productSvc) {
        $scope.products = productSvc.getProducts();
    }
    angular.module("product")
        .controller("productCtrl", ["$scope", "productSvc", productCtrl])
})();
