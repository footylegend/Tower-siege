class Box {
  constructor(x, y, width, height){
    var options = {
      isStatic : false,
    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width=width;
  this.height=height;
  this.visibility=255;
  World.add(world, this.body);
  }

  scoreincrease(){
    if(this.visibility<0 && this.visibility>-105){
      console.log("beforescore");
      score = score+1;
    }
    //console.log(score);
  }
  display(){
    //adding colours to the ball
    if(this.body.position.y>360 & this.body.position.y<410){
      fill("red");
      }
      if(this.body.position.y>410 & this.body.position.y<460){
        fill("blue");
      }
      if(this.body.position.y>460){
        fill("cyan");
      }
      if(this.body.position.y>310 & this.body.position.y<360){
        fill("yellow");
      }
      if(this.body.position.y>260 & this.body.position.y<310){
        fill("purple");
      }
      if(this.body.position.y>210 & this.body.position.y<260){
        fill("golden");
      }
      if(this.body.position.y>160 & this.body.position.y<210){
        fill("black");
      }
      if(this.body.position.y>110 & this.body.position.y<160){
        fill("silver");
      }

    //making the box dissapear if it is hit by the ball
    if(this.body.speed>3){
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.Visibility);
      pop();
    }
    if(this.body.speed<3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);     
      rect(0,0,this.width,this.height);
      pop();
    }
}
}