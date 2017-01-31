angular.module('starter.revenue-list', [])
    .controller('RevenueListCtrl', function($scope, $state, CountingService, PubSub) {
        
        $scope.loadList = function() {
            $scope.revenueList = CountingService.getCategory('revenue') || [];
            console.log('$scope.revenueList --> ', $scope.revenueList);
        };

        $scope.routerWatch(true);

        $scope.go = function(link) {
            $state.go(link, {category: 'revenue'});
        };

        var changeMonthWatch = function(data) {
            $scope.loadList();
        };
        PubSub.subscribe('changeMonth', changeMonthWatch);

        $scope.loadList();
    });