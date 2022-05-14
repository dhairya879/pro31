class BackGround {
  
  constructor(x,y){
    
    var options = {
        isStatic:true,
    }
   
    this.body=Bodies.rectangle(x,y,options);
    this.body.x=x;
    this.body.y=y;
    
    this.image=loadImage("assets/bg.png");
    World.add(world, this.body);


  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}