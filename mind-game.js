// A simple Mind Game;
// array of questions
var questions = ["1. Pick any positive number." + "<br>" +"2. Double the number." + "<br>" +
 "3. Add 6 to the number." + "<br>" + "4. Then divide your answer by 2." + "<br>" + 
 "5. Subtract that first number you picked from your answer.",

"1. Pick any positive number." + "<br>" +"2. Double the number." + "<br>" + 
"3. Add 10 to the number." + "<br>" + "4. Then divide your answer by 2." + "<br>" + 
"5. Subtract that first number you picked from your answer.",

"1. Pick any positive number." + "<br>" +"2. Double the number." +
 "<br>" + "3. Add 20 to the number." + "<br>" + "4. Then divide your answer by 2." + "<br>" + 
 "5. Subtract that first number you picked from your answer.",

 "1. Pick any positive number." + "<br>" +"2. Double the number." +
 "<br>" + "3. Add 15 to the number." + "<br>" + "4. Then divide your answer by 2." + "<br>" + 
 "5. Subtract that first number you picked from your answer.",
]


var btn = document.getElementById("start-game"); // accessing the clickable button to start the game.
 var steps = document.getElementById("game-steps"); // acessing where the game steps will be displayed.

 btn.addEventListener("click", myFunction)
 // the function that will get a random question from the array of questions.
 function myFunction(){
     var randomNumber = getRandomNumber();
     steps.innerHTML = "Follow the steps carefully:" + "<br>";
     steps.innerHTML += questions[randomNumber];

     // if the random question gotten is equall to the array of questions with the index 0, then execute this code
     if(questions[randomNumber] == questions[0]){

        var messages = document.getElementById("messages"); // access the div tag with the id "messages".
        var answerBtn = document.createElement("p"); // to create the <p> tag.
        answerBtn.innerHTML = "Click to view your Answer"; // write this on the <p> tag that has been created.
        messages.appendChild(answerBtn); // append the <p> created & the text written to the div tag with the id "messages".
        answerBtn.classList.toggle("answer"); // to add the class "answer" to the <p> tag that has been created. NB: the "toggle" is used instead of "add" so that if the class is already there, it will remove it but if the class is not there already, it will add it there.
        getAnswer1(); // calling the function to display the answer of the array of question with the index 0.
    }
    
     //  else if the random question gotten is equall to the array of questions with the index 1, then execute this code
    else if(questions[randomNumber] == questions[1]){

        var messages = document.getElementById("messages"); // access the div tag with the id "messages".
        var answerBtn = document.createElement("p"); // to create the <p> tag.
        answerBtn.innerHTML = "Click to view your Answer"; // write this on the <p> tag that has been created.
        messages.appendChild(answerBtn); // append the <p> created & the text written to the div tag with the id "messages".
        answerBtn.classList.toggle("answer"); // to add the class "answer" to the <p> tag that has been created.
        getAnswer2(); // calling the function to display the answer of the array of question with the index 1.
    }

    //  else if the random question gotten is equall to the array of questions with the index 3, then execute this code
    else if(questions[randomNumber] == questions[3]){

        var messages = document.getElementById("messages"); // access the div tag with the id "messages".
        var answerBtn = document.createElement("p"); // to create the <p> tag.
        answerBtn.innerHTML = "Click to view your Answer"; // write this on the <p> tag that has been created.
        messages.appendChild(answerBtn); // append the <p> created & the text written to the div tag with the id "messages".
        answerBtn.classList.toggle("answer"); // to add the class "answer" to the <p> tag that has been created.
        getAnswer4(); // calling the function to display the answer of the array of question with the index 3.
    }
    //  else the random question gotten is equall to the array of questions with the index 2, then execute this code
    else{

        var messages = document.getElementById("messages"); // access the div tag with the id "messages".
        var answerBtn = document.createElement("p"); // to create the <p> tag.
        answerBtn.innerHTML = "Click to view your Answer"; // write this on the <p> tag that has been created.
        messages.appendChild(answerBtn); // append the <p> created & the text written to the div tag with the id "messages".
        answerBtn.classList.toggle("answer"); // to add the class "answer" to the <p> tag that has been created.
        getAnswer3(); // calling the function to display the answer of the array of question with the index 2.
        } 
}
// a function to get a random number from the length of the array of questions.
function getRandomNumber(){
    return Math.floor(Math.random()* questions.length);
}
// a function to display the answer of the array of question with the index 0.
function getAnswer1(){
    var answer = document.querySelector(".answer");
    answer.addEventListener("click", function(){
        alert("Your Answer is :  3" + "\n\n" + "WOW!" + "\n\n" + "I AM A GENIUS!!!");
        location.reload(); // to refresh the page for another random question after the answer has been displayed.
    });
}

// a function to display the answer of the array of question with the index 1.
function getAnswer2(){
    var answer = document.querySelector(".answer");
    answer.addEventListener("click", function(){
        alert("Your Answer is :  5" + "\n\n" + "WOW!" + "\n\n" + "I AM A GENIUS!!!");
        location.reload(); // to refresh the page for another random question after the answer has been displayed.
    });
}

// a function to display the answer of the array of question with the index 2.
function getAnswer3(){
    var answer = document.querySelector(".answer");
    answer.addEventListener("click", function(){
        alert("Your Answer is :  10" + "\n\n" + "WOW!" + "\n\n" + "I AM A GENIUS!!!");
        location.reload(); // to refresh the page for another random question after the answer has been displayed.
    });
}

// a function to display the answer of the array of question with the index 3.
function getAnswer4(){
    var answer = document.querySelector(".answer");
    answer.addEventListener("click", function(){
        alert("Your Answer is :  7.5" + "\n\n" + "WOW!" + "\n\n" + "I AM A GENIUS!!!");
        location.reload(); // to refresh the page for another random question after the answer has been displayed.
    });
}