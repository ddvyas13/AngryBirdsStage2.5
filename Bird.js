class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
  
    }

    //functions for the object
    display(){

        //variable to store body's position
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        
        super.display();
    }
}

