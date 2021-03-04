let color = 1;
let xPos = 0;
let yPos = 120;
let size = 100;
let fillValueR = 255;
let fillValueG = 255;
let fillValueB = 255;
let xSpeed = 6;
let ySpeed = 10;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    xPos = width / 2;
    yPos = 120;
}

function draw() {
    background(0);
    fill(fillValueR, fillValueG, fillValueB);
    noStroke();
    circle(xPos, yPos, size);

    //size += 0.6;
    xPos -= xSpeed;
    yPos -= ySpeed;

    if (xPos - size / 2 < 0 || xPos + size / 2 > width) {
        //xPos = width;
        xSpeed *= -1;
        //size = 1;
        fillValueR = Math.floor(Math.random() * 256);
        fillValueG = Math.floor(Math.random() * 256);
        fillValueB = Math.floor(Math.random() * 256);
    }

    if (yPos - size / 2 < 0 || yPos + size / 2 > height) {
        ySpeed *= -1;
        fillValueR = Math.floor(Math.random() * 256);
        fillValueG = Math.floor(Math.random() * 256);
        fillValueB = Math.floor(Math.random() * 256);
    }
}
