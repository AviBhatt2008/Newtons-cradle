class Roof
{
    constructor(x, y)
    {
        // declare options
        var options = 
        {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        // make rectangle body with options
        this.body = Bodies.rectangle(x, y, 500, 30, options);
        // add body to world
        World.add(world, this.body);
        this.pos = this.body.position
    }
    display()
    { 
        // give rectangle
        fill("gray");
        rectMode(CENTER)
        rect(this.pos.x, this.pos.y, 500, 30);
    }
}