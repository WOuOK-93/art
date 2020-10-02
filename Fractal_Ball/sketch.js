var theta;
var m;
var ball


function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(0);
    ball = new Ball();
    translate(width / 2 - 100, height);
    m = map(mouseX, 0, width, 0, 30)
    ball.drawBall(100, m, 0.67);

}