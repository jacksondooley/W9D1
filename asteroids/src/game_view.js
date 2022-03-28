const Game = require("./game");

const GameView = function(ctx, game){
  this.ctx = ctx; 
  this.game = game; 

}


GameView.prototype.start = function(){
  setInterval(() => {
      this.game.moveObjects();
      this.game.draw(this.ctx);
  }, 20);
};

module.exports = GameView;