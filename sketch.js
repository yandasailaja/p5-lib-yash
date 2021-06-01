var fixedRect,movingRect




function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 30);
  movingRect = createSprite(100, 200, 30, 80);
  fixedRect.shapeColor ="green"
  movingRect.shapeColor ="green"

  fixedRect.debug = true
  movingRect.debug = true

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  //console.log(movingRect.x-fixedRect.x)

if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 ){
  fixedRect.shapeColor ="red"
  movingRect.shapeColor ="red"

}
else{
  fixedRect.shapeColor ="green"
  movingRect.shapeColor ="green"

}
  drawSprites();
}