var Letter = require("./letter");

function Word() {
    this.wordBuild = [];
    this.addLetter = function(char) {
        this.wordBuild.push(new Letter(char));
    };
    this.wordView = function() {
        var showWord = "";
        for (var i = 0; i < this.wordBuild.length; i++) {
            showWord += this.wordBuild[i].toString();
        }
        console.log(showWord);
    };
    this.userChoice = function(userInput) {
        for (var i = 0; i < this.wordBuild.length; i++) {
            this.wordBuild[i].guessCheck(userInput);
        }
    };
};

module.exports = Word;

// var word = new Word();

// word.addLetter("c");
// word.addLetter("a");
// word.addLetter("t");
// console.log(word.wordBuild);
// word.userChoice("a");
// word.wordView();