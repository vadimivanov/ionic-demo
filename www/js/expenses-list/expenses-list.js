angular.module('starter.expenses-list', [])
    .controller('ExpensesListCtrl', function($scope, $state) {
        $scope.go = function(link) {
            $state.go(link);
        };
    });