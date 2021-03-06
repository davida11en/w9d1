console.log('webpack is working')

const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js')

document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("gameCanvas");
    gameCanvas.width = 400;
    gameCanvas.height = 400;
    const ctx = gameCanvas.getContext('2d');
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, 400, 400);
    // asteroid1.draw(ctx);
    // asteroid2.draw(ctx);
    // newGame.draw(ctx);

    const newView = new GameView(ctx);
    newView.start();
})


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;


const mo = new MovingObject({
    pos: [50, 50],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

const asteroid1 = new Asteroid({pos: [70, 70]})
const asteroid2 = new Asteroid({pos: [200, 200]})
// debugger
const newGame = new Game(400,400,50);

// const newview = new GameView(ctx)