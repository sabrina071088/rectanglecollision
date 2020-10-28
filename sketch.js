var fixedrectangle,movingrectangle;

function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400, 200, 50, 50);
  fixedrectangle.shapeColor="yellow"
  fixedrectangle.debug=true
  movingrectangle=createSprite(200,350,50,50)
  movingrectangle.shapeColor="yellow"
  movingrectangle.debug=true
}

function draw() {
  background("black");  
  movingrectangle.x=World.mouseX
  movingrectangle.y=World.mouseY
  console.log(movingrectangle.x-fixedrectangle.x)
  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
    &&fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 ){
    fixedrectangle.shapeColor="red" 
    movingrectangle.shapeColor="red"
  }
else{
  fixedrectangle.shapeColor="green"
  movingrectangle.shapeColor="green"
}
  drawSprites();
}