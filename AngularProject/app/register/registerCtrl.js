/*Controller Name : registerCtrl
 */

(function () {
    function registerCtrl($scope, lookupSvc) {
        $scope.user = {};
        $scope.registerUser = function () {
            console.log($scope.user);
        };
        $scope.countryList = lookupSvc.getCountryList();

        $scope.loadStateList = function () {
            var countryCode = $scope.user.country.code;
            $scope.stateList = lookupSvc.getStateListByCountry(countryCode);
        };
    }

    angular.module("register").controller("registerCtrl", registerCtrl);


})();
