const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground ;
var block1 , block2 , block3 , block4 , block5 ,block6 , block7 , block8 , block9 ,block10 , block11 , block12 , block13 , block14 , block15 , block16 
var rope ;
var score = 0;
var wall ;
var bg = "bg1.png";
var backgroundImg;

function preload()
{
	polygonImg=loadImage("polygon.png");
	getBackgroundImg();
	
}
	

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,680,1500,15);

	wall = new Ground(1500,350,700,10);

	block1 = new Box(970,640,55,70);
	block2 = new Box(1025,640,55,70);
	block3 = new Box(1080,640,55,70);
	block4 = new Box(1135,640,55,70);
	block5 = new Box(1190,640,55,70);
	block6 = new Box(1245,640,55,70);
	block7 = new Box(1300,640,55,70);

	block8 = new Box(1025,570,55,70);
	block9 = new Box(1080,570,55,70);
	block10 = new Box(1135,570,55,70);
	block11= new Box(1190,570 ,55,70);
	block12 = new Box(1245,570 ,55,70);

	block13 = new Box(1080,500,55,70);	
	block14 = new Box(1135,500,55,70);
	block15 = new Box(1190,500,55,70);

	block16 = new Box(1135,430,55,70);	

	polygon=Bodies.circle(20,500,70);
	World.add(world,polygon);

	rope = new Rope(polygon,{x:200,y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
        background(backgroundImg);

	fill(255);
	textSize(25);
  	text ("Score : " +score,700,40 );
  
	ground.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();

	imageMode(CENTER);
	image(polygonImg,polygon.position.x,polygon.position.y,100,100);

	rope.display();

	block1.score();
	block2.score();
	block3.score();
	block4.score();
	block5.score();
	block6.score();
	block7.score();
	block8.score();
	block9.score();
	block10.score();
	block11.score();
	block12.score();
	block13.score();
	block14.score();
	block15.score();
	block16.score();

  	drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope.fly();
}

function keyPressed(){
	if(keyCode===32){
		rope.attach(polygon);
	}
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
	var hour = datetime.slice(11,13); 	  
    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
	}
	
	backgroundImg = loadImage(bg);
	
    //console.log(backgroundImg);
}