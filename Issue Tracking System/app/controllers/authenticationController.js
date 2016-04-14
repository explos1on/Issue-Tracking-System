app.controller('AuthenticationController',
    function ($scope, $location, $rootScope, authenticationService, notifyService, $localStorage) {
        
        $scope.isLogged = authenticationService.isLoggedIn;
        if ($scope.isLogged()) {
            $scope.userData = function () {
                authenticationService.getCurrentUserData()
                    .then( function (userData) {

                    },
                    function (error) {
                        console.log(error)
                    }
                );
            }
        }

        $scope.register = function (userData) {
            authenticationService.register(userData).then(
                function success(serverData) {
                    authenticationService.setCredentials(serverData.data);
                    notifyService.showInfo('success registration');
                    $location.path("/dashboard");
                    
                },
                function error(error) {
                    notifyService.showError('User already exist or missing requirements', error)
                }
            );
        };

        $scope.login = function (userData) {

            authenticationService.login(userData).then(
                function success(serverData) {
                    authenticationService.setCredentials(serverData.data);
                    notifyService.showInfo('Welcome');
                    $location.path("/dashboard");
                },
                function error(error) {
                    notifyService.showError('Login failed',error)
                }
            );
        };

        $scope.logout = function () {
            authenticationService.logout().then(
                function success(serverData) {
                    authenticationService.clearCredentials();
                    notifyService.showInfo('logout success');
                    // $location.path('/');
                },
                function error(error) {
                    notifyService.showError('logout failed',error);
                }
            );
        };

        $scope.editProfile = function (userData) {
            var data = {};
            data.name = userData.name;
            data.email = userData.email;
            

            authenticationService.editProfile(data).then(
                function success() {

                    $location.path('/');
                },
                function error(error) {

                }
            );
        };

        $scope.changePassword = function (userData) {

            authenticationService.changePassword(userData).then(
                function success() {

                    $location.path('/');
                },
                function error(error) {
                 
                }
            )
        }
    });