angular.module('starter.revenue-list', [])
    .controller('RevenueListCtrl', function($scope, $state) {
        $scope.go = function(link) {
            $state.go(link, {category: 'revenue'});
        };
    });