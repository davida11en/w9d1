const Asteroid = require('./asteroid')


function Game(dim_x, dim_y, num_asteroids) {
    this.dim_x = dim_x;
    this.dim_y = dim_y;
    this.num_asteroids = num_asteroids;
    this.asteroids = [];

    this.addAsteroids();
}



Game.prototype.addAsteroids = function () {

    for (let i = 0; i < this.num_asteroids; i++){
        this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
    }
}


Game.prototype.randomPosition = function () {
    let x = this.dim_x * Math.random();
    let y = this.dim_y * Math.random();

    return [x,y];
}


Game.prototype.draw = function (ctx) {
    //clear canvas 
    // ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, 400, 400);
    this.asteroids.forEach( asteroid => {
        asteroid.draw(ctx)
    })
}


Game.prototype.moveObjects = function () {
    this.asteroids.forEach( asteroid => {
        asteroid.move()
    })
}


module.exports = Game;