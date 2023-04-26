function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}
function preload(){
  bg=loadImage("snow3.jpg")}
function draw() {
  background(bg);  
  drawSprites();

} 