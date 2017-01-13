angular.module('starter.login', [])
    .controller('LoginCtrl', function($scope, $state) {
        $scope.loginData = {};
        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            firebase.auth().createUserWithEmailAndPassword($scope.loginData.email, $scope.loginData.password).then(function(response) {
                console.log('response auth ', response);
                
                $state.go('app.home');
                
            }).catch(function(error) {
                var errorMessage = error.message;
                
                if (errorMessage === "The email address is already in use by another account.") {
                    firebase.auth().signInWithEmailAndPassword($scope.loginData.email, $scope.loginData.password).then(function(user) {
                        console.log('current user ', user);
                        if (user) {
                            $state.go('app.home');
                        }
                    }).catch(function(error) {
                        console.log('error user ', error);
                    });
                }
            });
        };
    });