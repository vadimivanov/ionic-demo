angular.module('starter.chat', [])
    .controller('ChatCtrl', function($scope, $firebaseArray) {
        $scope.newMessageText = '';
        
        var ref = firebase.database().ref().child("messages");
        
        $scope.messages = $firebaseArray(ref);
        
        $scope.addMessage = function(msg) {
            $scope.messages.$add({
                text: msg
            });
        };
    });