const MovingObject = require('./moving_object')
//const Game = require('./game')

const Util = require('./util')
function Asteroid(optionsObject) {
    
    let movingAsteroid = new MovingObject(optionsObject)
    this.game = movingAsteroid.game
    this.pos = movingAsteroid.pos
    this.color = "yellow";
    this.radius = 3;
    this.vel = Util.randomVec(4)
}

Util.inherits(Asteroid, MovingObject)
module.exports = Asteroid;
