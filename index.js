let secretNumber;
let lastGuess = [];
let guessesRemaining = 10;
let guess;
const CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
const INCORRECT_MESSAGE = "Incorrect. You are merely a normal human.";

function generateNumber() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
  // MILESTONE 1: Right now the secret number is always 5. Change this
  // to return a secret number between 1 and 10.
  
}

function checkIsCorrect() {
  if (guess === secretNumber) return 0;
  else if (guess > secretNumber) return 1;
  else return -1;
  // MILESTONE 3: Right now every guess will be true. Change
  // the above code so it checks to make sure lastGuess
  // is equal to secretNumber.
}

function makeGuess() {
  if (!secretNumber) {
    generateNumber();
    console.log(generateNumber());
  }
  guess = prompt("Make a guess (between 1 and 10):");
  // MILESTONE 2: ADD CODE HERE to pop up a dialog box
  // asking the user for a number.
  //--------------------------------------------
if (guess >= 1 && guess <= 10) {

lastGuess.push(guess);
guessesRemaining--;
let result = checkIsCorrect();
if (result === 0) {
  alert(
    `Congratulations! You've guessed the number in ${lastGuesses.length} attempts.`
  );
} else {
  let message = result === -1 ? "Too low!" : "Too high!";
  if (guessesRemaining >0)
  alert(
    `${message} You have ${guessesRemaining} guesses remaining. Your past guesses: ${lastGuess.join(
      ", "
    )}`
  );
  else {
    alert(
        "Sorry, you've run out of guesses. The game is over."
      );
      return;
  }

}
updatePage();
}
else {
    alert("Please enter a number between 1 and 10.");
}
}


// document.getElementById("guess-button").addEventListener("click", makeGuess);
// Don't worry about this part! Feel free to play around,
// but we'll teach you all about how JavaScript and HTML
// work together in the next section. If you're done Milestone
// 5, you'll need to fiddle around in here a bit.

function updatePage() {
  document.getElementById("last-guess").innerHTML = lastGuess;
  const correct = document.getElementById("correct");
  const isCorrect = checkIsCorrect();
  if (isCorrect === 0) {
    correct.innerHTML = CORRECT_MESSAGE;
  } else {
    correct.innerHTML = INCORRECT_MESSAGE;
  }

  const remaining = document.getElementById("guesses-remaining");
  remaining.innerHTML = guessesRemaining;
}