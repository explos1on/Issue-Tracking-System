angular.module('issueTrackingSystem.home',[])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/login',{
        templateUrl: 'app/views/home/login.html',
        // controller: 'homeController'
    });

    $routeProvider.when('/register',{
        templateUrl: 'app/views/home/register.html',
        // controller: 'homeController'
    });
}])