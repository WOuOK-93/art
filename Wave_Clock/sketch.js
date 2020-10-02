const TAU = Math.PI * 2;
let angnoise, radiusnoise;
let xnoise, ynoise;
let angle = -TAU / 4;
let radius;
let strokeCol = 254;
let strokeChange = -1;

setup = () => {
    createCanvas(500, 300);
    frameRate(30);
    background(255);
    noFill();
    angnoise = random(10);
    radiusnoise = random(10);
    xnoise = random(10);
    ynoise = random(10);
}

draw = () => {
    radiusnoise += 0.005;
    radius = (noise(radiusnoise) * 550) + 1;

    angle += TAU / 360
    if (angle > TAU) {
        angle -= TAU;
    }
    if (angle < 0) {
        angle += TAU;
    }
    xnoise += 0.01;
    ynoise += 0.01;
    let centerX = width / 2 + (noise(xnoise) * 100) - 50;
    let centerY = height / 2 + (noise(ynoise) * 100) - 50;

    let x1 = centerX + (radius * cos(angle));
    let y1 = centerY + (radius * sin(angle));
    let opprad = angle + TAU / 2;
    let x2 = centerX + (radius * cos(opprad));
    let y2 = centerY + (radius * sin(opprad));
    strokeCol += strokeChange;
    if (strokeCol > 254) {
        strokeChange = -1;
    }
    if (strokeCol < 0) {
        strokeChange = 1;
    }
    stroke(strokeCol, 60);
    strokeWeight(1);
    line(x1, y1, x2, y2);
}