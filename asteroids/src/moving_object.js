function MovingObject(optionsObj) {
    this.game = optionsObj['game'];
    this.pos = optionsObj['pos'];
    this.vel = optionsObj['vel'];
    this.radius = optionsObj['radius'];
    this.color = optionsObj['color'];
}


MovingObject.prototype.draw = function (ctx) {
    // document.addEventListener("DOMContentLoaded", () => {

        // const gameCanvasEl = document.getElementById('gameCanvas');

        // gameCanvasEl.width = 400;
        // gameCanvasEl.height = 400;

        // const ctx = gameCanvasEl.getContext('2d');
        // ctx.fillStyle = "black";
        // ctx.fillRect = (0, 0, 400, 400);
        
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 40, 0, this.radius * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = "3";
        ctx.fillStyle = "white"; 
        ctx.stroke();
    // })
}

MovingObject.prototype.move = function (){
    let newx = this.pos[0] + this.vel[0];
    let newy = this.pos[1] + this.vel[1];
    let newpos = [newx, newy];
    
    this.pos = this.game.wrap(newpos) 
   
}


MovingObject.prototype.isCollidedWith = function (otherObj) {

    if (this.radius + otherObj.radius <= (((this.pos[0] - otherObj.pos[0]) ** 2) + ((this.pos[1] - otherObj.pos[1]) ** 2) ** 0.5)){
        return true;
    } else {
        return false;
    }
}

module.exports = MovingObject;