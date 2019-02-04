var app = angular.module('routingApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when ('/',{
            template: 'Welcome first one.'
        })
        .when('/anotherPage',{
            templateUrl: 'RoutingAnoter.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);