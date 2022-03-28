const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");  
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.addEventListener("DOMContentLoaded", function () {
  
  window.MovingObject = MovingObject;
  const canvas = document.getElementById('game-canvas');  
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");

  const options = {
    "pos": [250,250], 
    "vel": [10, 10], 
    "radius": (2 * Math.PI), 
    "color": "#705600" 
  }; 

  // "#705600" baby barf color
  const game = new Game(500, 500, 10);
  const gameView = new GameView(ctx, game);
  gameView.start();
  // game.draw(ctx);
  // setTimeout(() => {
  //   game.moveObjects();
  //  game.draw(ctx); 
  // }, 5000); 


});

