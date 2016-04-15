'use strict';

app.factory('authenticationService', function ($http, baseServiceUrl, $localStorage) {
    var authenticationService = {};

    authenticationService.setCredentials = function (serverData) {
        $localStorage.currentUser = serverData;
    };

    authenticationService.clearCredentials = function () {
        $localStorage.$reset();
    };

    authenticationService.isLoggedIn = function () {
        return $localStorage.currentUser != undefined;
    };

    authenticationService.getHeaders = function () {
        return {
            Authorization: "Bearer " + $localStorage.currentUser.access_token
        };
    };
    
    authenticationService.getUserName = function () {
        return $localStorage.currentUser.userName;
    };

    authenticationService.getCurrentUserData = function () {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/me',
            headers: this.getHeaders()
        })
    };

    authenticationService.login = function (userData) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + '/Token',
            data: "userName=" + userData.username + "&password=" + userData.password +
            "&grant_type=password"
        })
    };

    authenticationService.register = function (userData) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + '/Account/register',
            data: {
                Email:userData.regEmail,
                Password: userData.regPassword,
                ConfirmPassword: userData.confirmPassword
            }
        })
    };

    authenticationService.logout = function () {
        return $http({
            method: 'POST',
            url: baseServiceUrl + '/Account/logout',
            headers: this.getHeaders()
        });
    };
    

    authenticationService.changePassword = function (userData) {
        console.log(userData);
        return $http({
            method: 'POST',
            url: baseServiceUrl + '/Account/ChangePassword',
            data: userData,
            headers: this.getHeaders()
        });
    };

    return authenticationService;
});