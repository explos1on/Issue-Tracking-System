'use strict';

app.factory('userService',function ($http,baseServiceUrl,authenticationService) {
    
    return {
        getAllUsers: function (success, error) {
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'users',
                headers: authenticationService.getHeaders()
            };

            $http(request).success(function (data) {
                success(data);
            }).error(error);
        },

        makeAdmin: function (data, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + 'users/makeadmin',
                data: data,
                headers: authenticationService.getHeaders()
            };
            
            $http(request).success(function (data) {
                success(data);
            }).error(error);
        }

    }
})