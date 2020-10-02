class Circle{
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.r = 1;

        this.growing = true;
    }

    grow() {
        if(this.growing) {
            this.r += 0.5;
        }
    }

    edges() {
        let bool = (this.x + this.r > width || this.x -  this.r < 0 || this.y + this.r > height || this.y -this.r < 0);
        return bool;
    }

    show() {
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, 2*this.r, 2*this.r);
    }
}