let myCanvas;
let startButton;
let btn;
let cY = 0; 

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
        circle(random(width), random(height), 2);
    }


    // Variant 2 for snow animation
    
    // https://p5js.org/reference/#/p5/push
    // https://p5js.org/reference/#/p5/pop

    // arc(x, y, w, h, start, stop, [mode])
    // arc(200, height, width, 150, -PI, 0, CHORD);    
    
    fill(255)
    arc(200, height, width, cY, -PI, 0, OPEN);    
    cY += 2

    fill(220)
    arc(500, height, width, cY, -PI, 0, OPEN);    
    cY += 2

    if (cY >= 400) {
        doubleClicked()
        removing()
    }


}


function doubleClicked() {
    cY -= 400
    document.getElementById("popup").style.visibility = "visible";
}

// Как по клику вызвать круг, который будет прокатываться от края до края ?
function removing() {
    let x = 0;
    fill('green')
    circle(x, cY, 50)
    x++;

}

function myFunction() {
    fill('pink')
    circle(200, 200, 200)
}
    