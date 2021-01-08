class Box {
  constructor(x, y, width, height){
    var options = {
        'restitution':0.2,
        'friction':1,
        'density':0.009
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity=255;
    this.image=loadImage("Box.png");
}

score(){
  if (this.Visiblity<0 && this.Visiblity>-105){
    score++;
  }
}

display(){
    push()
    if(this.body.speed<3){
      this.Visiblity=255;
      
    }
    else{    
      World.remove(world,this.body); 
      this.Visiblity=this.Visiblity-5;         
      tint(255,this.Visiblity);    
    }     
    var angle = this.body.angle;
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,55,70);
    pop();
}
}

