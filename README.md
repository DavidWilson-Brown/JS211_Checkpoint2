*** KASEY'S PSEUDOCODE  ***


// array of words
// class called scoreboard
// class scoreboard {
//   constructor(numGuesses, guessesRemaining, score, word, guessedLetters) {
//     this.numGuesses = numGuesses;
//     this.guessesRemaining = guessesRemaining;
//     this.score = score;
//     this.word = word;
//     this.guessedLetters = guessedLetters
//   }
// }
// let myScoreboard  = new scoreboard();

// fn clearBoard and get "random" word from array of words
//   clear/reset scoreboard
//   get random word then set to myScoreboard.word

// fn gameOver
//   compare word to guessed letters, and numGuesses
//   return

// fn checkLetters
//   if letter is in word then return true/false

// fn getScore
//     calculate score
//     return score

// on button click call fn & pass parameter for the letter pressed
//   update myScoreboard.guessedLetters with guessedLetters
//   update myScoreboard.guessesRemaining with GuessesRemaining - 1
//   update myScoreboard.numGuesses with numGuesses + 1
//   call checkLetteres fn
//     if return of checkLetteres() = true
//        if myScoreboard.guessesremaining > 0
//          update myScoreboard.score to add the returned resultfrom getScore()
//          update DOM with score
//          update DOM with guessues remaining
//          update DOM to change button color

//   update myScoreboard.score with score
//   update DOM with score
//   update DOM with guessues remaining
//   update DOM hangman image
//   update DOM to change button color