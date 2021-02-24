function setup() {
    // put setup code here
    createCanvas(window.innerWidth, window.innerHeight);
    // background(0);
}

function draw() {
    // put drawing code here
    // background(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    background(120, 120, 120);
    // Letter D
    const DxStart = width / 4;
    const DyStart = height / 4;
    const DxEnd = width / 4;
    const DyEnd = height / 4 + 200;
    const DLength = DyEnd - DyStart;
    strokeWeight(10);
    fill(220, 0, 170);
    // stroke(0);

    arc(width / 4, DyStart + DLength / 2, 200, 200, PI + HALF_PI, HALF_PI);
    stroke(0, 150, 200);
    line(DxStart, DyStart, DxEnd, DyEnd);



    // letter H
    //  Left Line
    const HlineLeftStartX = DxStart + 150;
    const HlineLeftStartY = DyStart;
    const HlineLeftEndX = DxStart + 150;
    const HlineLeftEndY = DyStart + 200;

    stroke(0);
    strokeWeight(10);
    line(HlineLeftStartX, HlineLeftStartY, HlineLeftEndX, HlineLeftEndY);

    // middle horizontal line
    const HlineMiddleStartX = DxStart + 150;
    const HlineMiddleStartY = (HlineLeftStartY + HlineLeftEndY) / 2;
    const HlineMiddleEndX = HlineMiddleStartX + 100;
    const HlineMiddleEndY = (HlineLeftStartY + HlineLeftEndY) / 2;

    line(HlineMiddleStartX, HlineMiddleStartY, HlineMiddleEndX, HlineMiddleEndY);

    // Right H Line
    const HlineRightStartX = DxStart + 250;
    const HlineRightStartY = DyStart;
    const HlineRightEndX = DxStart + 250;
    const HlineRightEndY = DyStart + 200;

    stroke(0);
    strokeWeight(10);
    line(HlineRightStartX, HlineRightStartY, HlineRightEndX, HlineRightEndY);



    // Letter A

}