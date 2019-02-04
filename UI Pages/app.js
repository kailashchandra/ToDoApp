angular.module("HangmanApp", []).controller("myCtl", function ($scope, $timeout) {
    $scope.guess = 6;
    $scope.incorrectLetter = [];
    $scope.correctLetter = [];
    var words = ["bat", "cat", "mat", "set"];

    //get the random word
    var selectRandomWord = function () {
        var index = Math.round(Math.random() * (words.length - 1));
        return words[index];
    }


    //to new games.
    var newGame = function () {
        $scope.guess = 6;
        $scope.correctLetter = [];
        $scope.incorrectLetter = [];
        $scope.input = "";
        $scope.displayWord = "";
        for (var i = 0; i < selectedWord.length; i++) {
            $scope.displayWord += "*";
        }
    }
    var selectedWord = selectRandomWord();


    //$scope.displayWord= tempdisplayWord;

    //to check letter.
    $scope.letterChosen = function () {

        //to check for same letter
        for (var i = 0; i < $scope.correctLetter.length; i++) {
            if ($scope.correctLetter[i].toLowerCase() == $scope.input.toLowerCase()) {
                $scope.input = "";
                return;
            }
        }
        for (var i = 0; i < $scope.incorrectLetter.length; i++) {
            if ($scope.incorrectLetter[i].toLowerCase() == $scope.input.toLowerCase()) {
                $scope.input = "";
                return;
            }
        }
        var correct = false;
        for (var i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i].toLocaleLowerCase() == $scope.input.toLocaleLowerCase()) {
                $scope.displayWord = $scope.displayWord.slice(0, i) + $scope.input.toLocaleLowerCase() + $scope.displayWord.slice(i + 1);
                correct = true;
            }
        }
        if (correct) {
            $scope.correctLetter.push($scope.input.toLowerCase());
        }
        else {
            $scope.incorrectLetter.push($scope.input.toLowerCase());
            $scope.guess--;
        }
        $scope.input = "";
        if ($scope.guess == 0) {
            alert("You lost ohhhh!");
            $timeout(function () {
                newGame();
            }, 500);
        }
        if ($scope.displayWord.indexOf("*") == -1) {
            alert("You Won yehhh!");
            $timeout(function () {
                newGame();
            }, 500);
        }
    }

newGame();

});