'use strict',
    
app.controller('AdminController',function ($scope,$location,userService,notifyService) {
    $scope.showUsers = false;
    
    $scope.makeAdmin = function (id) {
        var userData = {userId : id};
        
        userService.makeAdmin(
            userData,
            function success(data) {
                $scope.showAllUsers();
            },
            function error(error) {
                notifyService.showError('Failed making Admin!', error);
            });
    };
    
    $scope.showAllUsers = function () {
        userService.getAllUsers(
            function success(data) {
                $scope.users = data;
            },
            function error(error) {
                notifyService.showError('Failed loading data...', error);
            });
    }
});    