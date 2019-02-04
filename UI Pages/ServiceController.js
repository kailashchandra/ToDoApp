var app = angular.module('serviceApp',[]);

app.service('random', function(){
    //var randomObject = {};---for Factory
    var num = Math.floor(Math.random()*10);
    this.generate = function(){
        return num;
    };
    //return randomObject;---for Factory
});

app.controller('serviceCntrl', function($scope, random){
    $scope.generateRandom = function(){
        $scope.randomNum = random.generate();
    };
});
//AngularJS Service and factory are singlton. Both are same the only difference is Factory work on new Object 
//and Service work on current object (this)