var Ball = function() {

    this.theta = PI / 6; // 30 degrees

    this.drawBall = function(len, p, d) {
        strokeWeight(2);
        line(p, p, p, -len);
        // Move to the end of that line
        translate(p, -len);
        len *= d;
        if (len > 18) {
            // rotate 6 times for symmetry (30, 90, 150, -30, -90, -150)
            push();
            rotate(this.theta);
            stroke(69, 0, 3);
            this.drawBall(len, p, d);
            pop();
            push();
            rotate(3 * this.theta);
            stroke(92, 0, 2);
            this.drawBall(len, p, d);
            pop();
            push();
            rotate(5 * this.theta);
            stroke(148, 9, 13);
            this.drawBall(len, p, d);
            pop();
            push();
            rotate(-this.theta);
            stroke(212, 13, 18);
            this.drawBall(len, p, d);
            pop();
            push();
            rotate(-3 * this.theta);
            stroke(255, 29, 35);
            this.drawBall(len, p, d);
            pop();
            push();
            rotate(-5 * this.theta);
            stroke(255, 0, 0);
            this.drawBall(len, p, d);
            pop();
        }
    };

};
