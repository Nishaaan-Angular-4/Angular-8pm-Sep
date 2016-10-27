(function () {
    function productCtrl($scope, productSvc) {
        $scope.yearSort="Year";
        //$scope.products = productSvc.getProducts();
        productSvc.getProductsByPromise()
            .then(function (response) {
                console.log(response);
                $scope.vehicles = response.data.vehicles;
            })
            .catch(function (errorResponse) {
                console.log(errorResponse);
            });
        console.log("i am executing first");
        
        $scope.sortByYear = function(){
            $scope.yearSort= $scope.yearSort=="Year"?"-Year":"Year";
        };

    }
    angular.module("product")
        .controller("productCtrl", ["$scope", "productSvc", productCtrl])
})();
