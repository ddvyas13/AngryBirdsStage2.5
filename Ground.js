class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic: true
        }

        this.ground = Bodies.rectangle (x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.ground)
    }

    display(){
        var pox = this.ground.position;
        fill ("brown");
        rectMode (CENTER);
        rect(pox.x,pox.y,this.width,this.height);


    }
}