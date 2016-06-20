var TodoApp = angular.module("TodoApp", ["ngRoute", "ngResource"])

.factory('Todo', function ($resource) {
    return $resource('/api/todo/:id', { id: '@id' }, { update: { method: 'PUT' } });
})

.config(function ($routeProvider) {
    $routeProvider.
        when('/', { controller: ListCtrl, templateUrl: 'list.html' }).
        when('/demo', { controller: ListCtrl, templateUrl: 'demo.html' }).
        otherwise({ redirectTo: '/' });
});

var ListCtrl = function ($scope, $location, Todo) {
    $scope.items = Todo.query();
};