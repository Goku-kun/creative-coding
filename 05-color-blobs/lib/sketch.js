let color = 1;
let xPos = 0;
let yPos = 120;
let size = 100;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    frameRate(8);
}

function draw() {
    xPos = random(width);
    yPos = random(height);
    // randomizing color
    fill(random(0, 256), random(0, 256), random(0, 256));

    // randomizing shades of red color
    //fill(random(0, 256), 0, 0);
    size = random(10, 400);
    // create randomly placed and sized circles
    circle(xPos, yPos, size);

    // create random sized triangles

    //triangle(
    //random(width),
    //random(height),
    //random(width),
    //random(height),
    //random(width),
    //random(height)
    //);
    // create random sized quadrilaterals

    //quad(
    //random(width),
    //random(height),
    //random(width),
    //random(height),
    //random(width),
    //random(height),
    //random(width),
    //random(height)
    //);
}
