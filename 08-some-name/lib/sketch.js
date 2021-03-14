let squareWidth = 50;
let square1X;
let square1Y;
let square2X;
let square2Y;
let circle1X;
let circle1Y;
let circle2X;
let circle2Y;
let circleRadius = 150;
let circleSpeed = 5;
let alternater = true;
let counter = 0;
let colorX = 256;
let colorY = 256;
let colorZ = 256;
//let randomX = 0;
//let randomY = 0;
let randomRadius = 50;
let t = 0;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    frameRate(36);
    background(0);
    square1X = 0 - squareWidth;
    square1Y = height / 2 - squareWidth / 2;
    square2X = width;
    square2Y = height / 2 - squareWidth / 2;
    circle1X = 0 + circleRadius / 2;
    circle1Y = 150;
    circle2X = width - circleRadius / 2;
    circle2Y = 150;
}

function draw() {
    background(0);
    randomRadius = noise(t) * 100;
    t += 0.03;
    stroke(random(256), random(256), random(256));
    strokeWeight(3);
    //for (let i = 0; i < 500; i++) {
    //triangle(
    //random(width),
    //random(height),
    //random(width),
    //random(height),
    //random(width),
    //random(height)
    ////randomX() + random(90),
    ////randomY() + random(20),
    ////randomX() + random(25),
    ////randomY() + random(38),
    ////randomX() + random(59),
    ////randomY() + random(28)
    //);
    //
    //}
    if (alternater) {
        for (let j = 0; j < height; j += 20) {
            for (let i = 0; i < width; i += 80) {
                stroke(i, 120, j, 240);
                strokeWeight(4);

                // Alternate the direction of the diagonal line
                // Note that j % 40 returns the remainder of j / 40
                // This means that every time j is a multipe of 40 the diagonal line will be drawn from top-left corner to bottom right corner
                if (j % 40 === 0) {
                    line(i + 10, 20 + j, i, j);
                } else {
                    line(i, 20 + j, i + 10, j);
                }
            }
        }
    } else {
        for (let j = 0; j < height; j += 20) {
            for (let i = 0; i < width; i += 80) {
                stroke(j, 120, i, 240);
                strokeWeight(4);

                // Alternate the direction of the diagonal line
                // Note that j % 40 returns the remainder of j / 40
                // This means that every time j is a multipe of 40 the diagonal line will be drawn from top-left corner to bottom right corner
                if (j % 40 === 0) {
                    line(i, 20 + j, i + 10, j);
                } else {
                    line(i + 10, 20 + j, i, j);
                }
            }
        }
    }
    //if (counter % 36 == 0) {
    //alternater = !alternater;
    //colorX = random(256);
    //colorY = random(256);
    //colorZ = random(256);
    //}
    movingCircles();
    movingSquares();
    counter += 1;
}

function randomX() {
    return noise(t + 0.0005) * width;
}

function randomY() {
    return noise(t + 0.00001) * height;
}

function movingCircles() {
    noFill();
    stroke('yellow');
    strokeWeight(5);
    circle(circle1X, circle1Y, circleRadius);
    noFill();
    stroke('red');
    strokeWeight(5);
    circle(circle2X, circle2Y, circleRadius);

    //circleSpeed = noise(t) + 10;
    circle1X += circleSpeed;
    circle1Y += circleSpeed;
    circle2X -= circleSpeed;
    circle2Y += circleSpeed;

    if (circle1Y > height - circleRadius / 2 || circle1Y < 0 + circleRadius) {
        circleSpeed *= -1;
        alternater = !alternater;

        //circle1X = 0;
        //circle1Y = 0;
        //circle2X = width + circleRadius / 2;
        //circle2Y = 0;
    }
}

function movingSquares() {
    noFill();
    stroke(colorX, colorY, colorZ);
    //stroke('red');
    strokeWeight(5);
    square(square1X, square1Y, squareWidth);
    stroke(colorY, colorX, colorZ);
    //stroke('yellow');
    strokeWeight(5);
    square(square2X, square2Y, squareWidth);
    square1X += 5;
    square2X -= 5;
    if (circle1Y > height - circleRadius / 2 || circle1Y < 0 + circleRadius) {
        colorX = random(256);
        colorY = random(256);
        colorZ = random(256);

        //circle1X = 0;
        //circle1Y = 0;
        //circle2X = width + circleRadius / 2;
        //circle2Y = 0;
    }
    if (square1X > width + squareWidth / 2 || square2X < 0 - squareWidth / 2) {
        square1X = 0 - squareWidth;
        square1Y = height / 2 - squareWidth / 2;
        square2X = width;
        square2Y = height / 2 - squareWidth / 2;
    }
}
