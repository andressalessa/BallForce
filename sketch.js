const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var leftWall, rightWall, bottomWall, topWall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  // criando um objeto da classe Wall
  leftWall = new Wall(10, 200, 20, 400);
  rightWall = new Wall(390, 200, 20, 400);
  topWall = new Wall(200, 10, 400, 20);
  bottomWall = new Wall(200, 390, 400, 20);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background('black');
  leftWall.show();
  rightWall.show();
  topWall.show();
  bottomWall.show();

  Engine.update(engine);
}
