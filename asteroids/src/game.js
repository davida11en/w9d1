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
        // let ngame = new Game(400, 400, 10);
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
    }
}


Game.prototype.randomPosition = function () {
    let x = this.dim_x * Math.random();
    let y = this.dim_y * Math.random();
    return [x,y];
}

Game.prototype.wrap = function(pos) {
    
    if (pos[0] < 0) {
        pos[0] = this.dim_x + pos[0];
    }

    if (pos[1] < 0) {
        pos[1] = this.dim_y + pos[1];
    }
    
    let wrapx = pos[0] % this.dim_x;
    let wrapy = pos[1] % this.dim_y;



    return [wrapx,wrapy];
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

Game.prototype.checkCollisions = function ( ) {
    for (let i = 0; i < this.asteroids.length; i ++) {
        let a1 = this.asteroids[i];
        for (let j = 0; j < this.asteroids.length; j++) {
            let a2 = this.asteroids[j]; 

            if (i !== j) { 
                if (a1.isCollidedWith(a2)) alert ('COLLISION');
            } 
        }
    } 
}

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
}

module.exports = Game;