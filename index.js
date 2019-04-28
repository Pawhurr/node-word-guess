var Word = require("./word");
var inquirer = require("inquirer");
var guesses = 10;
var wordChoices = ["BART", "HOMER", "MAGGIE"];
var word = new Word();
var correct = 0;


function createWord() {
    
    var randNum = Math.floor(Math.random() * (wordChoices.length));
    var computerChoice = wordChoices[randNum];

    for (var i = 0; i < computerChoice.length; i++) {
        word.addLetter(computerChoice[i]);
    };
    
};


function start() {
    inquirer.prompt([
        {
                type: "confirm",
                name: "confirm",
                message: "Would you like to play a game?"
        }
    ]).then(function(answer) {
        if (answer.confirm === true) {
            createWord();
            play();
        } else {
            console.log("Bye!")
        }
    })
};

start();

function play() {
    if (guesses > 0) {
        correct = 0;
        console.log("\nGuesses left: " + guesses);
        console.log("~~~~~~~~~~~~\n");
        word.wordView();
        console.log("\n~~~~~~~~~~~~");
        inquirer.prompt([
            {
                name: "userInput",
                type: "input",
                message: "What letter would you like to guess?"
            }
        ]).then(function(answer) {
            word.userChoice(answer.userInput.toUpperCase());
            for (var i = 0; i < word.wordBuild.length; i++) {
                if (answer.userInput.toUpperCase() === word.wordBuild[i].char) {
                    correct++;
                }
            }
            if (correct > 0) {
                console.log("\nCorrect!\n");
            } else {
                console.log("\nIncorrect!\n");
                guesses--;
            };
           
            play();
            
        })
    } else {
        console.log("The answer was: " + word.wordBuild.split(",").join(""));
        console.log("\nGame Over");
    }
}

// function play() {
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
// }