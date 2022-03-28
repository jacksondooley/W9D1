const Asteroid = require("./asteroid");

const Game = function(dim_x, dim_y, num_ast){
  this.DIM_X = dim_x;
  this.DIM_Y = dim_y;
  this.NUM_ASTEROIDS = num_ast;
  this.asteroids = []; 

  for( let i = 0; i < this.NUM_ASTEROIDS; i++){
    this.addAsteroids(); 
  }
  
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids[i].draw(ctx);
  }

};

Game.prototype.moveObjects = function(){
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids[i].move();
  }
}

Game.prototype.addAsteroids = function(){
  let that = this;
  this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: that})); 
};

Game.prototype.randomPosition = function(){
  let min = 0;
  let randomX = Math.floor(Math.random() * (this.DIM_X - min) + min);
  let randomY = Math.floor(Math.random() * (this.DIM_Y - min) + min);
  
  return [randomX, randomY];
};

Game.prototype.wrap = function(pos){
  let [x, y] = pos;
  if (x >= this.DIM_X){
    x = 0;
  }
  else if (x <= 0) {
    x = this.DIM_X;
  }
  if (y >= this.DIM_Y) {
    y = 0;
  }
  else if (y <= 0) {
    y = this.DIM_Y;
  }

  return [x, y];
};

module.exports = Game;


