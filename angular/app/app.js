var app = angular.module('app', [
    'ngRoute',
    'front.controller',
    'posts.list.controller',
    'posts.controller',
    'pages.controller',
    'posts.service',
    'stripHtml',
    'ngSanitize',
    'simplePagination'
]);

app.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/list.html',
            controller: 'PostsList'
        }).when('/post/:slug', {
            templateUrl: 'views/post.html',
            controller: 'PostCtrl'
        }).when('/page/:slug', {
            templateUrl: 'views/page.html',
            controller: 'PageCtrl'
        }).when('/admin', {
            templateUrl: 'admin.html',
            controller: 'AdminCtrl'
        }).otherwise({
            redirectTo: '/'
      });
    }
]);