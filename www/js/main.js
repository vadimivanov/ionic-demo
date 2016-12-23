angular.module('starter.main', [])

.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.routes = [
    {
      title: 'Home',
      link: 'app.home'
    },
    {
      title: 'Expenses List',
      link: 'app.expenses-list'
    },
    {
      title: 'Revenue List',
      link: 'app.revenue-list'
    },
    {
      title: 'Charts',
      link: 'app.charts'
    }
  ];

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.go = function(link) {
    $state.go(link);
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})



.controller('PlaylistCtrl', function($scope, $state, $stateParams) {
});