const MovingObject = require("./moving_object.js");
const Util = require("./util.js"); 
const Asteroid = function(options){
  options = options; 
  options.vel = Util.randomVec(2);
  options.radius = 5; 
  options.color = "gray"; 

  MovingObject.call(this, options);  
  
  // new MovingObject({
  //   "pos": options.pos, 
  //   "vel": Util.randomVec(50),
  //   "radius": 20, 
  //   "color": "gray"
  // }); 


  
  
};

Util.inherits(Asteroid, MovingObject);  


module.exports = Asteroid; 