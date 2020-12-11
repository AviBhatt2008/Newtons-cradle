// define constants and variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof;


function preload()
{
	
}

function setup() {
	// create canvas
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600, 150);

	bob1 = new Bob(400, 600);
	bob2 = new Bob(500, 600);
	bob3 = new Bob(600, 600);
	bob4 = new Bob(700, 600);
	bob5 = new Bob(800, 600);

	rope1 = new Rope(bob1.body, roof.body, -200, 0);
	rope2 = new Rope(bob2.body, roof.body, -100, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 100, 0);
	rope5 = new Rope(bob5.body, roof.body, 200, 0);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  // grey background
  background(55);
  
  // display bodies
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobForce();

  drawSprites();
}

function bobForce()
{
	// if up arrow is pressed apply force
	if(keyDown(UP_ARROW))
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -100, y: -100})
	}
}
