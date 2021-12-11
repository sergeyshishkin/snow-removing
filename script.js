let myCanvas;
let startButton;
let btn;

let cY = 0; 
let speed = 5;

function setup() {
    background('#34568B')
    myCanvas = createCanvas(600, 700)
    myCanvas.parent('#canvas')
    frameRate(17)    
    /* noLoop()
    startButton = select('#start-button');
    startButton.mousePressed(startGame) */
}

/* function startGame() {
    document.getElementById("start-button").style.visibility = "hidden";
    loop()       
} */


function draw() {
    background('#34568B')

    for (let s = 0; s < 1500; s++) { // set constant for snowflakes quantity
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


    if (cY / 2 > height) {
        loseGame()
    }

    if (Math.sign(cY) == -1) {
        cY = 0;
    }

    
}
// Добавить элемент соревновательности: показывать юзеру что он справляется все с большей трудностью
// Типа: Вы тащите уже сложность х2, так держать

setTimeout(showMessage, 3000)
setInterval(speedUp, 6000)


function speedUp() {
    speed += 5
}

function showMessage() {
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("btn").style.visibility = "visible";
}

document.getElementById('btn').onclick = function () {
    cY -= 150
    document.getElementById("popup").style.visibility = "hidden";
}

function loseGame() {
    noLoop()
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("end-game-message").style.visibility = "visible";
    document.getElementById("head-end").textContent = "UNFORTUNATELY, YOU LOSE";
    document.getElementById("text-end").textContent = "Go there for smth";    
    document.getElementById("target-link").href = "https://www.yahoo.com";    
    
}

//setTimeout(winGame, 8000)

function winGame() {
    noLoop()
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("end-game-message").style.visibility = "visible";
    document.getElementById("head-end").textContent = "YOU DID IT, YOU WON";
    document.getElementById("text-end").textContent = "Take you reward here";    
    document.getElementById("target-link").href = "https://www.google.com";    
    
}
