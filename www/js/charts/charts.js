angular.module('starter.charts', [])
    .controller('ChartsCtrl', function($scope, $state) {
        $scope.routerWatch(true);
        
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
    });