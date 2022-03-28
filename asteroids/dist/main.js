/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\"); \nconst Asteroid = function(options){\n  options = options; \n  options.vel = Util.randomVec(2);\n  options.radius = 5; \n  options.color = \"gray\"; \n\n  MovingObject.call(this, options);  \n  \n  // new MovingObject({\n  //   \"pos\": options.pos, \n  //   \"vel\": Util.randomVec(50),\n  //   \"radius\": 20, \n  //   \"color\": \"gray\"\n  // }); \n\n\n  \n  \n};\n\nUtil.inherits(Asteroid, MovingObject);  \n\n\nmodule.exports = Asteroid; \n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst Game = function(dim_x, dim_y, num_ast){\n  this.DIM_X = dim_x;\n  this.DIM_Y = dim_y;\n  this.NUM_ASTEROIDS = num_ast;\n  this.asteroids = []; \n\n  for( let i = 0; i < this.NUM_ASTEROIDS; i++){\n    this.addAsteroids(); \n  }\n  \n};\n\nGame.prototype.draw = function(ctx){\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n\n};\n\nGame.prototype.moveObjects = function(){\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids[i].move();\n  }\n}\n\nGame.prototype.addAsteroids = function(){\n  let that = this;\n  this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: that})); \n};\n\nGame.prototype.randomPosition = function(){\n  let min = 0;\n  let randomX = Math.floor(Math.random() * (this.DIM_X - min) + min);\n  let randomY = Math.floor(Math.random() * (this.DIM_Y - min) + min);\n  \n  return [randomX, randomY];\n};\n\nGame.prototype.wrap = function(pos){\n  let [x, y] = pos;\n  if (x >= this.DIM_X){\n    x = 0;\n  }\n  else if (x <= 0) {\n    x = this.DIM_X;\n  }\n  if (y >= this.DIM_Y) {\n    y = 0;\n  }\n  else if (y <= 0) {\n    y = this.DIM_Y;\n  }\n\n  return [x, y];\n};\n\nmodule.exports = Game;\n\n\n\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst GameView = function(ctx, game){\n  this.ctx = ctx; \n  this.game = game; \n\n}\n\n\nGameView.prototype.start = function(){\n  setInterval(() => {\n      this.game.moveObjects();\n      this.game.draw(this.ctx);\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://asteroids/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");  \nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  \n  window.MovingObject = MovingObject;\n  const canvas = document.getElementById('game-canvas');  \n  canvas.width = 500;\n  canvas.height = 500;\n\n  const ctx = canvas.getContext(\"2d\");\n\n  const options = {\n    \"pos\": [250,250], \n    \"vel\": [10, 10], \n    \"radius\": (2 * Math.PI), \n    \"color\": \"#705600\" \n  }; \n\n  // \"#705600\" baby barf color\n  const game = new Game(500, 500, 10);\n  const gameView = new GameView(ctx, game);\n  gameView.start();\n  // game.draw(ctx);\n  // setTimeout(() => {\n  //   game.moveObjects();\n  //  game.draw(ctx); \n  // }, 5000); \n\n\n});\n\n\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nconst MovingObject = function(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n};\n\nMovingObject.prototype.draw = function(ctx) {\n \n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], 13, 0, 2 * Math.PI);\n  // bananaStyle\n  // ctx.arc(this.pos[0], this.pos[1], 13, 4.5, 2 * Math.PI);\n  ctx.strokeStyle = this.color;\n  ctx.lineWidth = 2;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nconst mo = new MovingObject({\n  pos: [30, 30],\n  vel: [10, 10],\n  radius: 5,\n  color: \"#00FF00\"\n});\n\nMovingObject.prototype.move = function() {\n  let [x, y] = this.pos;\n  let [vx, vy] = this.vel;\n  let dx = x + vx;\n  let dy = y + vy;\n  this.pos = this.game.wrap([dx, dy]);\n\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  \n  \n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n  inherits: function(childClass, parentClass) {\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec: function(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale: function(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n};\n\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack://asteroids/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;