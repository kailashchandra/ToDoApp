angular.module("shoppingList",[]).controller("myctrl", function($scope) {
        $scope.products= ["Milk", "water", "bread"];
        $scope.addItem= function(){
            if(!$scope.item){$scope.errortext="";}
            else if($scope.products.indexOf($scope.item)==-1){
                $scope.products.push($scope.item);
                $scope.item="";
                $scope.errortext="";
            }
            else{
                $scope.errortext= "This item is already available in list";
            }
        }
        $scope.removeItem= function(x){
            $scope.products.splice(x, 1);
        }
    });