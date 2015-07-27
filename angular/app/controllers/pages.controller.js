//GET SINGLE PAGE
angular.module('pages.controller', [])
.controller('PageCtrl', [ '$scope', '$q', '$routeParams', 'Pages', function ($scope, $q, $routeParams, Pages) {
    $scope.loading = true;
    Pages.fetch($routeParams.slug)
    // then() called when son gets back
    .then(function(data) {
        console.log(data);
        // promise fulfilled
        setTimeout(function () {
            $scope.$apply(function(){
                $scope.title       = data.title;
                $scope.content     = data.content;
                $scope.loading  = false;
            });
        }, 2000);
    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);
        console.log(data);
    });
}]);