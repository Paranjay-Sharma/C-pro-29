class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':1.0,
            'friction':1.0,
            'density':10.0,
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("orange");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}