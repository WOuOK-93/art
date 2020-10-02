let index = 0;
let value = 0;
let zoom = 5;

setup = () => {
pixelDensity(1);
createCanvas(400, 400);
background(51);

}

render = () => {
    loadPixels()
    for(let x = 0; x < width; x ++) {
        for(let y = 0; y< height; y ++) {
            index = (x + y * 400) * 4
            value = Math.floor(x/zoom * y/zoom) % 2;
            value = value*255;
            pixels[index] = value;
            pixels[index + 1] = value;
            pixels[index + 2] = value;
        }
    }
    updatePixels();
}

draw = () => {
render();
zoom -= 0.01;
}