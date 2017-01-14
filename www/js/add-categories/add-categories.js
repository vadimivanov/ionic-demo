angular.module('starter.add-categories', [])
    .controller('AddCategoriesCtrl', function($scope, $stateParams, CountingService) {
        $scope.categoryData = {};

        console.log('$stateParams --> ', $stateParams);
        $scope.getDate = function(date) {
            CountingService.setCategory($scope.categoryData, $stateParams.category);
        };
    });