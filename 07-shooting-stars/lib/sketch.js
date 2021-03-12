let color = 1;
let t = 0;
let xPos = 0;
let yPos = 0;
let size = 100;
let rRandom;
let gRandom;
let bRandom;
let sparkleX;
let sparkleY;
let sparkleSize;

let starX = 0;
let starY = 0;
let starSize = 10;
let starSpeedX = 0;
let starSpeedY = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    background(0);
    frameRate(30);
}

function draw() {
    background(0, 25);
    //noStroke();
    size = noise(t - 5) * 200;
    rRandom = noise(t + 2) * 256;
    gRandom = noise(t + 8) * 256;
    bRandom = noise(t - 15) * 256;
    fill(rRandom, gRandom, bRandom);

    sparkleX = random(0, width);
    sparkleY = random(0, height);
    sparkleSize = random(0, 13);

    ellipse(sparkleX, sparkleY, sparkleSize, sparkleSize);
    t += 0.009;
    shootingStar(3, 3);
    shootingStar(2, 2);
}

function shootingStar(starSpeedX, starSpeedY) {
    fill(255);
    noStroke();

    ellipse(starX, starY, starSize);
    starX += starSpeedX;
    starY += starSpeedY;

    if (starX > width || starY > height) {
        starX = random(0, width / 2);
        starY = random(0, height / 2);
        starSpeedX *= -1;
        starSize = random(0, 25);
    }
}
