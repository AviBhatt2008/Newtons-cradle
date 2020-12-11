class Bob
{
    constructor(x, y)
    {
        // declare options
        var options = 
        {
            isStatic: false,
            restitution: 1.3,
            friction: 0.5,
            density: 1.2
        }
        // make circle body with options
        this.body = Bodies.circle(x, y, 50, options);
        // add body to world
        World.add(world, this.body);
        this.pos = this.body.position
    }
    display()
    { 
        push()
        // update body's positions
        translate(this.pos.x, this.pos.y);
        // give circle
        fill("red");
        ellipseMode(CENTER)
        ellipse(0, 0, 100);
        pop()
    }
}