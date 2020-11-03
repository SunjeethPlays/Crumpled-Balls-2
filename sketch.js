const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var trashWall1, trashWall2, trashWall3;
var bin;

function preload() {

bin = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(2000, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground (1000,680,2000,20);

	paper = new Paper (200,500,70,70);

	trashWall1 = new TrashCanWall (1500,660,200,20);
	trashWall2 = new TrashCanWall (1400,600,20,100);
  trashWall3 = new TrashCanWall (1600,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-30});

  }

  Engine.update(engine);

  ground.display();

  paper.display();

  trashWall1.display();
  trashWall2.display();
  trashWall3.display();
  
  drawSprites();

  textSize(50);
  fill("black");
  text("Press up arrow to lift the paper",10,50);
  text("Press down arrow to drop the paper",10,100);

  imageMode(CENTER);
  image(bin,1500,605,250,130);
 
}