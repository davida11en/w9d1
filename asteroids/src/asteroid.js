const MovingObject = require('./moving_object')
const Util = require('./util')
function Asteroid(optionsObject) {
    let movingAsteroid = new MovingObject(optionsObject)
    this.pos = movingAsteroid.pos
    this.color = "grey";
    this.radius = 10;
    this.vel = Util.randomVec(1)
}

Util.inherits(Asteroid, MovingObject)
module.exports = Asteroid;
