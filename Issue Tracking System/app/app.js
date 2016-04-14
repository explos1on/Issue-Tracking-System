'use strict';

var app = angular.module('issueTrackingSystem', ['ngRoute', 'ngResource', 'ngStorage']);

app.constant({
    'baseServiceUrl': 'https://softuni-issue-tracker.azurewebsites.net/api'
});


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'AuthenticationController'
        })
        .when('/dashboard', {
            templateUrl: 'app/views/dashboard.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.run(function ($rootScope, $location, authenticationService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        var isRegisterPage = $location.path().indexOf('/register') == -1,
            isLoginPage = $location.path().indexOf('/login') == -1,
            isHomePage = $location.path().indexOf('/') > -1 && $location.path().length == 1,
            isLoggedIn = authenticationService.isLoggedIn();

        if (!isLoggedIn && (!isHomePage && isRegisterPage && isLoginPage)) {
            $location.path("/");
        } else if (isLoggedIn && (!isRegisterPage || !isLoginPage)) {
            $location.path("/");
        }
    });
});

