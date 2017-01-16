angular.module('starter.add-categories', [])
    .controller('AddCategoriesCtrl', function($scope, $stateParams, CountingService) {
        $scope.categoryDataArr = [];
        $scope.categoryData = {};
        console.log('$stateParams --> ', $stateParams);
        $scope.getDate = function(date) {
            $scope.categoryDataArr.push($scope.categoryData);
            CountingService.setCategory($scope.categoryDataArr, $stateParams.category);
        };
    });