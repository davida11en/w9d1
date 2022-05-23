function MovingObject(optionsObj) {
    
    this.pos = optionsObj['pos'];
    this.vel = optionsObj['vel'];
    this.radius = optionsObj['radius'];
    this.color = optionsObj['color'];
}


MovingObject.prototype.draw = function (ctx) {
    document.addEventListener("DOMContentLoaded", () => {

        const gameCanvasEl = document.getElementById('gameCanvas');

        gameCanvasEl.width = 400;
        gameCanvasEl.height = 400;

        const ctx = gameCanvasEl.getContext('2d');
        ctx.fillStyle = "black";
        ctx.fillRect = (0, 0, 400, 400);
        
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = "3";
        ctx.fillStyle = "white"; 
        ctx.stroke();
    })
}

module.exports = MovingObject;