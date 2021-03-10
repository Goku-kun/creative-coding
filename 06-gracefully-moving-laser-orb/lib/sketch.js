let color = 1;
let t = 0;
let xPos = 0;
let yPos = 0;
let size = 100;
let rRandom;
let gRandom;
let bRandom;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    background(0);
}

function draw() {
    background(0, 16);
    //noStroke();
    size = noise(t - 5) * 200;
    rRandom = noise(t + 2) * 256;
    gRandom = noise(t + 8) * 256;
    bRandom = noise(t - 15) * 256;
    fill(rRandom, gRandom, bRandom);

    xRandom = noise(t + 10) * width;
    yRandom = noise(t + 20) * height;

    ellipse(xRandom, yRandom, size, size);
    t += 0.009;
}
