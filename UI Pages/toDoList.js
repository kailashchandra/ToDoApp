angular.module("toDoList",[]).controller("myctl",function($scope){
    $scope.items=[];
    $scope.addItem= function(){
    if(!$scope.item){
        $scope.errortext="";
        return;
    }
    else if($scope.items.findIndex(function(p){return p.text==$scope.item})==-1){
        $scope.items.push({text : $scope.item, status : false});
        $scope.item="";
        $scope.errortext="";
    }
    else{
        $scope.errortext="This item is already available.";
        $scope.item="";
    }}
    $scope.removeItem= function(){
        var olditems = $scope.items;
        $scope.items=[];
        angular.forEach(olditems, function(x){
            if(!x.status){
                $scope.items.push(x);
        }});
        $scope.errortext="";
    }
});