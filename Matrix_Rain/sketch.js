let symbolSize = 24;
let streams = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    let x = 0;

    for (var i = 0; i <= width / symbolSize; i++) {
        stream = new Stream();
        stream.generateSymbols(x, random(-1000, 0));
        streams.push(stream);
        x += symbolSize;
    }
    textSize(symbolSize);
}

function draw() {
    background(0, 150);
    streams.forEach(function(stream){
        stream.render();
    });

}



class Symbol {
    constructor(x, y, speed, first) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.first = first;
        this.switchInterval = round(random(2, 20));
        this.value;
    }

    setToRandomSymbol() {

        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(
                0x30A0 + round(random(0, 96))
            );

        }

    }

    

    rain() {
        this.y = (this.y >= height) ? 0 : (this.y += this.speed);
    }
}

class Stream {
    constructor() {
        this.symbols = [];
        this.totalSymbols = round(random(5, 30));
        this.speed = random(5, 20);
    }

    generateSymbols(x, y) {
        let first = round(random(0,3)) == 1;
        let symbol;
        for (let i = 0; i < this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed, first);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
            first = false;

        }
    }

    render() {
        this.symbols.forEach(function(symbol) {
            if (symbol.first) {
                fill(180, 255, 180);
            } else {
            fill(0, 255, 70);
            }
            text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setToRandomSymbol();
        });
    }
}