function Letter(char) {
    this.char = char;
    this.beenGuessed = false;
    this.toString = function() {
        if (this.beenGuessed === true) {
            return this.char;
        } else {
            return "_ ";
        }
    };
    this.guessCheck = function(userInput) {
        if (userInput === this.char) {
            this.beenGuessed = true;
        }
    }
};


module.exports = Letter;