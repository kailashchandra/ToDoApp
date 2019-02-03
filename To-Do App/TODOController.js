var app = angular.module('TODOApp', []);

app.controller('TODOCntl', function ($scope) {
    $scope.tasks = [];
    var taskData = localStorage["kailash"];

    if (taskData !== undefined) {
        $scope.tasks = JSON.parse(taskData);
    }
    $scope.searchEnter = function () {
        if (event.which == 13 && $scope.task != "" && $scope.task != undefined) {
            $scope.addTask();
        }
    };
    $scope.addTask = function () {
        if ($scope.tasks.findIndex(function (p) { return p.message == $scope.task }) == -1) {
            $scope.tasks.push({ "message": $scope.task, "status": false });
            localStorage["kailash"] = JSON.stringify($scope.tasks);
        }
        $scope.task = "";

    };
    $scope.edit = function () {
        if (event.target.contentEditable == "false") {
            event.target.contentEditable = "true";
        } else if (event.target.contentEditable == "true") {
            event.target.contentEditable = "false";
        }
    };
    $scope.enterAgain = function (thing, index) {
        if (event.which == 13 && thing.message != "" && thing.message != undefined) {
            $scope.edit();
            $scope.tasks[index].message = event.target.innerHTML.trim();
            localStorage["kailash"] = JSON.stringify($scope.tasks);
        }
    };
    $scope.addTask2 = function (thing, index) {
        if ($scope.tasks[index].message == thing.message) {
            if ($scope.tasks[index].status == true) {
                $scope.tasks[index].status = false;
            } else {
                $scope.tasks[index].status = true;
            }
        }
    };
});