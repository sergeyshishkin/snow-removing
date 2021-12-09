let myCanvas;
let startButton;
let snow = [];

let drifts = [];


function setup() {
    background('#34568B')
    myCanvas = createCanvas(600, 700)
    myCanvas.parent('#snow-canvas')
    frameRate(15)    
    //noLoop()
    
    //startButton = select('#startbutton');
    //startButton.mousePressed(startGame)
}

/* function startGame() {
    loop()       
} */



function draw() {
    // Variant 2 for snow animation
/*     for (let s = 0; s < 1000; s++) { // set constant for snowflakes quantity
        noStroke()
        circle(random(width), random(height), 2);
    }
 */

    background('#34568B')

    for (let s = 0; s < 2000; s++) { // set constant for snowflakes quantity
        snow[s] = new Snowflake();
    }


    for (i of snow) {
    i.show();
    }
    
    // https://p5js.org/reference/#/p5/translate
    // https://p5js.org/reference/#/p5/scale
    // https://p5js.org/reference/#/p5/push
    // https://p5js.org/reference/#/p5/pop

    // arc(x, y, w, h, start, stop, [mode])
    // arc(200, height, width, 150, -PI, 0, CHORD);    
    
    arc(200, height, width, 150, -PI, 0, CHORD);    
    
    squareColor = color(255);
    squareColor.setAlpha(0 + 70 * millis() / 5000);
    fill(squareColor)
    arc(400, height, width, 250, -PI, 0, CHORD);    



}


// 
    
/* Гипотеза: сугроб - это объект класса snowDrift, фигура это arc.
функция создает сугробы по таймингу и кладет их в массив Сугробы
покопаться в транслейт, скейл, пуш, поп
*/ 

/* Гипотеза №2 - использовать два скетча. Один над другим.
На одном идет анимация снега. На другом образование сугробов     

*/
class snowDrift {
    constructor() {

    //constructor(x, y, w, h, s, st, color) {
        /* this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.start = s;
        this.stop = st;
        this.color = color; */
    }

    showArc() {
        fill('red');
        noStroke();
        arc(400, height, width, 150, -PI, 0, CHORD)
        //arc(this.x, this.y, this.w, this.h, this.s, this.st, CHORD)
    }

}

class Snowflake {
    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.r = 1; // Need replacement by relative unit
    }

    show() {
        fill(255);
        noStroke();
        circle(this.x, this.y, this.r)
    }
 
}
