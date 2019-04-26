// var userInput = process.argv[2];

function Letter(char) {
    this.char = char;
    this.beenGuessed = false;
    this.toString = function() {
        if (this.beenGuessed === true) {
            // console.log(this.char);
            return this.char;
        } else {
            // console.log(" _ ");
            return " _ ";
        }
    };
    this.guessCheck = function(userInput) {
        if (userInput === this.char) {
            this.beenGuessed = true;
        }
    }
};

// var letter = new Letter("A");

// letter.guessCheck(userInput);
// letter.charView();

module.exports = Letter;