let myCanvas;
let startButton;

function setup() {
    background('#34568B')
    myCanvas = createCanvas(600, 700)
    myCanvas.parent('#canvas')
    frameRate(15)
    noLoop()

    startButton = select('#startbutton');
    startButton.mousePressed(startGame)

}

function startGame() {
    loop()
}

function draw() {
    background('#34568B')
    circle(random(width), random(height), 10)
}