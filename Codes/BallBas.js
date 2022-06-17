class BallBas{
    constructor(x,y){
        var opt = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,30,30,opt);
        this.imageBall = loadImage("Imgs/Ball.png");
        World.add(world, this.body);
    } 

    shootBall(){
        console.log("Foi na shootBall");
        Matter.Body.setStatic(this.body, false); 
        Matter.Body.setVelocity(this.body, { x: 10, y: -3});
    }

    
    displayBall(){
        var pos = this.body.position;
        push()
        imageMode(CENTER);
        image(this.imageBall,60,270,20,20);
        pop();
    }


}




 /*var newAngle = botBas.angle ; 
        newAngle = newAngle *(3.14/180) 
        var velocity = p5.Vector.fromAngle(newAngle); 
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false); 
        Matter.Body.setVelocity(this.body, { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});*/