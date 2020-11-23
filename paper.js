class Paper {
    constructor(x,y,r) {
      var options = {
         restituion:0.5,
         density:0.5,
         friction:0.5,
      }
      this.image=loadImage("sprites/paper.png")
      this.body = Bodies.circle(x,y,50,options);
       this.r = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("white");
      imageMode(CENTER);
      image(this.image,pos.x, pos.y,50,50);
    }
  };