angular.module('front.controller', ['pages.service'])
.controller('FrontCtrl', [ '$scope', '$q', 'Pages', 'Pagination', function ($scope, $q, Pages, Pagination) {
    
    $scope.brand     = "Synthesis CMS";
    $scope.copyright = "<p>Copyright &copy; jsdecena.me 2015</p>";
    
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