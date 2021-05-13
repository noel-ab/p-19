var path,boy,mk,s,c,t;
var pathImg,boyImg,mkImg,sImg,cImg,tImg;
var medikit = 0;
var treasurecollection = 0;
var mkG,sG,cG,tGroup;
var Truck,TruckImg;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  mkImg = loadImage("medi-kit.jpg");
  sImg = loadImage("snake.jpg");
  cImg = loadImage("coin.png");
  tImg = loadImage("tree.jpg");
  TruckImg = loadImage("truck.jpg");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 6;
path.scale = 1.5;

//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;  
  
mkG=new Group();
sG=new Group();
cG=new Group();
TruckG=new Group();  
tGroup=new Group();

}

function draw() {
  
  if(gameState===PLAY){
  background(0);   
    
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  }
    createMk();
    createS();
    createC();
    createTruck();
    createT();

    if (mkG.isTouching(boy)) {
      mkG.destroyEach();
      medikit=medikit+1;
    }
    else if (sG.isTouching(boy)) {
      sG.destroyEach();
      medikit=medikit-1;
      
    }else if(cG.isTouching(boy)) {
      cG.destroyEach();
      treasurecollection=treasurecollection+50;
      
    }else{
      if(tGroup.isTouching(boy)) {
      gameState=END;
      }else{
         if(TruckG.isTouching(boy)) {
      gameState=END;
    }
      }
    if(gameState === END){  
        path.velocityY = 0;
         
      medikit=0;
      treasurecollection=0;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        mkG.destroyEach();
        sG.destroyEach();
        cG.destroyEach();
        TruckG.destroyEach();
        tGroup.destroyEach();
        
        mkG.setVelocityYEach(0);
        sG.setVelocityYEach(0);
        cG.setVelocityYEach(0);
        TruckG.setVelocityYEach(0);
        tGroup.setVelocityYEach(0);
    }
drawSprites();
  textSize(20);
  fill(255);
  text(" Medi-kit: "+ medikit,50,30);
    
   textSize(20);
  fill(255);
  text("Coin: "+ treasurecollection,180,30);    
      
  
  
}

function createMk() {
  if (World.frameCount % 200 == 0) {
  var mk = createSprite(Math.round(random(50, 350),40, 10, 10));
  mk.addImage(mkImg);
  mk.scale=0.2;
  mk.velocityY = 6;
  mk.lifetime = 150;
  mkG.add(mk);
  }
}

function createS() {
  if (World.frameCount % 320 == 0) {
  var s = createSprite(Math.round(random(50, 350),40, 10, 10));
  s.addImage(sImg);
  s.scale=0.05;
  s.velocityY = 10;
  s.lifetime = 150;
  sG.add(s);
}
}

function createC() {
  if (World.frameCount % 410 == 0) {
  var c = createSprite(Math.round(random(50, 350),40, 10, 10));
  c.addImage(cImg);
  c.scale=0.4;
  c.velocityY = 6;
  c.lifetime = 150;
  cG.add(c);
  }
}

function createTruck() {
  if (World.frameCount % 410 == 0) {
  var Truck = createSprite(Math.round(random(50, 350),40, 10, 10));
  Truck.addImage(TruckImg);
  Truck.scale=0.9;
  Truck.velocityY = 30;
  Truck.lifetime = 150;
  TruckG.add(Truck);
  }
}  
  
function createT(){
  if (World.frameCount % 530 == 0) {
  var t = createSprite(Math.round(random(50, 50),40, 50, 50));
  t.addImage(tImg);
  t.scale=1.2;
  t.velocityY = 6;
  t.lifetime = 150;
  tGroup.add(t);
  }

    }
    
}