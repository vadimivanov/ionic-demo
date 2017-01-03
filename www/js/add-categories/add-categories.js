angular.module('starter.add-categories', [])
    .controller('AddCategoriesCtrl', function($scope) {
        $scope.datetimeValue = '';
        $scope.getDate = function(date) {
            console.log('$scope.datetimeValue --> ', date);
        };
    });