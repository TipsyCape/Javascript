//javascript comments are just like c

//vars
x=1;
let s = 'this is a string';
console.log(s);
console.log('This is how you reference the value of a variable: ${x}');

function setup() {
    createCanvas(400, 400);   //width height. creates a canvas with origin(0,0) being in the top left of the site
}

function draw() {
    background(120, 200, 300);
    fill(48, 194, 43);    //(R, G, B) on a scale from 0-255. you can also do background(0-255) for grayscale
    rect(0, 300, 400, 100);   //grass
    fill (255, 0, 0);       
    rect(100, 100, 200, 200); //house
    fill(99, 68, 24);
    triangle(200, 0, 100, 100, 300, 100); //roof
    rect(150, 200, 50, 100); //door
    circle(160, 260, 10); //doorknob
    fill(255, 255, 255);
    rect(230, 140, 50, 50); //window
    line(255, 140, 255, 190);
    line(230, 165, 280, 165);
    
}