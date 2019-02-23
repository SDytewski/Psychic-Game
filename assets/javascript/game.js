
//Random Number Generator using array
var randomNumber = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Global variables
var wins = 0;
var losses = 0; 
var GuessesLeft = 9;



//Starts game with press function plus variables for conditions
document.onkeyup = function () {

  var computer = randomNumber[Math.floor(Math.random() * randomNumber.length)];  
  var userGuess = event.key; 
  var yourGuess = userGuess;

  
//Resets game function  
  var resetGuesses = function () {
  GuessesLeft = 9; // reset our model
  document.querySelector("#Guesses").innerHTML =  'Your Guesses So Far: '; // reset our view
  }
 
  

//Conditional Statements
  if (userGuess = randomNumber[Math.floor(Math.random() * randomNumber.length)]) {
    
  if (userGuess === computer) {
      wins++;
      resetGuesses();
  }
 
  else if (GuessesLeft == 0) {
      losses++;
     
      resetGuesses();
  }
 
  
 
  else {
      GuessesLeft--;
  }

  }

  //Scoreboard  
  var score =
    "<p>" + "Wins: " + wins + "</p>" +
    "<p>" + "Losses: " + losses + "</p>" +
    "<p>" + "Guesses Left: " + GuessesLeft + "</p>";
  

  //Displays text on screen
  document.querySelector("#game").innerHTML = score;
  var yourGuess =  " " + yourGuess;
  document.querySelector("#Guesses").innerHTML += yourGuess;
  
}