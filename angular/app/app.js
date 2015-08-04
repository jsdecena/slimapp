var app = angular.module('app', [
    'ngRoute',
    'synthesis.config',
    'admin.controller',
    'admin.users.controller',
    'admin.users.create.controller',
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
            templateUrl: 'views/admin/admin.html',
            controller: 'AdminCtrl'
        }).when('/admin/users', {
            templateUrl: 'views/admin/users/list.html',
            controller: 'AdminUsersCtrl'
        }).when('/admin/users/create', {
            templateUrl: 'views/admin/users/create.html',
            controller: 'AdminUsersCreateCtrl'
        }).otherwise({
            redirectTo: '/'
      });
    }
]);