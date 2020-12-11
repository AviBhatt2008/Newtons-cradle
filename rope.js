class Rope
{
    constructor(bodyA, bodyB, offsetX, offsetY)
    {
        var options =
        {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: offsetX, y: offsetY}
        }
        this.chain = Matter.Constraint.create(options);
        this.offsetX = offsetX;
        World.add(world, this.chain);
    }
    display()
    {
        strokeWeight(3);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, 
            this.chain.bodyB.position.x + this.offsetX, this.chain.bodyB.position.y);
    }
}