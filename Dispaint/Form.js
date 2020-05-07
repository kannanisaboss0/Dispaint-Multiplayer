class Form{
    constructor(){
        this.titleImg=loadImage("Untitled.png");
        this.play=createButton('Play');
        this.canvasX=createInput("Width of your canvas");
        this.canvasY=createInput("Height of your canvas");
        this.set=createButton('Set Dimensions');
        this.messageX=createElement('h2');
        this.messageY=createElement('h2');
        this.wait=createElement('h2');
        this.note=createElement('h2');
         this.r=createInput("red");
        this.b=createInput("blue");
         this.g=createInput("green");
         this.drawing=[];
         this.point={
            x:mouseX,
            y:mouseY
          }


        
    }


    display(){
        image(this.titleImg,900,200,1000,600);
        imageMode(CENTER);
        this.play.position(900,700);
this.play.mousePressed(()=>{
    
    this.play.hide();
    this.canvasX.position(800,700);
    this.canvasY.position(800,750);
   
 

    this.set.position(800,800);

})
this.set.mousePressed(()=>{
    
    this.posX=this.canvasX.value();
    this.posY=this.canvasY.value();
    this.apple=this.r.value();
    this.grass=this.g.value();
    this.sea=this.b.value();
   
    gameState=3;
    createCanvas(this.posX,this.posY);
    beginShape();
    stroke();
    strokeWeight(4);
    for(var i=0;i<drawing.length;i++){
        vertex(drawing[i].x,drawing[i].y);
        endShape()}
        background("white")

    //this.messageX.html("Your Canvas Width has been set to "+""+this.posX);
   // this.messageY.html("Your Canvas Height has been set to "+""+this.posY);
    
    this.messageX.position(800,200);
    this.messageY.position(800,250);
    this.r.position(800,800);
    this.b.position(850,800);
    this.g.position(900,800);
    
    this.canvasX.position(0,0);
    this.canvasY.hide();
    this.set.hide();
    
  
    
})


    }
    
    
    }
