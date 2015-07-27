//GET LIST OF POSTS BY CATEGORY
angular.module('categories.controller', [])
.controller('CatCtrl', [ '$scope', '$q', '$routeParams', 'Categories', 'Pagination', function ($scope, $q, $routeParams, Categories, Pagination) {
    $scope.loading = true;
    $scope.paginate = false;
    Categories.fetch($routeParams.slug)
    // then() called when son gets back
    .then(function(data) {
        //console.log(data);
        // promise fulfilled
        setTimeout(function () {
            $scope.$apply(function(){
                var newData = [];
                for ( var index=0; index<data.length; index++ ) {
                        var content = [];
                            content.slug          = data[index].slug;
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