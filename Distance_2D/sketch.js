let max_distance;
let circles = [];
let size;

function setup() {

    createCanvas(400, 400);
    noStroke();
    max_distance = dist(0, 0, width, height);
    for (let i = 0; i <= width; i += 20) {
        for (let j = 0; j <= height; j += 20) {
            circles.push(new Circle(i, j, 30));
        }
    }

}

function draw() {
    background(51);

    let jc = 0;
    for (let i = 0; i <= width; i += 20) {
        for (let j = 0; j <= height; j += 20) {
            jc++
            size = dist(mouseX, mouseY, i, j);
            size = size / max_distance * 100;
            if (size < 5) {
                size = 5;
            }
            if (size > 20) {
                size = 20;
            }
            circles[jc - 1].show(size);
        }
    }
}