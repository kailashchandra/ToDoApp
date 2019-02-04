angular.module("MyNote", []).controller("myctl", function($scope){
        
    $scope.save = function(){
        alert("Note Saved");
    }
    $scope.clear = function(){
        $scope.message="";
    }

});