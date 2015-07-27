//GET LIST OF POSTS
angular.module('posts.list.controller', [])
.controller('PostsList', [ '$scope', '$q', 'Posts', 'Pagination', function ($scope, $q, Posts, Pagination) {
    $scope.loading = true;
    $scope.paginate = false;
    Posts.fetchAll()
    // then() called when son gets back
    .then(function(data) {
        // promise fulfilled
        setTimeout(function () {

            $scope.$apply(function(){
                var newData = [];
                for ( var index=0; index<data.length; index++ ) {
                        var content = [];
                            content.slug        = data[index].slug;
                            content.title       = data[index].title;
                            content.content     = data[index].content;
                            content.date        = Date.parse(data[index].created_at);
                            content.author      = data[index].author;

                            newData.push(content);
                }
                
                $scope.pagination           = Pagination.getNew(10);
                $scope.posts                = newData;
                $scope.pagination.numPages  = Math.ceil($scope.posts.length/$scope.pagination.perPage);
                $scope.loading              = false;
                $scope.paginate             = true;
                //console.log($scope.posts);
            });
        }, 2000);
    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);
        console.log(data);
    });
}]);

//GET SINGLE POST
angular.module('posts.controller', [])
.controller('PostCtrl', [ '$scope', '$q', '$routeParams', 'Posts', function ($scope, $q, $routeParams, Posts) {
    $scope.loading = true;
    Posts.fetch($routeParams.slug)
    // then() called when son gets back
    .then(function(data) {
        // promise fulfilled
        setTimeout(function () {
            $scope.$apply(function(){
                var newData = [];
                for ( var index=0; index<data.length; index++ ) {
                        var content = [];
                            content.slug        = data[index].slug;
                            content.title       = data[index].title;
                            content.content     = data[index].content;
                            content.date        = Date.parse(data[index].created_at);
                            content.author      = data[index].author;

                            newData.push(content);
                }
                $scope.posts = newData;
                $scope.loading = false;
            });
        }, 2000);
    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);
        console.log(error);
    });
}]);