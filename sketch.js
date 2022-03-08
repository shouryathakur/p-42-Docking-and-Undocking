var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;



function preload(){
bg= loadImage("spacebg.jpg")
issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");

}


function setup() {
  createCanvas(1000,700);
  spacecraft= createSprite(285,350,20,20);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;

  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issimg);
  iss.scale= 0.8

}



function draw() {
  background(bg);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  }

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -3;
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.y = spacecraft.y +3;
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x = spacecraft.x -3;
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x = spacecraft.x +3;
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}



