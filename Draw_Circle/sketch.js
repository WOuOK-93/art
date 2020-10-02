///<reference path="../types/p5.global-mode.d.ts" />

const TAU = Math.PI * 2;

setup = () => {
createCanvas(500, 300);
background(250);
strokeWeight(0.5);
}

draw = () => {
let centX = 250;
let centY = 150;

let x;
let y;

let lastX = -999;
let lastY = -999;
let radiusNoise = Math.random() * 10;
let radius = 10;
stroke(Math.random() * 20, Math.random()*50, Math.random() * 70, 80);

let startAngle = Math.random() * TAU;
let endAngle = 4*TAU + Math.random() * 4 * TAU
let anglestep = TAU/360*5 + Math.random() * TAU / 120;

for(let ang = startAngle; ang <= endAngle; ang += anglestep)
{
    radiusNoise += 0.05;
    radius += 0.5;
    let thisRadius = radius + noise(radiusNoise) * 200 - 100;

    x = centX + thisRadius*cos(ang);
    y = centY + thisRadius*sin(ang);
    if(lastX > -999) {
        line(x, y, lastX, lastY);
    }
    lastX = x;
    lastY = y;
}

}