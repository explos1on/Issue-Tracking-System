'use strict',
    
    app.factory('projectService',function ($http, baseServiceUrl, authenticationService) {
        return {
            getAllProjects: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + 'projects',
                    headers: authenticationService.getHeaders()
                };

                return $http(request).success(function (data) {
                    success(data);
                }).error(error);
            },


            addProjects: function () {
               var request = {
                   url : baseServiceUrl +'Projects',
                   method : "POST",
                   headers: authenticationService.getHeaders(),
                   data: projectData
               };
                return $http(request).success(function (data) {
                    success(data);
                }).error(error);
            }
        
    }});

