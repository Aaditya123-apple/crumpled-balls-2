   class Dustbin{
    
    constructor(x,y,width,height) {
       
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;

      this.body1= Bodies.rectangle(x,y,width,height,{isStatic: true});
      this.image=loadImage("dustbingreen.png");
        World.add(world, this.body1);
    
    }
    
    display(){
      var pos =this.body1.position;
      push()
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("brown");
      image(this.image,0,0,this.width*2, this.height*2);
      pop();

    }
  };