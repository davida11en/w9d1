console.log('webpack is working')

const MovingObject = require('./moving_object.js');
document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("gameCanvas");
    const ctx = gameCanvas.getContext('2d');
    mo.draw(ctx);
    mo.move()
    mo.draw(ctx);
})


window.MovingObject = MovingObject;

const mo = new MovingObject({
    pos: [50, 50],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});