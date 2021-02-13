var r1,r2,r3,r4

function setup() {
  createCanvas(800,400);
 r1 = createSprite(400, 200, 50, 50);
 r1.shapeColor="blue";
 r2 = createSprite(200,200,70,40);
 r2.shapeColor="green";
 r3 = createSprite(100,100,40,70);
 r3.velocityX = 5;
 r4 = createSprite(700,100,50,60);
 r4.velocityX = -5;
}

function draw() {
  background("red");  
  r2.x=mouseX;
  r2.y=mouseY;
  if (isTouching (r1,r2)){
    r1.shapeColor = "black";
    r2.shapeColor = "white";
  }
  else {
    r1.shapeColor = "blue";
    r2.shapeColor = "green";
  }
  bounceOff (r3,r4);
  drawSprites();
}

function isTouching (ob1, ob2){
  if(ob1.x - ob2.x < (ob1.width + ob2.width)/2 && 
  ob2.x - ob1.x < (ob1.width + ob2.width)/2 &&
  ob1.y - ob2.y < (ob1.height + ob2.height)/2 &&
  ob2.y - ob1.y < (ob1.height + ob2.height)/2 ){
    return true;
  }
  else return false;
}

function bounceOff (ob1,ob2){
  if(ob1.x - ob2.x <(ob1.width + ob2.width)/2 &&
  ob2.x - ob1.x < (ob1.width + ob2.width)/2 ){
    ob1.velocityX = ob1.velocityX * (-1);
    ob2.velocityX = ob2.velocityX * (-1);
  }
  if(ob1.y - ob2.y < (ob1.height + ob2.height)/2 &&
  ob2.y - ob1.y < (ob1.height + ob2.height)/2 ){
    ob1.velocityY = ob1.velocityY * (-1);
    ob2.velocityY = ob2.velocityY * (-1);
  }
}