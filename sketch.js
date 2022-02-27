
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: "False",
		restitution: 0.3,
		friction: 0,
		density: 0.2,
	}
	
	ball = Bodies.circle(100,10,20,ball_options);
  	World.add(world,ball);

	ellipseMode(RADIUS);  
  
}



function draw() {
  
  background(51);	

  Engine.run(engine);
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 
}



