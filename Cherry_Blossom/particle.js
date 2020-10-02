class Particle {

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-2,2), random(-2, 2));
        this.acc = createVector(random(-0.1,0.1), random(-0.1, 0.1));
    }

    bounce() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y = -this.vel.y;
        }
    }

    updateGray() {
        this.pos.add(this.vel);
    }

    update() {
        this.vel.add(this.acc);
        constrain(this.vel.x, -5, 5);
        constrain(this.vel.y, -5, 5);
        this.pos.add(this.vel);
    }

    showLetter() {
        noStroke();
        fill(255);
        ellipse(this.pos.x, this.pos.y, 5);
    }


    showGray() {
        noStroke();
        this.bounce();
        let index = (int(this.pos.x) + int(this.pos.y) * width) * 4;
        let r = img.pixels[index];
        let g = img.pixels[index + 1];
        let b = img.pixels[index + 2];
        let gray = (r + g + b) / 3
        // console.log(`r:${r}, g:${g}, b:${b}`);
        fill(gray, gray, gray, random(0,25));
        ellipse(this.pos.x, this.pos.y, 5);
    }
    show() {
        noStroke();
        this.bounce();
        let index = (int(this.pos.x) + int(this.pos.y) * width) * 4;
        let r = img.pixels[index];
        let g = img.pixels[index + 1];
        let b = img.pixels[index + 2];
        if(r && g && b){
        fill(r, g, b, random(0, 25));
        ellipse(this.pos.x, this.pos.y, 5);
        }
    }
}