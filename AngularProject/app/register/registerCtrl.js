/*Controller Name : registerCtrl
 */

(function () {
    function registerCtrl($scope, lookupSvc) {
        $scope.user = {};
        $scope.registerUser = function () {
            console.log($scope.user);
        };
        //$scope.countryList = lookupSvc.getCountryList();

        $scope.loadStateList = function () {
            var countryCode = $scope.user.country.code;
            $scope.stateList = lookupSvc.getStateListByCountry(countryCode);
        };

        lookupSvc.getCountriesFromApi()
            .then(function (response) {
                console.log(response);
                $scope.countryList = response.data.countries;
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    angular.module("register").controller("registerCtrl", registerCtrl);


})();
