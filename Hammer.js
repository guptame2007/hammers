class Hammer
{
    constructor()
    {
        this.bodyX = x;
        this.bodyY = y;
        this.bodyH = 50;
        this.bodyW = 50;

        this.Body = Bodies.rectangle(  this.bodyX ,
            this.bodyY,
            this.bodyH ,
            this.bodyW ,options)
            World.add(myWorld , this.body);

    }
    display()
    {
        this.body.position.y=mouseY;
        this.body.position.x=mouseX;
        push();
        translate(this.body.position.y , this.body.position.x);
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.bodyW , this.bodyH)
        pop();
    }
};