class BaseClass{
    constructor(x,y,width,height,angle){
        //properties
        var options={
            restitution: 0.8,
            density: 1,
            friction: 1
        }

        //create the body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");

        //add the body to the world
        World.add(world,this.body);
    }

    display(){
        //variable to store body's position
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
       
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);        

        pop();
    }
}