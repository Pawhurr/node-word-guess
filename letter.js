// var userInput = process.argv[2];

function Letter(char, beenGuessed) {
    this.char = char;
    this.beenGuessed = beenGuessed;
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

// var letter = new Letter("A", false);

// letter.guessCheck(userInput);
// letter.charView();

module.exports = Letter;