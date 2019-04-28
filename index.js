var Word = require("./word");
var inquirer = require("inquirer");
var guesses = 7;
var wordChoices = ["BART", "HOMER", "MAGGIE"];
var word = new Word();
var correct = 0;
var falseCount = 0;


function createWord() {
    word.wordBuild = [];
    guesses = 7;
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
            console.log("\nGood choice!\n");
            createWord();
            play();
        } else {
            console.log("Well, goodbye then. Maybe next time.")
        }
    })
};

start();

function play() {
    if (guesses > 0) {
        correct = 0;
        falseCount = 0;
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
                };
                if (word.wordBuild[i].beenGuessed === false) {
                    falseCount++;
                };
            }
            if (correct > 0) {
                console.log("\nCorrect!\n");
            } else {
                console.log("\nIncorrect!\n");
                guesses--;
            };
            if (falseCount === 0) {
                word.wordView();
                console.log("\nCongratulations! You're a winner!\n\nNow that you're on a winning streak I have one question for you...\n");
                start();
                return;
            }
           
            play();
            
        })
    } else {
        for (var i = 0; i < word.wordBuild.length; i++) {
            word.wordBuild[i].beenGuessed = true;
        }
        console.log("The answer was: \n");
        word.wordView();
        console.log("\nGame Over. Too bad. You can't go out like that. So, I have a question for you...\n");
        start();
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