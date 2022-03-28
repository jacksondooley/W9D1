
const MovingObject = function(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
};

MovingObject.prototype.draw = function(ctx) {
 
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], 13, 0, 2 * Math.PI);
  // bananaStyle
  // ctx.arc(this.pos[0], this.pos[1], 13, 4.5, 2 * Math.PI);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});

MovingObject.prototype.move = function() {
  let [x, y] = this.pos;
  let [vx, vy] = this.vel;
  let dx = x + vx;
  let dy = y + vy;
  this.pos = this.game.wrap([dx, dy]);

}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  
  
}

module.exports = MovingObject;