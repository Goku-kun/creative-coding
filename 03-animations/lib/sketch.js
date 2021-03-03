let color = 1;
let xPos = 0;
let size = 1;
let fillValueR = 255;
let fillValueG = 255;
let fillValueB = 255;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    xPos = width;
}

function draw() {
    background(0);
    fill(fillValueR, fillValueG, fillValueB);
    noStroke();
    circle(xPos, height / 2, size);

    size += 0.6;
    xPos -= 3;

    if (xPos < 0 - size / 2) {
        xPos = width;
        size = 1;
        fillValueR = Math.floor(Math.random() * 256);
        fillValueG = Math.floor(Math.random() * 256);
        fillValueB = Math.floor(Math.random() * 256);
    }
}
