const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var redzone1,redzone2,redzone3,ball,dustbin,dustbin2,dustbin3,ground;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   ball = new Ball (100,361,20);
   ground = new Ground(600,380,1200,20);
   //dustbin = new Dustbin(800,320,20,100);
  // dustbin2 = new Dustbin(1000,320,20,100);
   dustbin3 = new Dustbin(900,290,75,80);

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);

  background(0);

  //dustbin.display();
  //dustbin2.display();
  dustbin3.display();
  ball.display();
  ground.display();
 
}

function keyPressed(){

if (keyCode=== UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:76,y:-75});

}

}