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






// Green frog
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


