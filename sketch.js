var monkey;
var monkeyImage;
var ground;
var banana,bananaImage;
var stone,stoneImage;
var score=0;
var bananaGroup,stoneGroup;

function preload(){
   monkeyImage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}
function setup(){
  createCanvas(600,400);
  monkey=createSprite(70,120,10,40);
  monkey.addAnimation("monkey",monkeyImage);
  monkey.scale=0.1;
  
  ground=createSprite(300,390 ,900,20);
  ground.shapeColor="green";
  ground.velocityX=-3;
  
 bananaGroup=new Group();
  stoneGroup=new Group();
  
}
function draw(){
  background("lightgreen");   
 
   fill("blue");
  textSize(20);
  text("Survival Time "+score,430,50);
  score=Math.round(frameCount/getFrameRate());
  
  //reseting the ground 
  if(ground.x<150){
     ground.x=300;
     }
  if(keyDown("space")) {
  monkey.velocityY= -12;
    
  }
monkey.velocityY=monkey.velocityY+0.3;
  //logic will be in function draw
  monkey.collide(ground);
  
  if(monkey.isTouching(stoneGroup)){
     monkey.velocityY=0;
    stoneGroup.setVelocityXEach(0);
     }
  stones();
  bananas();
  
  drawSprites();
}
function stones(){
  if(frameCount%300===0){
     stone=createSprite(600,370,10,10);
    stone.velocityX=-3;
    stone.addImage("s",stoneImage);
    stone.scale=0.1;
    stone.lifetime=200;
    stoneGroup.add(stone);
     }
  
}
function bananas(){
  if(frameCount%100===0){
     banana=createSprite(600,150,10,10);
    banana.y=Math.round(random(200,330));  
    banana.velocityX=-3;
    banana.addImage("b",bananaImage);
    banana.scale=0.1;
    banana.lifetime=200;
    bananaGroup.add(banana);
     }
  
}