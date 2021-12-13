let myCanvas;
let startButton;
let btn;

let cY = 0; 
let speed = 5;

let snowAmount = 1500;


let darkBg;
let lightBg;

let currentBg;

function preload() {
  darkBg = loadImage('dark-bg.jpg'); // Photo by <a href="https://unsplash.com/@lukechesser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luke Chesser</a> on <a href="https://unsplash.com/backgrounds/colors/gradient?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  lightBg = loadImage('light-bg.jpg'); // Photo by <a href="https://unsplash.com/@davehoefler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dave Hoefler</a> on <a href="https://unsplash.com/backgrounds/colors/gradient?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
currentBg = darkBg;

}

function setup() {
    myCanvas = createCanvas(600, 700)
    myCanvas.parent('#canvas')
    image(currentBg, 0, 0);
    //background('#34568B')

    frameRate(17)   
    //noSmooth() 
    noLoop()
    startButton = select('#start-button');
    startButton.mousePressed(startGame)
}

function startGame() {
    document.getElementById("start-button").style.visibility = "hidden";
    loop()    
}


function draw() {
    image(currentBg, 0, 0);
    for (let s = 0; s < snowAmount; s++) { // set constant for snowflakes quantity
        fill(255)
        noStroke()
        circle(random(width), random(height), 3); // use relative unit
    }   
    
    fill(255)
    arc(500, height, width, cY, PI, 0);    // use relative unit

    fill(245)
    arc(200, height, width, cY, PI, 0);    // use relative unit
    
    fill(250)
    arc(350, height, width, cY, PI, 0);    // use relative unit
    
    cY += speed;

    if (cY > height / 3 && cY < height / 2.5) { // может надо подтюнить
        showMessage();
    }
    
    else if (cY / 2 > height) {
        loseGame()
    }
    
    if (Math.sign(cY) == -1) {
        cY = 0;
    } 

}
// Добавить элемент соревновательности: показывать юзеру что он справляется все с большей трудностью
// Типа: Вы тащите уже сложность х2, так держать


// This code don't work here, but works in draw(), unfortutately inproper
    if (speed == 23) {
        lessSnow(1000)
    }
    
    else if (speed == 26) {
        lessSnow(450)
    }
    
    else if (speed == 28) {
        winGame()
    }



function showMessage() {
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("btn").style.visibility = "visible";
}

document.getElementById('btn').onclick = function () {
    cY -= 150
    speed++;
    document.getElementById("popup").style.visibility = "hidden";
}

function loseGame() {
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("end-game-message").style.visibility = "visible";
    document.getElementById("head-end").textContent = "UNFORTUNATELY, YOU LOSE";
    document.getElementById("text-end").textContent = "Go there for smth";    
    document.getElementById("target-link").href = "https://www.yahoo.com";    
    noLoop()
}

function lessSnow(reducedAmount) {
    snowAmount -= reducedAmount;
}

function winGame() {
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("end-game-message").style.visibility = "visible";
    document.getElementById("head-end").textContent = "YOU DID IT, YOU WON";
    document.getElementById("text-end").textContent = "Take you reward here";    
    document.getElementById("target-link").href = "https://www.google.com";    
    currentBg = lightBg;
    noLoop()
}

function repeatGame() {
    //document.location.reload()
    cY = 0;
    speed = 5;
    snowAmount = 1500;
    currentBg = darkBg;
    document.getElementById("end-game-message").style.visibility = "hidden";
    loop()
}