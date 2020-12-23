var bullet,wall,thickness,speed,weight;


function setup() {
  createCanvas(800,400);

   
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random()  
 



   bullet =createSprite(10, 200, 30, 10);
   bullet.velocityX=speed;
   wall=createSprite(750,200,40,100);
  bullet.shapeColor="red"
  
}

function draw() {
  background(0);  

if (wall.x-bullet.x<bullet.width/2+wall.width/2){
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation<10){
  bullet.shapeColor="red"
}
if (deformation>10 && deformation>5){
  bullet.shapeColor="orange"
}
if (deformation>3){

  bullet.shapeColor="green"
}

}
drawSprites();
}