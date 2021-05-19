var dogImage, eating;
var dog = createSprite(400,400);
var foodStock;

function preload()
{
	dogImage = loadImage('images/dogImg.png');
  eating = loadImage('images/dogImg1.png')
}

function setup() {
  dog.addImage(dogImage);
  createCanvas(500, 500);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  

  textSize(20);
  text("Food Remaining:"+foodStock, 300, 300);

  drawSprites();
  //add styles here

}

function feed(){
  if (keyWentDown(UP_Arrow)){
    dog.addImage(eating);
    foodStock = foodStock-1;
  }
}