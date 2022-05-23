const MovingObject = require('./moving_object')


const Util = require('./util')
function Asteroid(optionsObject) {
    let movingAsteroid = new MovingObject(optionsObject)
    this.pos = movingAsteroid.pos
    this.color = "purple";
    this.radius = 6;
    this.vel = Util.randomVec(10)
}

Util.inherits(Asteroid, MovingObject)
module.exports = Asteroid;
