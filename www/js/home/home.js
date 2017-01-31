angular.module('starter.home', [])
    .controller('HomeCtrl', function($scope, $state, CountingService, PubSub) {

        $scope.isFooter = true;
        $scope.loadSum = function() {
            $scope.currnetExpensesSum = CountingService.getCurrentMonthSum('expenses');
            $scope.preventExpensesSum = CountingService.getPreventMonthSum('expenses');
            $scope.currnetRevenueSum = CountingService.getCurrentMonthSum('revenue');
            $scope.preventRevenueSum = CountingService.getPreventMonthSum('revenue');
            $scope.differentSum = CountingService.getDifferenceSum($scope.currnetRevenueSum, $scope.currnetExpensesSum);
            $scope.differentPrevSum = CountingService.getDifferenceSum($scope.preventRevenueSum, $scope.preventExpensesSum);
        };

        var changeMonthWatch = function(data) {
            $scope.loadSum();
        };
        PubSub.subscribe('changeMonth', changeMonthWatch);

        $scope.loadSum();
    });