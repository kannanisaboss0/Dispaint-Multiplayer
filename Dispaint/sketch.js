var gameState=0;
var form;
var player;
var canvas;
var canvas2;
var cx=1800;
var cy=900;
var drawing=[];

function setup(){
canvas=createCanvas(1800,900);
 form=new Form(); 
 
   
}
function mouseDragged(){
  var point={
    x:mouseX,
    y:mouseY
  }
  drawing.push(point);
}
function draw(){
  background("white");
 form.display();
 if(gameState===3){

   beginShape(); 
   stroke(this.apple,this.grass,this.sea);
   strokeWeight(4);
   for(var i=0;i<drawing.length;i++){
   vertex(drawing[i].x,drawing[i].y);
   endShape();}
 }

}