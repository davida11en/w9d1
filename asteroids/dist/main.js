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

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\n\n\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\nfunction Asteroid(optionsObject) {\n    let movingAsteroid = new MovingObject(optionsObject)\n    this.pos = movingAsteroid.pos\n    this.color = \"purple\";\n    this.radius = 6;\n    this.vel = Util.randomVec(10)\n}\n\nUtil.inherits(Asteroid, MovingObject)\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\n\nfunction Game(dim_x, dim_y, num_asteroids) {\n    this.dim_x = dim_x;\n    this.dim_y = dim_y;\n    this.num_asteroids = num_asteroids;\n    this.asteroids = [];\n\n    this.addAsteroids();\n}\n\n\n\nGame.prototype.addAsteroids = function () {\n\n    for (let i = 0; i < this.num_asteroids; i++){\n        this.asteroids.push(new Asteroid({pos: this.randomPosition()}));\n    }\n}\n\n\nGame.prototype.randomPosition = function () {\n    let x = this.dim_x * Math.random();\n    let y = this.dim_y * Math.random();\n\n    return [x,y];\n}\n\n\nGame.prototype.draw = function (ctx) {\n    //clear canvas \n    // ctx.clearRect(0, 0, this.dim_x, this.dim_y);\n    ctx.fillStyle = 'skyblue';\n    ctx.fillRect(0, 0, 400, 400);\n    this.asteroids.forEach( asteroid => {\n        asteroid.draw(ctx)\n    })\n}\n\n\nGame.prototype.moveObjects = function () {\n    this.asteroids.forEach( asteroid => {\n        asteroid.move()\n    })\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\nconst view = new Game;\n\nfunction GameView(context) {\n    this.game = new Game(400,400,10);\n    this.context = context;\n}\n\n\nGameView.prototype.start = function() {\n    setInterval(() => {\n        this.game.moveObjects();\n        this.game.draw(this.context);\n    } ,20)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://asteroids/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log('webpack is working')\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const gameCanvas = document.getElementById(\"gameCanvas\");\n    gameCanvas.width = 400;\n    gameCanvas.height = 400;\n    const ctx = gameCanvas.getContext('2d');\n    ctx.fillStyle = 'skyblue';\n    ctx.fillRect(0, 0, 400, 400);\n    // asteroid1.draw(ctx);\n    // asteroid2.draw(ctx);\n    // newGame.draw(ctx);\n\n    const newView = new GameView(ctx);\n    newView.start();\n})\n\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\n\n\nconst mo = new MovingObject({\n    pos: [50, 50],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n});\n\nconst asteroid1 = new Asteroid({pos: [70, 70]})\nconst asteroid2 = new Asteroid({pos: [200, 200]})\n// debugger\nconst newGame = new Game(400,400,50);\n\n// const newview = new GameView(ctx)\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(optionsObj) {\n    \n    this.pos = optionsObj['pos'];\n    this.vel = optionsObj['vel'];\n    this.radius = optionsObj['radius'];\n    this.color = optionsObj['color'];\n}\n\n\nMovingObject.prototype.draw = function (ctx) {\n    // document.addEventListener(\"DOMContentLoaded\", () => {\n\n        // const gameCanvasEl = document.getElementById('gameCanvas');\n\n        // gameCanvasEl.width = 400;\n        // gameCanvasEl.height = 400;\n\n        // const ctx = gameCanvasEl.getContext('2d');\n        // ctx.fillStyle = \"black\";\n        // ctx.fillRect = (0, 0, 400, 400);\n        \n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], 40, 0, this.radius * Math.PI);\n        ctx.strokeStyle = this.color;\n        ctx.lineWidth = \"3\";\n        ctx.fillStyle = \"white\"; \n        ctx.stroke();\n    // })\n}\n\nMovingObject.prototype.move = function (){\n    let newx = this.pos[0] + this.vel[0];\n    let newy = this.pos[1] + this.vel[1];\n    \n    this.pos = [newx, newy];\n    \n    \n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass\n        },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n      },\n      // Scale the length of a vector by the given amount.\n      scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n      }\n  };\n  \n  module.exports = Util;\n\n//# sourceURL=webpack://asteroids/./src/util.js?");

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