function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0, 0, 0);                                        //black background 


    stroke(255, 255, 255);                                      //white lines
    for(let x = 0; x < windowWidth; x+=100){
        for(let y = 0; y < windowHeight + 200; y+=100){
            line(windowWidth/2, windowHeight/2, x, y);          //star wars lines behind triangle
        }
    }

    for(let o = 0; o < 1000; o++){
        ellipse(random(width), random(height), 1, 1);           //stars that look like they are moving
    }

    fill(240, 0, 50);
    triangle(0, 0, windowWidth/2, 0, 0, windowHeight);                                  //red triangle, on left
    fill(50, 0, 240)
    triangle(windowWidth, windowHeight, windowWidth/2, windowHeight, windowWidth, 0);   //blue triangle, on right

    for(let z = 0; z < windowWidth; z+=25){
        line(0, z, windowWidth/2 - z, 0);                       //lines in left triangle
    }

    for(let m = 0; m < windowWidth; m+=25){
        line(windowWidth, m, windowWidth - m, windowHeight);    //lines in right triangle              
    }

}