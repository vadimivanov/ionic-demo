angular.module('starter.expenses-list', [])
    .controller('ExpensesListCtrl', function($scope, $state, CountingService) {
        $scope.expensesList = CountingService.getCategory('expenses');
        console.log('$scope.expensesList --> ', $scope.expensesList);
        $scope.go = function(link) {
            $state.go(link, {category: 'expenses'});
        };
    });