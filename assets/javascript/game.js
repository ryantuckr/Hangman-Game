var secretWord = "";

var guessCount;
var hiddenLetters = new Array();

function startGame() {
  console.clear(); // Clears the console so we don't get confused between executions
  secretWord = pickSecretWord(); // This function picks a secret word and displays it in console

  // Create an array of "hidden" letters the same length as the secret word, fill it with the '_' char
  for (var i = 0; i < secretWord.length; i++) {
    hiddenLetters[i] = "_";
  }


  guessCount = 10;
  document.getElementById('guessCount').innerHTML = "Starting Guesses: " + guessCount;
  drawWord(); // This function outputs the hidden word for the user
  document.getElementById('result').innerHTML = "";
  document.getElementById('input').style.display = 'block';
  document.getElementById('button').style.display = 'none';
  document.getElementById('input').focus();
}

function guess() {
  // Get the users guess from the textbox
  var userGuess = document.getElementById('input').value;

  // Clear the textbox ready for the next guess
  document.getElementById('input').value = "";
  console.log(userGuess)
    // Check if the letter they guessed is in the word
  isGuessInSecretWord(userGuess);

  // Display how many guesses they have left
  document.getElementById('guessCount').innerHTML = "Remaining Guesses: " + guessCount;

  // Check to see if they won.
  checkWin();
}

function pickSecretWord() {
  var wordList = ['master wu', 'lloyd', 'garmadon', 'kai', 'zane', 'cole', 'jay', 'nya', 'lilly']; // Create an array of words
  var secretWordSelector = Math.floor((Math.random() * wordList.length)); // Pick a random word from the array
  console.log("Secret word: " + wordList[secretWordSelector]) // Output the selected word to the console for easy testing
  return wordList[secretWordSelector]; // Return the secret word.
}

function isGuessInSecretWord(theGuess) {
  var isInWord = false;
  for (var i = 0; i < secretWord.length; i++) {
    if (theGuess == secretWord.charAt(i)) {
      hiddenLetters[i] = theGuess;
      isInWord = true;
      drawWord();
    }
  }
  if (isInWord == false) {
    guessCount--;
  }
}

function drawWord() {
  document.getElementById('hiddenWord').innerHTML = "";
  for (var i = 0; i < secretWord.length; i++) {
    document.getElementById('hiddenWord').innerHTML += hiddenLetters[i] + " ";
  }
}


function checkWin() {
  if (hiddenLetters.join('') == secretWord) {
    document.getElementById('input').style.display = 'none';
    document.getElementById('button').style.display = 'block';
    document.getElementById('result').innerHTML = "You win!";
    alert("You are a Ninjago Hangman Master!");
    
  }
  if (guessCount <= 0) {
    document.getElementById('input').style.display = 'none';
    document.getElementById('button').style.display = 'block';
    document.getElementById('result').innerHTML = "Too many guesses. You lose!";
    alert("Game Over");
  }
}



//split and join 










//store all the guesses


//take the user guess and double check it against all the letters in the hidden word
//get index of hidden word






//if (hiddenWord.indexOf(userGuess) > -1)
//{
//  alert("letter found inside hiddenword");
//}
//else {
//    alert("letter not found");
//}



//if(hiddenWord.indexOf(userGuess) > -1) {
///   alert("good guess");
//} 
//else {
//    prompt("guess again")
//}





//for (i = 0; i === answers.length([0]); i++)
//var n = answers.length(i);
//console.log(n);








//if there is no match remove a life
//if lives = 0 prompt loss.
//if there is a match display the letter in the right place

//if all the letters ahve been guessed prompt win



//var n = answers.indexOf("word");
//console.log (n);
//if (hiddenWord.indexOf() === userGuess) {
//    console.log("yes, this is one of the letters");
//} else {
//    console.log("no, wrong guess");
//    lives--;
//}



// you need to validate the user guess against the index of the hiddenword
//if true
//udpate the code
//if fasle
//-lifecount
//checkUserGuess() {
// var n = answers.indexOf(hiddenWord);
//console.log (n);