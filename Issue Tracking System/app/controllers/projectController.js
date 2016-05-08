'use strict',

    app.controller('ProjectController',
        function ($scope, $http, $location,projectService,userService, notifyService) {

            userService.getAllUsers()
                .then(function (success) {
                    $scope.users = success.sort(function (a, b) {
                        return a.Username.localeCompare(b.Username);
                    })
                });
            
            $scope.addProjects = function (projectData) {
                var priorities = [];
                
                projectData.priorities.split(', ').forEach(function (a) {
                    priorities.push({name: a});
                });
                
                projectData.priorities = priorities;
                
                projectService.addProjects(projectData)
                    .then(function (success) {
                        console.log(success);
                        notifyService.showInfo('successfully created a project!');
                        $scope.newProject = {};
                    },function (error) {
                        console.log(error);
                    })
            }
            
            $scope.getAllProjects = function () {
                projectService.getAllProjects()
                    .then(function (projectsData) {
                        $scope.projects = projectsData;
                    })
            }
            
            $scope.getAllProjects();
    });