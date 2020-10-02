class Circle {
    constructor(i,j,size) {
        this.i = i;
        this.j = j;
        this.size = size;
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = 200;
    }
    show(size) {
        this.size = size;
        fill(this.r, this.g, this.b);
        ellipse(this.i,this.j,this.size,this.size);
    }
}