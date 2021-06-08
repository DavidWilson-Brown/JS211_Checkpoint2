// array of words
let words = [
  `abruptly`,
  `jazziest`,
  `rickshaw`,
  `spritz`,
  `bayou`,
  `scnhapps`,
  `bagpipes`,
  `banjo`,
  `stronghold`,
  `boxcar`,
  `cycle`,
  `dwarves`,
  `vortex`
]

// class called scoreboard
class scoreboard {
  constructor(numGuesses, guessesRemaining, score, word, guessedLetters) {
    this.numGuesses = numGuesses;
    this.guessesRemaining = guessesRemaining;
    this.score = score;
    this.word = word;
    this.guessedLetters = guessedLetters
  }
}
let myScoreboard  = new scoreboard();

// *** EDIT THIS CODE ***
const clearBoard = (scoreboard) => {
  if(guessesRemaining === 0 || guessedLetters > 1 ) {
    return scoreboard + score;
  }
}
// RANDOM WORD FUNCTION
let word = words[Math.floor(Math.random() * words.length)];

// POPULATES NUMBER OF BLANKS FOR CHOSEN WORD 
let answerArray = [];
for (let i =0; i < words.length; i++) {
  answerArray[i] = `_`;
}

let remainingLetters = word.length;

// SHOWS PLAYER PROGRESS
// Change alert to display on scoreboard instead
alert(answerArray.join(` `));

// GET GUESS FROM PLAYER
// prompt needs to be changed to display on scoreboard
let guess = prompt(`_`);
if (guess.length !==1) {
  alert (`Please enter a single letter.`);
} else {
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }
}

//  
alert(answerArray.join(` `));
alert(`Congratulations!  The word was ` + word);

//