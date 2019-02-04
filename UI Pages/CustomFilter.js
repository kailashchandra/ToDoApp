var app = angular.module('customFilterApp',[]);

app.filter('base', function(){
    var output = function(number, base){
        var num = parseInt(number,10);
        var based= parseInt(base, 10);
        if(isNaN(num) || isNaN(based) ||based <=1 || based >=37) return num;
        return num.toString(based);
    }
    return output;
});

app.controller('cstmFltrCntrl', function(){
    
});