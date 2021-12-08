let myCanvas;
let startButton;
let snow = [];


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
}
 */


function draw() {
    background('#34568B')

    for (let s = 0; s < 100; s++) { // set constant for snowflakes quantity
        snow[s] = new Snowflake();
    }
    
    for (i of snow) {
    i.show();
    }

}

class Snowflake {
    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.r = 5; /* Need replacement by relative unit*/
    }

    show() {
        fill(255);
        noStroke();
        circle(this.x, this.y, this.r)
    }
}