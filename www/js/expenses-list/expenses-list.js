angular.module('starter.expenses-list', [])
    .controller('ExpensesListCtrl', function($scope, $state, CountingService, PubSub) {
        
        $scope.loadList = function() {
            $scope.expensesList = CountingService.getCategory('expenses') || [];
            console.log('$scope.expensesList --> ', $scope.expensesList);
        };

        $scope.go = function(link) {
            $state.go(link, {category: 'expenses'});
        };
        
        var changeMonthWatch = function(data) {
            $scope.loadList();
        };
        PubSub.subscribe('changeMonth', changeMonthWatch);

        $scope.loadList();
    });