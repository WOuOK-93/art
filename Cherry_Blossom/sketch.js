let particles = [];
let img;
let counter;
preload = () => {
	img = loadImage("cherry_blossom.jpg");
	font = loadFont("Cloud Calligraphy - TTF.ttf"); //from FONT1001 Misti's Fonts
}

setup = () => {
	createCanvas(1280, 720);
	img.loadPixels();
	background(0);
	
	let points = font.textToPoints("Spring is coming*^~", width/10, height/2, 130, {
		sampleFactor: 0.4
	});

	console.log(points.length);

	for (const pt of points) {
		let particle = new Particle(pt.x, pt.y);
		particles.push(particle);
	}
	// counter = createP();
	



}

draw = () => {
	if(frameCount < 300){
	for (const particle of particles) {
		particle.showLetter();
	}
} else if (frameCount < 700) {
	for (const particle of particles) {
		particle.updateGray();
		particle.showGray();
	}
} else {
	for (const particle of particles) {
		particle.update();
		particle.show();
	}
}
	// counter.html(frameRate());
}