// Nora Tunggadevi
// 3190797
// Prof. Peter Ha
// Interactive Media Web (GDES-3091-501)
// Mar 26, 2024

//variables for the time to change the colour of stroke; inspiration of colour changing overtime from https://editor.p5js.org/lberdugo/sketches/BJG10p4dZ
var time;
var wait = 7500; // every 7.5 seconds the colour changes to a new colour
var c;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); //WEBGL is used to call up 3D Canvas. https://p5js.org/reference/#/p5/triangle
    background(0); //black background

    time = millis();
    c = color(255);
}

function draw() {
    if ((millis() - time) >= wait) {
        colorMode(HSB); //changing colour mode from RGB (Red, Green,Blue) to HSB (Hue, Brightness, Saturation) so its easier to get brighter colours. https://p5js.org/reference/#/p5/colorMode
        c = color(random(360), 100, 100); // Change the background color
        time = millis(); // Update the stored time
    }

    fill(0); // Set fill with alpha
    stroke(c); // Set stroke with alpha

    //rotating the ellipse in the 3D
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);

    //ellipse settings
    ellipse(windowWidth * .25, windowHeight * .5, windowWidth - 500, windowHeight - 300);
}


