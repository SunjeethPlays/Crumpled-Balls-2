class Paper {

    constructor (x,y,radius) {

        var options = {
            restitution : 0,
            density : 0.6
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        this.x = x;
        this.y = y;

        this.image = loadImage("paper.png");

        World.add(world,this.body);
    }

    display () {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(LEFT);
        image(this.image,0,0,this.r,this.r);
        pop();
        
    }
}