
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3
var ground
var paper

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground (600,380,1250,20)
    wall1 = new Wall(1100,305,20,130)
    wall2 = new Wall(920,305,20,130)
    wall3 = new Wall(1010,360,200,20)
    paper = new Paper(200,200,40)

	Engine.run(engine);


  
  
}


function draw() {
  background(0);
  
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
if(keyDown ("up")){
Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300}
 
);
}
}
