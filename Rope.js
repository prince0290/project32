class Rope {
    constructor(bodyA,pointB){      
        var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:10
        };
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    fly(){
        this.rope.bodyA=null;
    }

    attach(body){
        this.rope.bodyA=body;
    }

    display(){
        if(this.rope.bodyA){
            var posA=this.rope.bodyA.position;
            var posB=this.pointB;
            push();
            stroke(255);
            strokeWeight(4);
            line(posB.x,posB.y,posA.x,posA.y);
            pop();
        }
    }
}