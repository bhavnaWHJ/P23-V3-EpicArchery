const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  playerbase = new PlayerBase(windowWidth-500,windowHeight-300,200,200);
  computerbase = new ComputerBase(400,windowHeight-300,200,200);
  player = new Player(windowWidth-500,windowHeight-480,50,200);
  computerPlayer = new Player(400,windowHeight-480,50,200)
	
   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerbase.display();
   computerbase.display();
   player.display();
   computerPlayer.display();


   //display Player and computerplayer


}
