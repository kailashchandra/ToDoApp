var app = angular.module('loginApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : 'Login.html'
        })
        .when('/dashboard',{
        	resolve: {
                "check" : function($location, $rootScope){
                    if(! $rootScope.logedIn){
                        $location.path('/');
                    }
                }
            },
            templateUrl : 'dashboard.html'
        })
        .otherwise({
            redirectTo : '/'
        });
}]);

app.controller('loginCntl',['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){
    $scope.submit = function(){
        if($scope.username=='admin' && $scope.password =='admin'){
            $rootScope.logedIn= true;
            $location.path('/dashboard');
        }
        else{
        	alert('wrong stuff');
        }
    };
}]);