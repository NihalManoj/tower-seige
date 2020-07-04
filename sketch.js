const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(530,235,30,40);
  box2 = new Box(560,235,30,40);
  box3 = new Box(590,235,30,40);
  box4 = new Box(620,235,30,40);
  box5 = new Box(650,235,30,40);

  box6 = new Box(560,195,30,40);
  box7 = new Box(590,195,30,40);
  box8 = new Box(620,195,30,40);

  box9 = new Box(590,155,30,40);
  
  ground = new Ground(200,285,width,50);
}

function draw() {
  background(0,0,0);  
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ground.display();
}