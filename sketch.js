const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var MyEng;
var MyWorld, Ground;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  MyEng = Engine.create();
  MyWorld = MyEng.world;
  var options = {
    isStatic:true
  }

  Ground = Bodies.rectangle(200, 390, 400, 10, options);
  World.add(MyWorld, Ground);

  var options = {
    restitution:1
  }
  ball = Bodies.rectangle(200, 200, 50, 50, options);
  World.add(MyWorld, ball);

}

function draw() {
  background("green"); 
  
  Engine.update(MyEng);
  rectMode(CENTER);
  rect(Ground.position.x, Ground.position.y, 400, 10);
  
  rectMode(CENTER);
  rect(ball.position.x, ball.position.y, 50, 50);
  
  //drawSprites();
}