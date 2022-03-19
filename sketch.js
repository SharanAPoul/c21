const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btnUp;
var btnRight;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  btnUp = createImg('up.png');
  btnUp.position(220,30);
  btnUp.size(50,50)

  btnRight = createImg('right.png');
  btnRight.position(280,30);
  btnRight.size(50,50)



  ball =Bodies.circle(300,290,50,{restitution:1});
  
  World.add(world,ball); 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{

  background(51);
  ellipse(ball.position.x,ball.position.y,50);
  btnUp.mouseClicked(applyVerticleForce)
  btnRight.mouseClicked(applyhorizontalForce)
  ground.show();
  top_wall.show();
  left.show();
  right.show();


  Engine.update(engine);

}
function applyVerticleForce(){
  Matter.Body.applyForce(ball,{x:0,y:0} , {x:0,y:-1})
}

function applyhorizontalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0} , {x:0.1,y:0})
}
