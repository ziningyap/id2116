let bulbOn;
let bulbOff;

let brightness = 0; //0:off 1:on

function setup() 
{
  createCanvas(400, 400);
  bulbOn = loadImage ("images/bulb_on.png")
  bulbOff = loadImage ("images/bulb_off.png")
}


function draw() 

{
  background(200);
  imageMode (CENTER);
  if (brightness == 1) {
  image(bulbOn,width/2,height/2,300,300);
}else
// else will be equals to the inverse command of the "if"
{
  image(bulbOff,width/2,height/2,200,200);
}
}


function on(){
  brightness = 1;
  print("the bulb is on!")
}


function off(){
  brightness = 0;
  print("the bulb is off!");
}


function mousePressed(){
  on()
  print("mouse is presso!");
}


function mouseReleased(){
  off()
  print("mouse no presso!");
}


