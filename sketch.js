
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var PLAY=1
var ENd=0;
var gameState=1;
var Survival;

function preload(){
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.11;

  ground = createSprite(400,350,1200,10);
  
  score=0;
  Survival=0;
  obstacleGroup=new Group();
  FoodGroup= new Group();
}

function draw() {
background("white");
  
 if(gameState===1){
   monkey.collide(ground);

  objects();
  food();
  Survival=Math.round(frameCount/frameRate())
   
  ground.velocityX=-10;
  if(ground.x<0){
  ground.x=ground.width/2;
     
   }
   
  if(keyDown("space")&& monkey.y>=264){
  monkey.velocityY=-17;
     
   }
  monkey.velocityY=monkey.velocityY+0.9;
  console.log(monkey.y);
   
  if(monkey.isTouching(FoodGroup)){
  score=score+2;
  FoodGroup.destroyEach();
    
   }
   else if(monkey.isTouching(obstacleGroup)){
   stroke("red");
   strokeWeight(2)
   fill("yellow")
   textSize(50)
   text("You Lose",200,200);
   gameState=0;
   
   }
 }
  
  if(gameState===0){
   monkey.velocity=0;
   FoodGroup.destroyEach();
   obstacleGroup.destroyEach();
   ground.velocityX = 0;
  }

  drawSprites();
  stroke("red");
  fill("yellow")
  textSize(20);
  strokeWeight(2);
  text(score,40,40);
  text("Survival Time "+Survival,340,40);
 
}

function food(){
  if(frameCount%80===0){
banana=createSprite(700,Math.round(random(100,240)),20,20);
banana.addImage(bananaImage);
banana.velocityX=-10;
banana.scale=0.1;
 FoodGroup.add(banana);
  }
}
function objects(){
  if(frameCount%160===0){
    var obstacle=createSprite(700,312,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.17;
    obstacle.velocityX=-10;
    obstacleGroup.add(obstacle);
  }
  
  
  
}

