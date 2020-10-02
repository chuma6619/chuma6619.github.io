// to start the game when it is clicked in the HTML page
var startGame = document.querySelector(".start-game");
startGame.addEventListener("click", guessGame);

// program  data:
var  number = Math.floor(Math.random() * 20); // to have a range of random numbers to guess from
var guess;
var replay;
var limit = 5;
var won = false;
var guesses = [];

function guessGame(){
    // game control loop - iterates for each try
for(i = 1; i <= limit; i++){
    // prompt user for their guess
    do{
    guess = parseInt(prompt("Guess a number between the range of 0 to 20: "));
    }while(isNaN(guess) || isPreviousGuess(guess));
 
    // if correct: let the user know they won
     if (guess == number){
         document.getElementById("messages").innerHTML = "Correct! You Won.";
         won = true;
         break;
     }
 
    //if incorrect: let the user know
    else{
        guesses[i] = guess; //to add the incorrect guesses to the empty array named guesses
        alert("Incorrect. \nyou have guessed:  " + guesses + "\nTries remaining :  " + (limit - i));
    }
 }
 
 // if the user ran out of tries, let them know the game is over and list out the guesses made
 if(!won){
     document.getElementById("messages").innerHTML = "Sorry, you ran out of tries. Game over. <br> the correct number was: " + number +
      "<br> the guesses made are: " + guesses;
      number = Math.floor(Math.random() * 20);
      guesses = [];
 }
 else{
    number = Math.floor(Math.random() * 20);
    guesses = [];
    won = false;
 }

 // A function that will determine if the user's guess has already been guessed
 function isPreviousGuess(){
     for(var i = 0; i < guesses.length; i++){
         if(guesses[i]== guess){
             return true;
         }
     }
     return false;
 }
}
