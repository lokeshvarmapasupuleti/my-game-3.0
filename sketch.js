var zombieWalk
var zombieIdle
var bg
function preload(){
bg = loadImage("bg.jpg");
zombieIdle=loadAnimation("idle1.png")
zombieWalk=loadAnimation("walk1.png","walk2.png","walk3.png")

playerIdle=loadAnimation("Pidle.png")
playerRun=loadAnimation("Prun 1.png","Prun2.png","Prun3.png")
}
function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  player=createSprite(50,displayHeight-200);
  player.addAnimation("idle",playerIdle);
  player.addAnimation("walk",playerRun);
  player.scale=0.5

 zombie=createSprite(displayWidth-150,displayHeight-200);
 zombie.addAnimation("idle",zombieIdle);
 zombie.addAnimation("walk",zombieWalk);
 zombie.scale=0.5;
}

function draw() {
  background(bg);  
  if(keyWentDown("RIGHT_ARROW")){
    player.velocityX=2
    player.changeAnimation("walk")
  }
  if(keyWentUp("RIGHT_ARROW")){
    player.velocityX=0
    player.changeAnimation("idle")
    }
    if(keyWentDown("LEFT_ARROW")){
      player.velocityX=-2
      player.changeAnimation("walk")
      }
      if(keyWentUp("LEFT_ARROW")){
        player.velocityX=0
        player.changeAnimation("idle")
        }
  drawSprites();
}