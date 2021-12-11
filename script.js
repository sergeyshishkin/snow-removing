let myCanvas;
let startButton;
let btn;

let cY = 0; 
let cX;

let myY;

function setup() {
    background('#34568B')
    myCanvas = createCanvas(600, 700)
    myCanvas.parent('#canvas')
    frameRate(15)    
    //noLoop()
    
    //startButton = select('#startbutton');
    //startButton.mousePressed(startGame)
}

/* function startGame() {
    loop()       
} */


function draw() {
    background('#34568B')

    for (let s = 0; s < 1000; s++) { // set constant for snowflakes quantity
        fill(255)
        noStroke()
        circle(random(width), random(height), 2); // use relative unit
    }
       

    fill(245)
    arc(500, height, width, cY, PI, 0);    // use relative unit

    fill(220)
    arc(200, height, width, cY, PI, 0);    // use relative unit
    
    fill(235)
    arc(350, height, width, cY, PI, 0);    // use relative unit
    
    cY += 5

    if (cY == 400) { // use relative unit
        showMessage()
    }
    else if (cY == 1000) { // use relative unit
        showMessage()
    }

    else if (cY / 2 == height) {
        endGame()
    }
}


function showMessage() {
    document.getElementById("popup").style.visibility = "visible";
}

    
document.getElementById('btn').onclick = function () {
    cY -= 200
    document.getElementById("popup").style.visibility = "hidden";
}


function endGame() {
    if (document.getElementById("popup").style.visibility = "visible") {
        document.getElementById("popup").style.visibility = "hidden"
    }
    noLoop()
}