function setup() {
    // put setup code here
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    let i = 0;
    while (i < 250) {
        ellipse(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 3, 4);
        i++;
    }
    ellipse(100, 100, 80, 80);
}

function draw() {
    // put drawing code here
    if (mouseIsPressed) {
        fill(0);
        stroke(255);
    } else {
        fill(255);
        stroke(0);
    }
    ellipse(mouseX, mouseY, 40, 40);
}