const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var spaceShipImg, spaceShip;
var backgroundImg, earth;
var laserImg, laser, laserGroup;
var asteroid1, asteroid2, asteroid3 , asteroid4, asteroid5, asteroid6, asteroid7, asteroid8,asteroid9,asteroid10;
var asteroid1Group, asteroid2Group, asteroid3Group, asteroid4Group, asteroid5Group, asteroid6Group, asteroid7Group, asteroid8Group, asteroid9Group, asteroid10Group;
var obstacle, asteroid1Img;
var score = 0;
var PLAY = 1;
var END = 0 ; 
var gameState = PLAY;

function preload() {
  spaceShipImg = loadImage("images/images.png");
  backgroundImg = loadImage("images/earth.png");
  laserImg = loadImage("images/laser.png");
  asteroid1Img = loadImage("images/asteroid.png");
}
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  earth = createSprite(600, 535, 50, 50);
  earth.addImage(backgroundImg);
  earth.scale = 0.8
  
  spaceShip = createSprite(200, 400, 50, 50);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;

  laserGroup = createGroup();
  asteroid1Group = createGroup();
  asteroid2Group = createGroup();
  asteroid3Group = createGroup();
  asteroid4Group = createGroup();
  asteroid5Group = createGroup();
  asteroid6Group = createGroup();
  asteroid7Group = createGroup();
  asteroid8Group = createGroup();
  asteroid9Group = createGroup();
  asteroid10Group = createGroup();
}

function draw() {
  background(0,0,0);   
  if (gameState === 1){
    if (keyWentDown("space")) {
      createLaser();
    }
    if (keyDown("right")) {
      spaceShip.x = spaceShip.x + 5 ; 
    }

    if (keyDown("left")) {
      spaceShip.x = spaceShip.x - 5 ; 
    }
    if (laserGroup.isTouching(asteroid1Group)){
      laser.destroy();
      asteroid1Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid2Group)){
      laser.destroy();
      asteroid2Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid3Group)){
      laser.destroy();
      asteroid3Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid4Group)){
      laser.destroy();
      asteroid4Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid5Group)){
      laser.destroy();
      asteroid5Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid6Group)){
      laser.destroy();
      asteroid6Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid7Group)){
      laser.destroy();
      asteroid7Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid8Group)){
      laser.destroy();
      asteroid8Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid9Group)){
      laser.destroy();
      asteroid9Group.destroyEach();
      score = score+10;
    }
    if (laserGroup.isTouching(asteroid10Group)){
      laser.destroy();
      asteroid10Group.destroyEach();
      score = score+10;
    }

    var select_asteroid = Math.round(random(1,7));
    
    if (frameCount % 100 === 0) {
      if (select_asteroid === 1) {
        createAsteroid1();
      } else if (select_asteroid === 2) {
        createAsteroid2();
      } else if (select_asteroid === 3) {
        createAsteroid3();
      } else if (select_asteroid === 4) {
        createAsteroid4();
      } else if (select_asteroid === 5) {
        createAsteroid5();
      } else if (select_asteroid === 6) {
        createAsteroid6();
      } else if (select_asteroid === 7) {
        createAsteroid7();
      } else if (select_asteroid === 8) {
        createAsteroid8();
      } else if (select_asteroid === 9) {
        createAsteroid9();
      } else {
        createAsteroid10();
      }
    }
    if(score % 500 === 0){
      gameState = END;
    }
}

  if (gameState === 0){
    console.log(gameState);
    fill("white");
    textSize(60);
    text("You Saved The Earth",140,250);
  }
  drawSprites();
}

function createLaser() {
  laser= createSprite(200, 328 , 60, 10);
  laser.addImage(laserImg);
  laser.x = 360;
  laser.x=spaceShip.x;
  laser.velocityY = -4;
  laser.lifetime = 100;
  laser.scale = 0.1  ;
  laserGroup.add(laser);
  return laser;
}

function createAsteroid1() {
    asteroid1 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid1.addImage(asteroid1Img);
    asteroid1.velocityY = 1;
    asteroid1.lifetime = 600;
    asteroid1.scale = 0.05
    asteroid1Group.add(asteroid1);
    asteroid1.depth = spaceShip.depth-1;
    return asteroid1;
  }

function createAsteroid2() {
    asteroid2 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid2.addImage(asteroid1Img);
    asteroid2.velocityY = 1;
    asteroid2.lifetime = 600;
    asteroid2.scale = 0.05
    asteroid2Group.add(asteroid2);
    asteroid2.depth = spaceShip.depth+1;
    return asteroid2;
  }

function createAsteroid3() {
    asteroid3 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid3.addImage(asteroid1Img);
    asteroid3.velocityY = 1;
    asteroid3.lifetime = 600;
    asteroid3.scale = 0.05
    asteroid3Group.add(asteroid3);
    asteroid3.depth = spaceShip.depth-1;
    return asteroid3;
  }

  function createAsteroid4() {
    asteroid4 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid4.addImage(asteroid1Img);
    asteroid4.velocityY = 1;
    asteroid4.lifetime = 600;
    asteroid4.scale = 0.05
    asteroid4Group.add(asteroid4);
    asteroid4.depth = spaceShip.depth+1;
    return asteroid4;
  }

  function createAsteroid5() {
    asteroid5 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid5.addImage(asteroid1Img);
    asteroid5.velocityY = 1;
    asteroid5.lifetime = 600;
    asteroid5.scale = 0.05
    asteroid5Group.add(asteroid5);
    asteroid5.depth = spaceShip.depth-1;
    return asteroid5;
  }
  function createAsteroid6() {
    asteroid6 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid6.addImage(asteroid1Img);
    asteroid6.velocityY = 1;
    asteroid6.lifetime = 600;
    asteroid6.scale = 0.05
    asteroid6Group.add(asteroid6);
    asteroid6.depth = spaceShip.depth-1;
    return asteroid6;
  }

  function createAsteroid7() {
    asteroid7 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid7.addImage(asteroid1Img);
    asteroid7.velocityY = 1;
    asteroid7.lifetime = 600;
    asteroid7.scale = 0.05
    asteroid7Group.add(asteroid7);
    asteroid7.depth = spaceShip.depth-1;
    return asteroid7;
  }
  function createAsteroid8() {
    asteroid8 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid8.addImage(asteroid1Img);
    asteroid8.velocityY = 1;
    asteroid8.lifetime = 600;
    asteroid8.scale = 0.05
    asteroid8Group.add(asteroid8);
    asteroid8.depth = spaceShip.depth-1;
    return asteroid8;
  }

function createAsteroid9() {
    asteroid9 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid9.addImage(asteroid1Img);
    asteroid9.velocityY = 1;
    asteroid9.lifetime = 600;
    asteroid9.scale = 0.05
    asteroid9Group.add(asteroid9);
    asteroid9.depth = spaceShip.depth-1;
    return asteroid9;
  }

  function createAsteroid10() {
    asteroid10 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid10.addImage(asteroid1Img);
    asteroid10.velocityY = 1;
    asteroid10.lifetime = 600;
    asteroid10.scale = 0.05
    asteroid10Group.add(asteroid10);
    asteroid10.depth = spaceShip.depth+1;
    return asteroid10;
  }