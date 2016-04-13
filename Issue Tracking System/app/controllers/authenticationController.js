app.controller('AuthenticationController',
    function ($scope, $location, $rootScope, authenticationService, $localStorage) {
        $scope.isLogged = authenticationService.isLoggedIn();
        if ($scope.isLogged) {
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
                    $location.path("/dashboard");
                },
                function error(error) {
                    console.log(error)
                }
            );
        };

        $scope.login = function (userData) {

            authenticationService.login(userData).then(
                function success(serverData) {
                    authenticationService.setCredentials(serverData.data);
                    $location.path("/dashboard");
                },
                function error(error) {
                    console.log(error)
                }
            );
        };

        $scope.logout = function () {
            debugger
            authenticationService.logout().then(
                function success(serverData) {
                    authenticationService.clearCredentials(serverData.data);
                    $location.path('/');
                },
                function error(error) {
                    console.log(error)
                }
            );
        };

        $scope.editProfile = function (userData) {
            var data = {};
            data.name = userData.name;
            data.email = userData.email;
            data.profileImageData = userData.profileImageData.base64;
            data.coverImageData = userData.coverImageData.base64;
            data.gender = userData.gender;

            if (data.profileImageData == undefined) {
                data.profileImageData = userData.profileImageData;
            }

            if (data.coverImageData == undefined) {
                data.coverImageData = userData.coverImageData;
            }

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