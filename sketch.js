const Engine=Matter.Engine //we are using namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;


function setup() {
  createCanvas(400,400);
  //creating myengine
  engine=Engine.create();

  //creating connection between my engine and my world
  world=engine.world;
 var ground_options={
    isStatic: 'false'
  }
  ground=Bodies.rectangle(200,380,200,20,ground_options);

 World.add(world,ground);
 var ball_options={
  restitution:1.0
}
ball=Bodies.circle(200,100,20,ball_options);
 World.add(world,ball);
 console.log(ground);
 console.log(ground.position.x);
 console.log(ground.position.y);
}

function draw() {
  background(0); 
  Engine.update( engine);
  //this is to make the rectangle in centre
 rectMode(CENTER);
 // rect(200,200,50,50) ; 
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}