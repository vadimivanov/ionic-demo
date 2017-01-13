// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in main.js
angular.module('starter', [
  'ionic',
  "ion-datetime-picker",
  'firebase',
  'starter.main', 
  'starter.home', 
  'starter.expenses-list',
  'starter.revenue-list',
  'starter.add-categories',
  'starter.charts',
  'starter.chat',
  'starter.login'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'js/home/home-tmpl.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('app.expenses-list', {
        url: '/expenses-list',
        views: {
          'menuContent': {
            templateUrl: 'js/expenses-list/expenses-list.tmpl.html',
            controller: 'ExpensesListCtrl'
          }
        }
      })
      .state('app.revenue-list', {
        url: '/revenue-list',
        views: {
          'menuContent': {
            templateUrl: 'js/revenue-list/revenue-list.tmpl.html',
            controller: 'RevenueListCtrl'
          }
        }
      })
      .state('app.add-categories', {
        url: '/add-categories',
        views: {
          'menuContent': {
            templateUrl: 'js/add-categories/add-categories.tmpl.html',
            controller: 'AddCategoriesCtrl'
          }
        },
        params: {category: ''}
      })
      .state('app.charts', {
        url: '/charts',
        views: {
          'menuContent': {
            templateUrl: 'js/charts/charts-tmpl.html',
            controller: 'ChartsCtrl'
          }
        }
      })
      .state('app.chat', {
        url: '/chat',
        views: {
          'menuContent': {
            templateUrl: 'js/chat/chat.tmpl.html',
            controller: 'ChatCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    
    var checkUserToken = localStorage.getItem('firebase:authUser:AIzaSyAfg98E2I9d_eL3WaLYO6-a5SQKNLutnOU:[DEFAULT]');

    if (!checkUserToken) {
      $urlRouterProvider.otherwise('/login');
    } else {
      $urlRouterProvider.otherwise('/app/home');
    }
  })
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
  
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  });


