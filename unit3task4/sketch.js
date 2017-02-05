/**
 * draw tool. shows how to draw with dynamic elements. 
 * 
 * MOUSE
 * drag                : draw with text
 * 
 * KEYS
 * del, backspace      : clear screen
 * arrow up            : angle distortion +
 * arrow down          : angle distortion -
 * s                   : save png

 */

var x = 0, y = 0;
var stepSize = 5.0;
var letters = "你看不懂.肯定看不懂.絕對看不懂."
var fontSizeMin = 3;
var angleDistortion = 0.0;
var counter = 0;
var c = (255, 204, 0);


function setup() {
  // use full screen size 
  createCanvas(780, 780);
  background(140);
  smooth();
  cursor(TEXT);
 
  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill('white');

}

function draw() {
  if (mouseIsPressed) {
    var d = dist(x,y, mouseX,mouseY);
    textFont('Helvetica');
    textSize(fontSizeMin+d/5)
    var newLetter = letters.charAt(counter);;
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(PI/1.0);
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyTyped() {
  if (key == 's' || key == 'S') save("P_2_3_3_01.png");
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down 
  if (keyCode == DELETE || keyCode == BACKSPACE) background(140);
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1; 
}