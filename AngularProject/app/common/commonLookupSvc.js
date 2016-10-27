(function () {
    function lookupSvc($q, $http) {
        var states = [{
                name: "Telangana",
                code: "TS",
                countryCode: "IN"
            },
            {
                name: "Andhra Pradesh",
                code: "AP",
                countryCode: "IN"
            },
            {
                name: "California",
                code: "CA",
                countryCode: "US"
            },
            {
                name: "Illinois",
                code: "IL",
                countryCode: "US"
            },
            {
                name: "Nevada",
                code: "NV",
                countryCode: "US"
            }
        ]
        this.getStateListByCountry = function (code) {
            //filter the states by country.
            var stateList = _.where(states, {
                countryCode: code
            });
            return stateList;
        };

        this.getNavItems = function () {
            return [{
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
        }


        this.getCountriesFromApi = function () {
            var dfd = $q.defer();
            $http.get("app/api/countries.json")
                .then(function (response) {
                    dfd.resolve(response);
                })
                .catch(function (err) {
                    dfd.reject(err);
                });

            return dfd.promise;
        };


    }
    angular.module("common")
        .service("lookupSvc", ["$q", "$http", lookupSvc])
})();
