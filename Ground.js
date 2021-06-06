
/*
class Ground{

  constructor(){
      var ground_options={
          isStatic : true
        }
      
        this.ground = Bodies.rectangle(450,390,900,20,ground_options)
        World.add(world,this.ground);
  }
  display(){
      noStroke();
      fill(188,67,67);
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,900,20);
  }
}
*/


class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      if(this.body.position.y>500){
      fill("black");
      }
      else{
        fill("green");
      }
      rect(pos.x, pos.y, this.width, this.height);
    }
  };