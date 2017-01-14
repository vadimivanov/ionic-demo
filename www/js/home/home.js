angular.module('starter.home', [])
    .controller('HomeCtrl', function($scope, CountingService) {

        console.log('CountingService home ', CountingService.get());
        
    });