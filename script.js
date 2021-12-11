let myCanvas;
let startButton;
let btn;

let cY = 0; 

function setup() {
    background('#34568B')
    myCanvas = createCanvas(600, 700)
    myCanvas.parent('#canvas')
    frameRate(15)    
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

    for (let s = 0; s < 1000; s++) { // set constant for snowflakes quantity
        fill(255)
        noStroke()
        circle(random(width), random(height), 2); // use relative unit
    }
       
    
    fill(255)
    arc(500, height, width, cY, PI, 0);    // use relative unit

    fill(245)
    arc(200, height, width, cY, PI, 0);    // use relative unit
    
    fill(255)
    arc(350, height, width, cY, PI, 0);    // use relative unit
    
    cY += 5

    if (cY == height / 2) { // use relative unit
        showMessage()
    }
    else if (cY / 2 == height) {
        loseGame()
    }
}


function showMessage() {
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("btn").style.visibility = "visible";

}

document.getElementById('btn').onclick = function () {
    cY -= 200
    document.getElementById("popup").style.visibility = "hidden";
}

function loseGame() {
    noLoop()
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("end-game-message").style.visibility = "visible";
    document.getElementById("head-end").textContent = "UNFORTUNATELY, YOU LOSE";
    document.getElementById("text-end").textContent = "Next time, use that";    
    document.getElementById("target-link").value = "https://www.yahoo.com";
    
}

//setTimeout(winGame, 10000)

function winGame() {
    noLoop()
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("end-game-message").style.visibility = "visible";
    document.getElementById("head-end").textContent = "YOU DID IT, YOU WON";
    document.getElementById("text-end").textContent = "Take you reward here";    
    document.getElementById("target-link").value = "https://www.google.com";
    
}