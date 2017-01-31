angular.module('starter.main', [])

.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout, $firebaseObject, CountingService, PubSub) {
console.log('$state', $state);
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);

  $scope.monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  $scope.currentMonthNumber = new Date().getMonth();
  $scope.currentMonthName = $scope.monthNames[new Date().getMonth()];
  
  $scope.preventMonth = function (num) {
    if ($scope.currentMonthNumber === 0) {
      $scope.currentMonthNumber = 11;
    } else {
      $scope.currentMonthNumber -= 1;
    }
    CountingService.setCurrentMonth($scope.currentMonthNumber);
    CountingService.getPrevMonth($scope.currentMonthNumber);
    PubSub.publish('changeMonth', {load: true});
    $scope.currentMonthName = $scope.monthNames[$scope.currentMonthNumber];
  };
  $scope.nextMonth = function (num) {
    if ($scope.currentMonthNumber === 11) {
      $scope.currentMonthNumber = 0;
    } else {
      $scope.currentMonthNumber += 1;
    }
    CountingService.setCurrentMonth($scope.currentMonthNumber);
    CountingService.getPrevMonth($scope.currentMonthNumber);
    PubSub.publish('changeMonth', {load: true});
    $scope.currentMonthName = $scope.monthNames[$scope.currentMonthNumber];
  };
  
  $scope.routes = [
    // {
    //   title: 'Login',
    //   link: 'login'
    // },
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
    // },
    // {
    //   title: 'Chat',
    //   link: 'app.chat'
    }
  ];
  console.log('angularPubsub ', PubSub);
  $scope.go = function(link) {
    $state.go(link);
  };

  $scope.signOut = function (num) {
    firebase.auth().signOut().then(function(res) {
      $state.go('login');
    }, function(error) {
      console.log('error signOut ', error);
    });
  };

  $scope.isFooter = true;
  $scope.routerWatch = function (flag) {
    $scope.isFooter = flag;
  };

  $scope.go = function(link) {
    $state.go(link);
  };
  
});
