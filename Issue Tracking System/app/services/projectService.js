'use strict',
    
    app.factory('projectService',function ($http, baseServiceUrl, authenticationService) {
        return {
            getAllProjects: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + 'projects',
                    headers: authenticationService.getHeaders()
                };
                
                $http(request).success(function (data) {
                    success(data);
                }).error(error);
            },


            addProjects: function () {
               return $http
            }
        }
    });

