angular.module('issueTrackingSystem.users.authentication',[])
.factory('authentication',[
    '$http',
    '$q',
    'BASE_URL',
    function ($http,$q,BASE_URL) {

        function registerUser(user) {
            var deferred = $q.defer();

            $http.post(BASE_URL + 'Account/Register',user)
                .then(function (response) {
                    deferred.resolve(response.data);
                },function (error) {

                });

            return deferred.promise;
        }

        function loginUser(user) {
            var deffered = $q.defer();

            $http.post(BASE_URL + 'Account/Login',user)
                .then(function (response) {
                    console.log(data);
                },function (error) {
                    
                });
            return deffered.promise;
        }
        
        function logout() {
            
        }
        
        return {
            registerUser: registerUser,
            loginUser: loginUser,
            logout: logout
        }
    }
]);