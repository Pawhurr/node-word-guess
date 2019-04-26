var Word = require("./word");
var inquirer = require("inquirer");
var guesses = 10;
var wordChoices = ["BART", "HOMER", "MAGGIE"];

function createWord() {
    
    var word = new Word();
    var randNum = Math.floor(Math.random() * (wordChoices.length));
    var computerChoice = wordChoices[randNum];

    for (var i = 0; i < computerChoice.length; i++) {
        word.addLetter(computerChoice[i]);
    };
};

// function start(){
    //prompt Play? Y/N
    //if Y createWord() and play()}

function play() {
    //if guess > 0 {
        //CL(guesses)
        //word.wordView()
        //prompt pick letter
            //user inputs
            //word.userChoice(userInput)
                //if correct CL(correct) and play()
                //if incorrect CL(incorrect), guesses--, play()
                //else game over
    //}
}