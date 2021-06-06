class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.1,
        }
    this.sling = Constraint.create(options);
    this.bodyA = bodyA;
    this.pointB = pointB;
    World.add(world, this.sling)
    }
    //writing the functions to make the ball work like a catapult
    attach(body){
        this.sling.bodyA=body
    }
    
  fly(){
	this.sling.bodyA=null;
    }

    display(){
        push();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            pop();

            /*
       // push();
        if(this.sling.bodyA){
            this.bodyA.position.x = mouseX;
            this.bodyA.position.y = mouseY;   
        }
        fill("blue");
        pop();
        */
    }
}