angular.module('users.service', ['ngResource', 'synthesis.config'])
.factory('Users', function($http, $q, CONF){
    return {
        fetchAll: function() {
            // the $http API is based on the deferred/promise APIs exposed by the $q service
            // so it returns a promise for us by default
            return $http.get(CONF.API_URL + '/api/v1/users')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        },
        fetch: function(id) {
            // the $http API is based on the deferred/promise APIs exposed by the $q service
            // so it returns a promise for us by default
            return $http.get(CONF.API_URL + '/api/v1/users/'+id)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        },
        create: function(userData) {

            var headers = {'Access-Control-Allow-Origin' :'*'};
            
            $http.post(CONF.API_URL + '/api/v1/users', {userData}, headers)
            .then(function(response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    // invalid response
                    return $q.reject(response.data);
                }
                // this callback will be called asynchronously
                // when the response is available
              }, function(response) {
                console.log(response); return false;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }        
    };
});