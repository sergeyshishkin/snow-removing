let myCanvas;
let startButton;

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
    // Variant 2 for snow animation
    for (let s = 0; s < 1000; s++) { // set constant for snowflakes quantity
        noStroke()
        circle(random(width), random(height), 2);
    }

    // https://p5js.org/reference/#/p5/push
    // https://p5js.org/reference/#/p5/pop

    // arc(x, y, w, h, start, stop, [mode])
    // arc(200, height, width, 150, -PI, 0, CHORD);    
    
    fill(255)
    arc(200, height, width, cY, -PI, 0, CHORD);    
    cY += 2

    fill(220)
    arc(500, height, width, cY, -PI, 0, CHORD);    
    cY += 2

}
 function doubleClicked() {
     cY -= 400
 }

