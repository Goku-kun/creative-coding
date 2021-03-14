let t = 0;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    frameRate(6);
    background(0);
}

function draw() {
    background(0);
    randomRadius = noise(t) * 100;
    t += 0.03;
    stroke(random(256), random(256), random(256));
    strokeWeight(3);
    for (let i = 0; i < 500; i++) {
        triangle(
            random(width),
            random(height),
            random(width),
            random(height),
            random(width),
            random(height)
            //randomX() + random(90),
            //randomY() + random(20),
            //randomX() + random(25),
            //randomY() + random(38),
            //randomX() + random(59),
            //randomY() + random(28)
        );
    }
}

function randomX() {
    return noise(t + 0.0005) * width;
}

function randomY() {
    return noise(t + 0.00001) * height;
}
