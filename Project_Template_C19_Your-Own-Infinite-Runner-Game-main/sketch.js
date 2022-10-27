
//vars
var score = 0;
var bgImg; 
var player;
var bg;
var carImg;
var car;
var gasImg;
var gas;
var gameState = "play"

function spawnGas () {
    
 var randomNum = Math.round(random(150,400));

 
    if (frameCount % randomNum == 0) {

        var randomHeight = Math.round(random(320,400))
        gas = createSprite(710,315)
        gas.addImage(gasImg);
        gas.scale = 0.1
        gas.velocityX = -2
    }
}

function preload(){
    bgImg = loadImage("Image_background.jpg");
    carImg = loadImage("Car.png");
    gasImg  = loadImage("Gas.png");
}

function setup() {
    createCanvas(700,400);
    
    //background sprite
    bg = createSprite(350,30);
    bg.addImage(bgImg);
    bg.velocityX = -3;
    bg.scale = 2.3;

    //car
    car = createSprite(60,340)
    car.addImage(carImg);
    car.scale = 0.17;


    //gas (prize)
    
   
}

function draw() {
    background("red")

    //background repos
    if (bg.x < 300) {
        bg.x = 350;
    }

    //function
    spawnGas();



    





    drawSprites();
}






