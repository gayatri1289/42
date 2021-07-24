const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
	
var particles = [];
var thunder, thunder1,thunder2,thunder3,thunder4,thunderCreatedFrame;
var batAnimation,bat;
var man,manImage;
var rand;
var score = 0;



function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

    batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",
    "bat4.png","bat5.png","bat6.png",
    "bat7.png","bat8.png","bat9.png",
    "bat10.png","bat11.png","bat12.png","batman.png","batman.png","batman.png");

    manImage = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png",
    "walking_7.png","walking_8.png");
   
}

function setup(){
    createCanvas(800,700);

    engine = Engine.create();
    world = engine.world;

    man = createSprite(400,565,20,20);
    man.addAnimation("man",manImage);
    man.scale = 0.4;

    //umbrella = new Umbrella(200,500);

   
    
}

function draw(){
    background(0); 
//display rain drops

	
textSize(20);
text("Score : "+score,20,30);
Engine.update(engine);


if(frameCount%1 === 0){
particles.push(new Particle(random(2,800), 10,10));
score++;
}

for (var j = 0; j < particles.length; j++) {

particles[j].display();
}


    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;

       
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    //umbrella.display();

    drawSprites();                                      
}   