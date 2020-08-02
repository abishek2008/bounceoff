var object1,object,rand1,rand2;



function setup() {
  createCanvas(800,400);
 
  object1=createSprite(300,350,70,50);
  object1.shapeColor="yellow";
  object1.debug=true;
  object1.velocityY=-3;
  object=createSprite(300,100,80,50);
  object.shapeColor="blue";
  object.debug=true;
  object.velocityY=3;

 
}

function draw() {
  background("black");


bounceoff();



  drawSprites();

 
}

function bounceoff(ob1,ob2){
  if(ob1.x-ob2.x<ob2.width/2+ob1.width/2 && ob2.x-ob1.x <ob2.width/2+ob1.width/2) {
    ob2.velocityX=ob2.velocityX*-1;
    ob1.velocityX=ob1.velocityX*-1;
  }
  if(ob1.y-ob2.y<ob2.height/2+ob1.height/2 && ob2.y-ob1.y <ob2.height/2+ob1.height/2) {
    ob2.velocityY=ob2.velocityY*-1;
    ob1.velocityY=ob1.velocityY*-1;
  }
}


