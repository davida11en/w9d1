const Game = require('./game')

const view = new Game;

function GameView(context) {
    this.game = new Game(400,400,10);
    this.context = context;
}


GameView.prototype.start = function() {
    setInterval(() => {
        this.game.moveObjects();
        this.game.draw(this.context);
    } ,20)
}

module.exports = GameView;