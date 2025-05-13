// snowman
rect(1,350, 400, 45); //Ground
ellipse(200, 300, 150, 150); //Bottom Circle
ellipse(200, 200, 100, 100); //Middle Circle
ellipse(200, 120, 75, 75); //Top Circle
line(160, 200,80,80); //Left Hand
line(240, 200, 310,80); //Right Hand




// foood plate
background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 
fill(0, 255, 47); //Green Grapes
ellipse(130, 100, 30, 30);
ellipse(120, 120, 30, 30);
ellipse(100, 100, 30, 30);
ellipse(155, 90, 30, 30);
ellipse(115, 80, 30, 30);
ellipse(120, 150, 30, 30);
ellipse(90, 130, 30, 30);
ellipse(100, 160, 30, 30);
ellipse(90, 185, 30, 30);
ellipse(120, 190, 30, 30);
ellipse(150, 165, 30, 30);
fill(255, 242, 0); //Pizza
triangle(175, 100, 300, 100, 250, 250);
fill(255, 47, 0); //Pepperoni on Pizza
arc(210, 110, 30, 30, 1, 140);
arc(260, 160, 30, 30, 1, 100);
arc(260, 120, 30, 30, 1, 80);
arc(220, 150, 30, 30, 1, 90);
arc(245, 210, 30, 30, 1, 120);
fill(255, 132, 0); // Oranges
ellipse(200, 260, 50, 50);
ellipse(253, 300, 50, 50);
ellipse(300, 275, 50, 50);
ellipse(200, 320, 50, 50);
strokeWeight(8); // Orange Pit/center
point(200, 250);
strokeWeight(8);
point(253, 290);
strokeWeight(8);
point(300, 265);
strokeWeight(8);
point(200, 310);
fill(253, 255, 237); // Sad attempt at fried egg
strokeWeight(1);
bezier(170, 280, -10, 288, -40, 100, 170, 280);
fill(238, 255, 0); // Egg yolk
ellipse(110, 255, 30, 30);
ellipse(90, 255, 30, 30);
stroke(255, 255, 255); // Colour grading egg yolk
strokeWeight(10);
point(90, 255);
stroke(255, 255, 255);
strokeWeight(10);
point(110, 255);




// Bucktooth Bunny
var eyeSize = 20;

var rectangleHeight = 30;

ellipse(150, 70, 60, 120);  // left ear
ellipse(240, 70, 60, 120);  // right ear

ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);
ellipse(170, 150, eyeSize, eyeSize);  // left eye
ellipse(230, 150, eyeSize, eyeSize);  // right eye

line(150, 200, 250, 200);   // mouth

noFill();
rect(185, 200, 15, rectangleHeight); // left tooth
rect(200, 200, 15, rectangleHeight); // right tooth






// Green frog - stabilizing the animation by using variables
var x = 200;
var y = 250;

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

fill(0); //Eyeballs
rect(x - 50, y - 50, 10, 10); //Left eyeball
rect(x + 45, y - 50, 10, 10); //Right eyeball

fill(0, 0, 0); //Mouth
ellipse(x, y , 110, 60);



//Animated Sun - by using a function to increment
noStroke();

// the starting size for the sun
var sunSize = 30; 

draw = function() {
    // the beautiful blue sky
    background(82, 222, 240);
    
    // The sun, a little circle on the       horizon
    fill(255, 204, 0);
    ellipse(200, 298, sunSize, sunSize);

    // The land, blocking half of the sun
    fill(76, 168, 67);
    rect(0, 300, 400, 100);
    
    sunSize = sunSize + 1;
};


// Running clouds and Increasing sun animation
noStroke();
var leftX = 130;
var rightX = 270;
var sunRadius = 100;

draw = function() {
    background(184, 236, 255);
    
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
    leftX -= 1;
    rightX += 1;
    sunRadius += 2;
}; 





// moving stars and house 
var xPos = 70;
var yPos = 100;

var xP = 300;
var yP = 100;
var xTri = 187;

draw = function() {
    background(29, 40, 115);
    fill(23, 8, 2);
    
    //Stars
    fill(255, 255, 255); //Star 1
    ellipse(xPos, yPos + 230, 60, 10);
    ellipse(xPos, yPos + 230, 10, 60);
    ellipse(xPos, yPos + 230, 10, 10);
    
    //Star 2
    fill(255, 255, 255); //Star 2
    ellipse(xP, yP, 60, 10);
    ellipse(xP, yP, 10, 60);
    ellipse(xP, yP, 10, 10);
    
    triangle(xTri, 60, 90, 150, 290, 150); //Roof
    rect(90, 150, 200, 140); //Big rect/House body
    fill(220, 224, 206);
    rect(100, 170, 40, 40); //Left Window
    rect(235, 170, 40, 40); //Right Window
    rect(160, 215, 60, 70); //Door
    
    stroke(0); // Door knob
    point(170, 250);
    
    xPos += 1;
    yPos -= 1;
    
    xP -= 1;
    yP += 2;
};

//Moving stars and Skyscrapper

var xPos = 40;
var yPos = 360;

var xP = 330;
var yP = 40;

var recX = 88;
var recY = 23;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    
    //Skyscrapper
    fill(102, 99, 99);
    rect(recX , recY, 200, 350); //Body
    //floors
    fill(245, 235, 235);
    rect(recX + 10, recY + 20, 30, 20); //floor1 W1
    rect(recX + 85, recY + 20, 30, 20); //W2
    rect(recX + 160, recY + 20, 30, 20); //W3
    
    rect(recX + 10, recY + 70, 30, 20); //floor2 W1
    rect(recX + 85, recY + 70, 30, 20); //W2
    rect(recX + 160, recY + 70, 30, 20); //W3
    
    rect(recX + 10, recY + 120, 30, 20); //floor3 W1
    rect(recX + 85, recY + 120, 30, 20); //W2
    rect(recX + 160, recY + 120, 30, 20); //W3
    
    rect(recX + 10, recY + 170, 30, 20); //floor4 W1
    rect(recX + 85, recY + 170, 30, 20); //W2
    rect(recX + 160, recY + 170, 30, 20); //W3
    
      
    rect(recX + 10, recY + 220, 30, 20); //floor5 W1
    rect(recX + 85, recY + 220, 30, 20); //W2
    rect(recX + 160, recY + 220, 30, 20); //W3
    
      
    rect(recX + 10, recY + 270, 30, 20); //floor4 W1
    rect(recX + 85, recY + 270, 30, 20); //W2
    rect(recX + 160, recY + 270, 30, 20); //W3
    
      
    rect(recX + 10, recY + 320, 30, 20); //floor4 W1
    rect(recX + 85, recY + 320, 30, 20); //W2
    rect(recX + 160, recY + 320, 30, 20); //W3
    
    strokeWeight(2);
    line(recX + 10, recY +47, 280, recY +47); //Floor1 Line
    line(recX + 10, recY +100, 280, recY +100); //Floor2 Line
    line(recX + 10, recY +153, 280, recY +153); //Floor3 Line
    line(recX + 10, recY +206, 280, recY +206); //Floor4 Line
    line(recX + 10, recY +259, 280, recY +259); //Floor5 Line
    line(recX + 10, recY +312, 280, recY +312); //Floor6 Line
    
    //Star1
    fill(255, 255, 255);
    ellipse(xPos, yPos, 40, 10);
    ellipse(xPos, yPos, 10, 40);
    ellipse(xPos, yPos, 10, 10);
    //Star2
    ellipse(xP, yP, 40, 10);
    ellipse(xP, yP, 10, 40);
    ellipse(xP, yP, 10, 10);
    
    
    xPos += 1;
    yPos -= 1;

    xP -= 1 ;
     yP += 1 ;
    recY += 1 ;
    
};







