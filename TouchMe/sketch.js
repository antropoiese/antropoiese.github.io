let message,
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 42;


function preload() {
    font = loadFont('assets/SourceSansPro-Bold.otf');
}

function setup() {
  // put setup code here
 createCanvas(windowWidth, windowHeight);
 textSize(fontsize);
 textAlign(CENTER);
 textStyle(BOLD);

 message = "Don't touch me."
}

function draw() {
  background(255,181,42)
  // put drawing code here
  fill(255,0,0);
  //noStroke();
  smooth();
  strokeWeight(4.0);
  //strokeCap(ROUND);
  //ellipse(windowWidth/2, windowHeight/2, 55, 55);

  x = windowWidth/2;
  y = windowHeight/2;

  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize, textStyle(BOLD));

   // check if the mouse is inside the bounding box and tickle if so
   if (
     mouseX >= bounds.x &&
     mouseX <= bounds.x + bounds.w &&
     mouseY >= bounds.y &&
     mouseY <= bounds.y + bounds.h
   ) {
     //background(255);
     //message = "I'm art!";
     background(255,181,42)
     fill(0);
     text("I'm art!", x, y);
     cursor('pointer');
   }
   else {
     //background(255);
     //message = "Don't touch me.";
     //text(message, x, y);
     cursor(ARROW);

   }
}
