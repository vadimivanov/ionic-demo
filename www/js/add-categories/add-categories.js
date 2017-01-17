angular.module('starter.add-categories', [])
    .controller('AddCategoriesCtrl', function($scope, $stateParams, CountingService) {
        $scope.categoryDataArr = [];
        $scope.categoryData = {};
        $scope.getDate = function(data, categoriesForm) {
            if (!Object.keys($scope.categoryData).length || !$stateParams.category) return;
            
            $scope.categoryDataArr.push($scope.categoryData);
            CountingService.setCategory($scope.categoryDataArr, $stateParams.category);
            $scope.categoryData = {};
        };
    });