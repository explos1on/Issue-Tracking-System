'use strict';

var app = angular.module('issueTrackingSystem', ['ngRoute', 'ngResource', 'ngStorage']);

app.constant({
    'baseServiceUrl': 'https://softuni-issue-tracker.azurewebsites.net/'
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
        .when('/Account/ChangePassword',{
            templateUrl: 'app/views/change-password.html',
            controller: 'AuthenticationController'
        })
        .when('/admin',{
            templateUrl: 'app/views/admin/home.html',
            controller: 'AdminController'
        })
        .when('/projects/add',{
            templateUrl: 'app/views/project-form.html',
            controller: 'ProjectController'
        })
        .when('/projects/',{
            templateUrl: 'app/views/projects.html',
            controller: 'ProjectController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);



