(function () {
    function productSvc($q, $http) {
        this.getProductsByPromise = function () {

            var dfd = $q.defer();
            $http.get("app/api/vehicles.json")
                .then(function (response) {
                    dfd.resolve(response);
                })
                .catch(function (err) {
                    dfd.reject(err);
                });

            return dfd.promise;

        };
    }
    angular.module("product")
        .service("productSvc", ["$q", "$http",
                                productSvc])
})();
