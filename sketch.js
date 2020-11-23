
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,width,10)
	paper = new Paper(55,680,70)
	//dustbin = new Dustbin(400,680,130,20)
	dustbin2 = new Dustbin(325,640,20,80)
	dustbin3 = new Dustbin(475,640,20,80)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  //dustbin.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:130,y:-130})
	}
}

