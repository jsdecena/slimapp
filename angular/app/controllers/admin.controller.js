angular.module('admin.controller', ['pages.service'])
.controller('AdminCtrl', [ '$scope', '$q', 'Pages', 'Pagination', function ($scope, $q, Pages, Pagination) {

    //FETCH ALL THE PAGES
    Pages.fetchAll()
    // then() called when son gets back
    .then(function(data) {
        //console.log(data); return false;
        // promise fulfilled
        setTimeout(function () {
            $scope.$apply(function(){
                var newData = [];
                for ( var index=0; index<data.length; index++ ) {
                        var content = [];
                            content.title       = data[index].title;
                            content.slug        = data[index].slug;
                            content.content     = data[index].content;
                            content.date        = Date.parse(data[index].created_at);

                            newData.push(content);
                }
                
                $scope.pagination           = Pagination.getNew(10);
                $scope.pages                = newData;
                $scope.pagination.numPages  = Math.ceil($scope.pages.length/$scope.pagination.perPage);
            });
        }, 2000);
    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);
        console.log(data);
    });    
}]);

//SHOW USERS
angular.module('admin.users.controller', ['users.service'])
.controller('AdminUsersCtrl', [ '$scope', '$q', 'Users', 'Pagination', function ($scope, $q, Users, Pagination) {
    
    $scope.loading       = true;
    $scope.alert         = false;
    $scope.hasUsers      = false;

    //FETCH ALL THE PAGES
    Users.fetchAll()
    // then() called when son gets back
    .then(function(data) {
        //console.log(data); return false;
        // promise fulfilled
        setTimeout(function () {
            $scope.$apply(function(){
                
                $scope.loading  = false;

                if (data.length>0) {
                    $scope.users                = data;
                    $scope.hasUsers             = true;
                    $scope.pagination           = Pagination.getNew(10);
                    $scope.pagination.numPages  = Math.ceil($scope.users.length/$scope.pagination.perPage);
                }else{
                    $scope.alert    = true;
                };
            });
        }, 2000);
    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);
        console.log(data);
    });    
}]);

//CREATE USERS
angular.module('admin.users.create.controller', ['synthesis.config'])
.controller('AdminUsersCreateCtrl', [ '$scope', '$q', 'Users', 'Pagination', 'CONF', function ($scope, $q, Users, Pagination, CONF) {

    $scope.create = function(user) {
        
        //POST DATA
        Users.create(user);
    };

    $scope.loading              = true;


}]);