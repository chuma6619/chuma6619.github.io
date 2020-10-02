
/* navbar */

var container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", ()=>{
    container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", ()=>{
    container.classList.remove("change");
});

var colors = ["indigo","#7fffd4","#ffa07a", "blue", "green"];
for(var i=0; i<=colors.length; i++){
    var navLink =document.querySelector(".nav-link1");
    navLink.style.backgroundColor = colors[0];

    var navLink =document.querySelector(".nav-link2");
    navLink.style.backgroundColor = colors[1];

    var navLink =document.querySelector(".nav-link3");
    navLink.style.backgroundColor = colors[2];

    var navLink =document.querySelector(".nav-link4");
    navLink.style.backgroundColor = colors[3];

    var navLink =document.querySelector(".nav-link5");
    navLink.style.backgroundColor = colors[4];
} 

/* navbar */

/* Contact validation */
var contactValidation = document.querySelector(".contact-form");
contactValidation.addEventListener("submit",display);

function display(){
    window.alert("Your Response has been Received Successfully," +"\n" + "THANK YOU!!!");
    var clear1 = document.getElementById("input1");
    var clear2 = document.getElementById("input2");
    var clear3 = document.getElementById("input3");
    var clear4 = document.getElementById("input4");
    clear1.value = "";
    clear2.value = "";
    clear3.value = "";
    clear4.value = "";
} 
/* End of Contact validation */

/*Animation of game section */
// Two drawings (3 circles & rectangle) with animation
// declare global variables
var canvas, w, h, ctx;
var ball1 = {
    x: 100,
    y:100,
    radius: 15,
    color:"green",
    speedx:2,
    speedy:1
}
var ball2 = {
    x: 60,
    y:130,
    radius: 40,
    color:"purple",
    speedx:3,
    speedy:1
}
var ball3 = {
    x: 200,
    y:250,
    radius: 30,
    color:"blue",
    speedx:3,
    speedy:5,
}
var player = {
    x: 10,
    y: 10,
    width: 20,
    height: 20,
    color: "orange"
}

// get the Dom ready
window.onload = init();
function init(){
    // get the canvas
    canvas = document.querySelector("#myCanvas");

    //get the width and height of the canvas
    w = canvas.width;
    h = canvas.height;

    // get the context
    ctx = canvas.getContext("2d");

    // ready to go
    mainLoop();
}

function mainLoop(){
    //clear the canvas
    ctx.clearRect(0, 0, w, h);

    // draw the ball and player
    drawFilledRectangle(player);
    drawFilledCircle(ball1);
    drawFilledCircle(ball2);
    drawFilledCircle(ball3);
    //animate/move the ball that is bouncing all over the walls
    moveBall(ball1);
    moveBall(ball2);
    moveBall(ball3);

    // ask for new animation frame
    requestAnimationFrame(mainLoop);
}

function moveBall(b){
    b.x += b.speedx;
    b.y += b.speedy;
    // check for collision of the ball with the walls
    testCollisionBallWithWalls(b);
}

function testCollisionBallWithWalls(b){
    // collision with vertical walls
    //if the ball hit the right wall, change direction
    if((b.x + b.radius) > w){
        b.speedx = -b.speedx;
        // put the ball at the collision point
        b.x = w - b.radius;
    }
    // if the ball hit the left wall, change direction
    else if((b.x -b.radius) < 0){
        b.speedx = -b.speedx;
        //put the ball at collision point
        b.x = b.radius;
    }
    //collision with the horizontal wall
    //if the ball hit the right wall, change direction
    if((b.y + b.radius) > h){
        b.speedy = -b.speedy;
        //put the ball at the collision point
        b.y = h - b.radius;
    }
    // if the ball hit the left wall, change direction
    else if((b.y -b.radius) < 0){
        b.speedy = -b.speedy;
                //put the ball at the collision point
                b.y = b.radius;
    }
}

function drawFilledRectangle(r){
    // save the context
    ctx.save();
    // translate the cordinate system, draw relative to it
    ctx.translate(r.x, r.y);
    //start drawing
    ctx.fillStyle = r.color;
    ctx.fillRect(0, 0, r.width, r.height);
    // restore the context
    ctx.restore();
}

function drawFilledCircle(c){
    //save the context
    ctx.save();
    // translate the cordinate system, draw relative to it
    ctx.translate(c.x, c.y);
    //start drawing
    ctx.fillStyle = c.color;
    ctx.beginPath();
    ctx.arc(0, 0, c.radius, 0, 2*Math.PI);
    ctx.fill();
    // restore the context
    ctx.restore();
}

/* End of Animation of game section */
