const Game = require('./game')

const view = new Game;

function GameView(context) {
    this.game = new Game(400,400,2);
    this.context = context;
}


GameView.prototype.start = function() {
    setInterval(() => {
        this.game.step();
        this.game.draw(this.context);
    } ,20)
}

module.exports = GameView;