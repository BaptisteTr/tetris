(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/5jz":
/*!***************************************!*\
  !*** ./src/app/tetris/Objets/grid.ts ***!
  \***************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ "E72p");

class Grid {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.square_list = new Array();
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                this.square_list.push(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](i, j));
            }
        }
    }
    display(tetromino) {
        tetromino.display(this.square_list);
    }
}


/***/ }),

/***/ "/9jf":
/*!****************************************!*\
  !*** ./src/app/tetris/Objets/score.ts ***!
  \****************************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
class Score {
    constructor() {
        this.lineScore = 0;
        this.pointScore = 0;
        this.vitesse = 0;
        this.lineScore = 0;
        this.pointScore = 0;
        this.vitesse = 0;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bapti\projets\tetris\test-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E72p":
/*!*****************************************!*\
  !*** ./src/app/tetris/Objets/square.ts ***!
  \*****************************************/
/*! exports provided: Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return Square; });
class Square {
    constructor(height_position, width_position, color = "white", filled = false) {
        this.height_position = height_position;
        this.width_position = width_position;
        this.color = color;
        this.filled = filled;
    }
    isFilled(grid, centerPosY, centerPosX) {
        if (grid.square_list.find(square => square.height_position == (this.height_position + centerPosY)
            && square.width_position == (this.width_position + centerPosX)
            && square.filled == true) != undefined) {
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ "FdzL":
/*!******************************************************!*\
  !*** ./src/app/command-bar/command-bar.component.ts ***!
  \******************************************************/
/*! exports provided: CommandBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarComponent", function() { return CommandBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommandBarComponent {
    constructor() {
        this.left = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.right = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.down = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rotate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pause = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.restart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    triggerLeft() {
        this.left.emit("left");
    }
    triggerRight() {
        this.right.emit();
    }
    triggerDown() {
        this.down.emit();
    }
    triggerRotate() {
        this.rotate.emit();
    }
    triggerPause() {
        this.pause.emit();
    }
    triggerRestart() {
        this.restart.emit();
    }
}
CommandBarComponent.??fac = function CommandBarComponent_Factory(t) { return new (t || CommandBarComponent)(); };
CommandBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CommandBarComponent, selectors: [["app-command-bar"]], outputs: { left: "left", right: "right", down: "down", rotate: "rotate", pause: "pause", restart: "restart" }, decls: 16, vars: 0, consts: [[1, "wrapper"], [1, "button", 3, "click"], ["src", "assets/img/left-arrow.png"], ["src", "assets/img/refresh.png"], ["src", "assets/img/right-arrow.png"], [1, "break"], ["id", "down", 1, "button", 3, "click"], ["src", "assets/img/down-arrow.png"], ["id", "pause", 1, "button", 3, "click"], ["src", "assets/img/pause.png"], ["id", "restart", 1, "button", 3, "click"], ["src", "assets/img/restart.png"]], template: function CommandBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CommandBarComponent_Template_div_click_1_listener() { return ctx.triggerLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CommandBarComponent_Template_div_click_3_listener() { return ctx.triggerRotate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CommandBarComponent_Template_div_click_5_listener() { return ctx.triggerRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CommandBarComponent_Template_div_click_8_listener() { return ctx.triggerDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CommandBarComponent_Template_div_click_11_listener() { return ctx.triggerPause(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CommandBarComponent_Template_div_click_14_listener() { return ctx.triggerRestart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".button[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 2px;\r\n  border-width: 3px;\r\n  border-style: outset;\r\n  background-color: #39d352;\r\n  border-color:#39d352;\r\n  box-shadow: inset 0 0 1px 1px #7afd60;\r\n  margin: 4px;\r\n  text-align: center;\r\n  position:relative;\r\n-webkit-user-select: none;\r\nuser-select: none;\r\n}\r\n.button[_ngcontent-%COMP%]:active {\r\n  border-style: inset;\r\n  transform: translateY(2px);\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  position:absolute;\r\n  top:50%;\r\n  left:50%;\r\n  margin-top:-10px;\r\n  margin-left:-10px;\r\n}\r\n.wrapper[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-flow: row wrap;\r\n}\r\n#down[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n}\r\n.break[_ngcontent-%COMP%] {\r\n  flex-basis: 100%;\r\n  height: 0;\r\n  width: 200px;\r\n}\r\n#pause[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n#restart[_ngcontent-%COMP%] {\r\n  align-self: flex-end;\r\n}\r\n@media screen and (max-width: 780px){\r\n  .button[_ngcontent-%COMP%] {\r\n    width: 8vh;\r\n    height: 8vh;\r\n    border-radius: 2px;\r\n    border-width: 3px;\r\n    border-style: outset;\r\n\r\n    box-sizing: border-box;\r\n    box-shadow: inset 0 0 1px 1px #7afd60;\r\n    margin: 0px;\r\n    text-align: center;\r\n    position:relative;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmQtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBRW5CLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0lBRXBCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJjb21tYW5kLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItd2lkdGg6IDNweDtcclxuICBib3JkZXItc3R5bGU6IG91dHNldDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlkMzUyO1xyXG4gIGJvcmRlci1jb2xvcjojMzlkMzUyO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4ICM3YWZkNjA7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbi13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbnVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5idXR0b246YWN0aXZlIHtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDo1MCU7XHJcbiAgbGVmdDo1MCU7XHJcbiAgbWFyZ2luLXRvcDotMTBweDtcclxuICBtYXJnaW4tbGVmdDotMTBweDtcclxufVxyXG5cclxuXHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbn1cclxuXHJcbiNkb3duIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5icmVhayB7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jcGF1c2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuI3Jlc3RhcnQge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCl7XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogOHZoO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDNweDtcclxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xyXG5cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCAjN2FmZDYwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "OJO1":
/*!***************************************************!*\
  !*** ./src/app/tetris/grille/grille.component.ts ***!
  \***************************************************/
/*! exports provided: GrilleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrilleComponent", function() { return GrilleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Objets_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Objets/grid */ "/5jz");
/* harmony import */ var _Objets_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Objets/score */ "/9jf");
/* harmony import */ var _Objets_tetromino__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Objets/tetromino */ "wlkB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function GrilleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div");
} if (rf & 2) {
    const square_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMapInterpolate1"]("cell ", square_r1.color, "");
} }
class GrilleComponent {
    constructor() {
        this.grid = new _Objets_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](0, 0);
        this.lines = 20;
        this.columns = 10;
        this.score = new _Objets_score__WEBPACK_IMPORTED_MODULE_3__["Score"]();
        this.pause = false;
        this.tetrominoChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scoreChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentTetromino = this.randomTetromino();
        this.currentTetromino.setStartPosition();
        this.nextTetromino = this.randomTetromino();
        this.nextTetromino.setDefaultPosition();
        this.speedValue = 725;
        this.isGameOver = false;
        this.displayGameOver = "none";
        this.displayPause = "none";
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tLastDown = performance.now();
            this.grid = new _Objets_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](this.lines, this.columns);
            this.tetrominoChanged.emit(this.nextTetromino);
            setInterval(() => this.gameplayLoop(), 1000 / 60);
        });
    }
    draw() {
        this.grid.display(this.currentTetromino);
    }
    gameplayLoop() {
        if (this.isGameOver == false && this.pause == false) {
            this.displayGameOver = "none";
            this.displayPause = "none";
            this.tcurrent = performance.now();
            if (this.tcurrent - this.tLastDown >= this.speedValue) {
                this.currentTetromino.checkAndMoveDown(this.grid);
                this.tLastDown = this.tcurrent;
            }
            if (this.currentTetromino.locked) {
                if (this.currentTetromino.blocks.find(block => this.currentTetromino.centerPosY + block.height_position == 0) != undefined) {
                    this.isGameOver = true;
                }
                else {
                    this.currentTetromino = this.nextTetromino;
                    this.nextTetromino = this.randomTetromino();
                    this.nextTetromino.setDefaultPosition();
                    this.tetrominoChanged.emit(this.nextTetromino);
                    this.currentTetromino.setStartPosition();
                }
                this.cleanCompletedLines();
            }
        }
        else {
            if (this.isGameOver) {
                this.displayGameOver = "block";
            }
            else if (this.pause) {
                this.displayPause = "block";
            }
        }
    }
    cleanCompletedLines() {
        let lineCount = 0;
        for (let y = this.lines; y >= 0; y--) {
            let line = this.grid.square_list.filter(block => (block.height_position == y && block.filled));
            if (line.length == this.columns) {
                lineCount++;
                for (let y2 = y; y2 >= 0; y2--) {
                    let currentLine = this.getLine(y2);
                    let upperLine = this.getLine(y2 - 1);
                    currentLine.forEach(block => {
                        let upperBlock = upperLine.find(upperBlock => upperBlock.width_position == block.width_position);
                        if (upperBlock != undefined) {
                            block.color = upperBlock.color;
                            block.filled = upperBlock.filled;
                        }
                    });
                }
                y++;
            }
        }
        if (lineCount > 0) {
            let score = this.calculateScore(lineCount, this.score.vitesse);
            this.score.lineScore = this.score.lineScore + lineCount;
            this.score.pointScore = this.score.pointScore + score;
            if (Math.floor(this.score.lineScore / 10) > this.score.vitesse) {
                this.score.vitesse++;
                let speedChange = this.speedValue / 3;
                this.speedValue -= speedChange;
            }
            this.scoreChanged.emit(this.score);
        }
    }
    getLine(lineNumber) {
        return this.grid.square_list.filter(block => (block.height_position == lineNumber));
    }
    onArrowLeft() {
        this.currentTetromino.checkAndMoveLeft(this.grid);
    }
    onArrowRight() {
        this.currentTetromino.checkAndMoveRight(this.grid);
    }
    onArrowDown() {
        this.currentTetromino.checkAndMoveDown(this.grid);
    }
    onArrowUp() {
        this.currentTetromino.centerPosY--;
    }
    onSpaceBar() {
        this.currentTetromino.rotate(this.grid);
    }
    onL() {
        this.currentTetromino.lock(this.grid);
    }
    onPause() {
        if (this.pause) {
            this.pause = false;
        }
        else {
            this.pause = true;
        }
    }
    restart() {
        this.currentTetromino = this.randomTetromino();
        this.currentTetromino.setStartPosition();
        this.nextTetromino = this.randomTetromino();
        this.nextTetromino.setDefaultPosition();
        this.speedValue = 725;
        this.isGameOver = false;
        this.displayGameOver = "none";
        this.displayPause = "none";
        this.grid.square_list.forEach(block => { block.filled = false; });
        this.tetrominoChanged.emit(this.nextTetromino);
        this.score = new _Objets_score__WEBPACK_IMPORTED_MODULE_3__["Score"]();
        this.scoreChanged.emit(this.score);
    }
    randomTetromino() {
        const tetrominos = [_Objets_tetromino__WEBPACK_IMPORTED_MODULE_4__["TetrominoI"], _Objets_tetromino__WEBPACK_IMPORTED_MODULE_4__["TetrominoJ"], _Objets_tetromino__WEBPACK_IMPORTED_MODULE_4__["TetrominoL"], _Objets_tetromino__WEBPACK_IMPORTED_MODULE_4__["TetrominoO"], _Objets_tetromino__WEBPACK_IMPORTED_MODULE_4__["TetrominoS"], _Objets_tetromino__WEBPACK_IMPORTED_MODULE_4__["TetrominoT"], _Objets_tetromino__WEBPACK_IMPORTED_MODULE_4__["TetrominoZ"]];
        var randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
        const colors = ["purple", "grey", "turquoise", "blue", "green", "yellow", "orange", "lightBlue"];
        var randColor = colors[Math.floor(Math.random() * colors.length)];
        return new randTetromino(randColor);
    }
    calculateScore(lineCount, vitesse) {
        let baseValue = 40;
        switch (lineCount) {
            case 1: {
                baseValue = 40;
                break;
            }
            case 2: {
                baseValue = 100;
                break;
            }
            case 3: {
                baseValue = 300;
                break;
            }
            case 4: {
                baseValue = 1200;
                break;
            }
            default: {
                baseValue = 0;
            }
        }
        return baseValue * (vitesse + 1);
        ;
    }
    handleKeyboardEvent(event) {
        if (!this.pause && !this.isGameOver) {
            if (event.key == "ArrowLeft") {
                this.onArrowLeft();
            }
            else if (event.key == "ArrowRight") {
                this.onArrowRight();
            }
            else if (event.key == "ArrowDown") {
                this.onArrowDown();
            }
            else if (event.key == "ArrowUp") {
                this.onSpaceBar();
            }
            else if (event.key == " ") {
                this.onSpaceBar();
            }
            else if (event.key == "l") {
                this.onL();
            }
            else {
                console.log(event.key);
            }
        }
    }
}
GrilleComponent.??fac = function GrilleComponent_Factory(t) { return new (t || GrilleComponent)(); };
GrilleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: GrilleComponent, selectors: [["app-grille"]], hostBindings: function GrilleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("keydown", function GrilleComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resolveDocument"]);
    } }, outputs: { tetrominoChanged: "tetrominoChanged", scoreChanged: "scoreChanged" }, decls: 7, vars: 5, consts: [["id", "game-grid", 1, "wrapper", "grid"], ["id", "gameOver"], ["id", "pause"], [3, "class", 4, "ngFor", "ngForOf"]], template: function GrilleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Game over");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, GrilleComponent_div_6_Template, 1, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("--display", ctx.displayGameOver);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("--display", ctx.displayPause);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.grid.square_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  gap: 0px;\r\n  position: relative;\r\n  border: 20px solid #3f3f3f;\r\n  box-shadow: 0 0 100px 0 #000;\r\n}\r\n\r\n.cell[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  display: inline-block;\r\n  border-radius: 2px;\r\n  border-width: 3px;\r\n  border-style: outset;\r\n}\r\n\r\n.purple[_ngcontent-%COMP%] {\r\n  background-color: #b857f0;\r\n  border-color:#b857f0;\r\n  box-shadow: inset 0 0 1px 1px #dc9ddf;\r\n}\r\n\r\n.white[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  border-color:rgb(53, 52, 52) ;\r\n  border-width: 1px;\r\n  width: 24px;\r\n  height: 24px;\r\n  border-style: solid;\r\n}\r\n\r\n.grey[_ngcontent-%COMP%] {\r\n  background-color: #95a5a6;\r\n  border-color: #95a5a6;\r\n  box-shadow: inset 0 0 1px 1px #ccd4d5;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  background-color: #39d352;\r\n  border-color:#39d352;\r\n  box-shadow: inset 0 0 1px 1px #7afd60;\r\n}\r\n\r\n.yellow[_ngcontent-%COMP%] {\r\n  background-color: #f3d528;\r\n  border-color:#f3e528;\r\n  box-shadow: inset 0 0 1px 1px #f0e588;\r\n}\r\n\r\n.turquoise[_ngcontent-%COMP%] {\r\n  background-color: #1abc9c;\r\n  border-color:#1abc9c;\r\n  box-shadow: inset 0 0 1px 1px #55e7ca;\r\n  filter: saturate(3);\r\n}\r\n\r\n.blue[_ngcontent-%COMP%] {\r\n  background-color: #0f6fc9;\r\n  border-color:#0f6fc9;\r\n  box-shadow: inset 0 0 1px 1px #0ba4eb;\r\n}\r\n\r\n.lightBlue[_ngcontent-%COMP%] {\r\n  background-color: #01A2E8;\r\n  border-color:#01A2E8;\r\n  box-shadow: inset 0 0 1px 1px #0ba4eb;\r\n  filter: saturate(3);\r\n}\r\n\r\n.orange[_ngcontent-%COMP%] {\r\n  background-color: #ff9100;\r\n  border-color:#ff9100;\r\n  box-shadow: inset 0 0 1px 1px #f7b02d;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  display : flex;\r\n  flex-direction: line;\r\n  flex-wrap: wrap;\r\n  left: 50px;\r\n}\r\n\r\n#gameOver[_ngcontent-%COMP%], #pause[_ngcontent-%COMP%] {\r\n  font-family: 'Press Start 2P';\r\n  font-size:70px;\r\n  color:crimson;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n  text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;\r\n  z-index: 2;\r\n  display: var(--display);\r\n}\r\n\r\n@media screen and (max-width: 780px){\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    border: 0px;\r\n    width: 100%;\r\n    height:100%;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%] {\r\n    left: 0px;\r\n    width: 100%;\r\n    height:100%;\r\n  }\r\n\r\n  .cell[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    border-width:2px;\r\n    border-style: outset;\r\n  }\r\n\r\n  .white[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    border-style: solid;\r\n\r\n    border-radius: 0px;\r\n    border-width: 2px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixpRUFBaUU7RUFDakUsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7O0lBRVosbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiZ3JpbGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcclxuICBnYXA6IDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAyMHB4IHNvbGlkICMzZjNmM2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwMHB4IDAgIzAwMDtcclxufVxyXG5cclxuLmNlbGwge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG4gIGJvcmRlci1zdHlsZTogb3V0c2V0O1xyXG59XHJcblxyXG4ucHVycGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjg1N2YwO1xyXG4gIGJvcmRlci1jb2xvcjojYjg1N2YwO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4ICNkYzlkZGY7XHJcbn1cclxuXHJcbi53aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWNvbG9yOnJnYig1MywgNTIsIDUyKSA7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5ncmV5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVhNWE2O1xyXG4gIGJvcmRlci1jb2xvcjogIzk1YTVhNjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCAjY2NkNGQ1O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWQzNTI7XHJcbiAgYm9yZGVyLWNvbG9yOiMzOWQzNTI7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggIzdhZmQ2MDtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZDUyODtcclxuICBib3JkZXItY29sb3I6I2YzZTUyODtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCAjZjBlNTg4O1xyXG59XHJcblxyXG4udHVycXVvaXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xyXG4gIGJvcmRlci1jb2xvcjojMWFiYzljO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4ICM1NWU3Y2E7XHJcbiAgZmlsdGVyOiBzYXR1cmF0ZSgzKTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjZmYzk7XHJcbiAgYm9yZGVyLWNvbG9yOiMwZjZmYzk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggIzBiYTRlYjtcclxufVxyXG5cclxuLmxpZ2h0Qmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxQTJFODtcclxuICBib3JkZXItY29sb3I6IzAxQTJFODtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCAjMGJhNGViO1xyXG4gIGZpbHRlcjogc2F0dXJhdGUoMyk7XHJcbn1cclxuXHJcbi5vcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XHJcbiAgYm9yZGVyLWNvbG9yOiNmZjkxMDA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggI2Y3YjAyZDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheSA6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGxpbmU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbiNnYW1lT3ZlciwgI3BhdXNlIHtcclxuICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcclxuICBmb250LXNpemU6NzBweDtcclxuICBjb2xvcjpjcmltc29uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAtM3B4IDAgYmxhY2ssIDAgM3B4IGJsYWNrLCAzcHggMCBibGFjaywgMCAtM3B4IGJsYWNrO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogdmFyKC0tZGlzcGxheSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCl7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOjJweDtcclxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xyXG4gIH1cclxuXHJcbiAgLndoaXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "OR/L":
/*!*****************************************************************!*\
  !*** ./src/app/tetris/score-counter/score-counter.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScoreCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCounterComponent", function() { return ScoreCounterComponent; });
/* harmony import */ var _Objets_score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objets/score */ "/9jf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScoreCounterComponent {
    constructor() {
        this.score = new _Objets_score__WEBPACK_IMPORTED_MODULE_0__["Score"]();
    }
    ngOnInit() {
        this.score = new _Objets_score__WEBPACK_IMPORTED_MODULE_0__["Score"]();
    }
}
ScoreCounterComponent.??fac = function ScoreCounterComponent_Factory(t) { return new (t || ScoreCounterComponent)(); };
ScoreCounterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ScoreCounterComponent, selectors: [["app-score-counter"]], inputs: { score: "score" }, decls: 7, vars: 3, consts: [["id", "scoreDiv"]], template: function ScoreCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("lines : ", ctx.score.lineScore, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" score : ", ctx.score.pointScore, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" speed : ", ctx.score.vitesse, "");
    } }, styles: ["p[_ngcontent-%COMP%]{\r\n  color:black;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  font-family: 'Press Start 2P';\r\n  padding-left: 10px;\r\n\r\n  border : 1px solid black;\r\n}\r\n\r\n#scoreDiv[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border : 1px solid black;\r\n  background-color: darkgrey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLWNvdW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixrQkFBa0I7O0VBRWxCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzY29yZS1jb3VudGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gIGJvcmRlciA6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI3Njb3JlRGl2e1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXIgOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PJCI":
/*!********************************************!*\
  !*** ./src/app/tetris/tetris.component.ts ***!
  \********************************************/
/*! exports provided: TetrisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrisComponent", function() { return TetrisComponent; });
/* harmony import */ var _grille_grille_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grille/grille.component */ "OJO1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _next_tetromino_next_tetromino_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./next-tetromino/next-tetromino.component */ "Q4TP");
/* harmony import */ var _score_counter_score_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score-counter/score-counter.component */ "OR/L");
/* harmony import */ var _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../command-bar/command-bar.component */ "FdzL");






class TetrisComponent {
    constructor() {
        this.fps = 60;
    }
    ngAfterViewInit() {
        setInterval(() => this.gameLoop(), 1000 / this.fps);
    }
    ngOnInit() {
    }
    gameLoop() {
        this.grille.draw();
    }
    nextTetrominoChangedHandler(nextTetromino) {
        this.nextTetromino = nextTetromino;
    }
    leftHandler() {
        this.grille.onArrowLeft();
    }
    rightHandler() {
        this.grille.onArrowRight();
    }
    downHandler() {
        this.grille.onArrowDown();
    }
    rotateHandler() {
        this.grille.onSpaceBar();
    }
    pauseHandler() {
        this.grille.onPause();
    }
    restartHandler() {
        this.grille.restart();
    }
    scoreChangedHandler(score) {
        this.score = score;
    }
}
TetrisComponent.??fac = function TetrisComponent_Factory(t) { return new (t || TetrisComponent)(); };
TetrisComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: TetrisComponent, selectors: [["app-tetris"]], viewQuery: function TetrisComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_grille_grille_component__WEBPACK_IMPORTED_MODULE_0__["GrilleComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.grille = _t.first);
    } }, decls: 6, vars: 2, consts: [["id", "grid", 1, "children", 3, "scoreChanged", "tetrominoChanged"], ["id", "scoreBar", 1, "children"], ["id", "nextTetromino", 3, "tetromino"], [3, "score"], ["id", "commandBar", 3, "left", "right", "down", "rotate", "pause", "restart"]], template: function TetrisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "app-grille", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("scoreChanged", function TetrisComponent_Template_app_grille_scoreChanged_1_listener($event) { return ctx.scoreChangedHandler($event); })("tetrominoChanged", function TetrisComponent_Template_app_grille_tetrominoChanged_1_listener($event) { return ctx.nextTetrominoChangedHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "app-next-tetromino", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-score-counter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "app-command-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("left", function TetrisComponent_Template_app_command_bar_left_5_listener() { return ctx.leftHandler(); })("right", function TetrisComponent_Template_app_command_bar_right_5_listener() { return ctx.rightHandler(); })("down", function TetrisComponent_Template_app_command_bar_down_5_listener() { return ctx.downHandler(); })("rotate", function TetrisComponent_Template_app_command_bar_rotate_5_listener() { return ctx.rotateHandler(); })("pause", function TetrisComponent_Template_app_command_bar_pause_5_listener() { return ctx.pauseHandler(); })("restart", function TetrisComponent_Template_app_command_bar_restart_5_listener() { return ctx.restartHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("tetromino", ctx.nextTetromino);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("score", ctx.score);
    } }, directives: [_grille_grille_component__WEBPACK_IMPORTED_MODULE_0__["GrilleComponent"], _next_tetromino_next_tetromino_component__WEBPACK_IMPORTED_MODULE_2__["NextTetrominoComponent"], _score_counter_score_counter_component__WEBPACK_IMPORTED_MODULE_3__["ScoreCounterComponent"], _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_4__["CommandBarComponent"]], styles: ["section[_ngcontent-%COMP%] {\r\n  display : flex;\r\n  flex-direction: line;\r\n  flex-wrap: wrap;\r\n  padding:5px;\r\n}\r\n\r\n.children[_ngcontent-%COMP%] {\r\n  margin:5px;\r\n}\r\n\r\n#scoreBar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 30px;\r\n}\r\n\r\n@media screen and (max-width: 780px){\r\n  #commandBar[_ngcontent-%COMP%] {\r\n    order: -1;\r\n    width:60%;\r\n  }\r\n\r\n  .children[_ngcontent-%COMP%]{\r\n    width: 100vw;\r\n    margin: 0px;\r\n  }\r\n\r\n  #grid[_ngcontent-%COMP%]{\r\n    height:75vh;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%]{\r\n    padding:0px;\r\n  }\r\n\r\n  #scoreBar[_ngcontent-%COMP%] {\r\n    margin-left: 0px;\r\n    width:100vw;\r\n    flex-direction: row;\r\n\r\n  flex-wrap: wrap;\r\n  }\r\n\r\n  #nextTetromino[_ngcontent-%COMP%]{\r\n    width:40%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1COztFQUVyQixlQUFlO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJ0ZXRyaXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5IDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogbGluZTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcbi5jaGlsZHJlbiB7XHJcbiAgbWFyZ2luOjVweDtcclxufVxyXG5cclxuI3Njb3JlQmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KXtcclxuICAjY29tbWFuZEJhciB7XHJcbiAgICBvcmRlcjogLTE7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG5cclxuICAuY2hpbGRyZW57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcblxyXG4gICNncmlke1xyXG4gICAgaGVpZ2h0Ojc1dmg7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9ue1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgfVxyXG5cclxuICAjc2NvcmVCYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgI25leHRUZXRyb21pbm97XHJcbiAgICB3aWR0aDo0MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Q4TP":
/*!*******************************************************************!*\
  !*** ./src/app/tetris/next-tetromino/next-tetromino.component.ts ***!
  \*******************************************************************/
/*! exports provided: NextTetrominoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTetrominoComponent", function() { return NextTetrominoComponent; });
/* harmony import */ var _Objets_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objets/grid */ "/5jz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NextTetrominoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div");
} if (rf & 2) {
    const square_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMapInterpolate1"]("cell ", square_r1.color, "");
} }
class NextTetrominoComponent {
    constructor() {
        this.grid = new _Objets_grid__WEBPACK_IMPORTED_MODULE_0__["Grid"](0, 0);
        this.lines = 5;
        this.columns = 5;
    }
    ngOnChanges() {
        this.refresh();
    }
    ngOnInit() {
        this.grid = new _Objets_grid__WEBPACK_IMPORTED_MODULE_0__["Grid"](this.lines, this.columns);
        this.refresh();
    }
    refresh() {
        if (this.tetromino != null) {
            this.grid.display(this.tetromino);
        }
    }
}
NextTetrominoComponent.??fac = function NextTetrominoComponent_Factory(t) { return new (t || NextTetrominoComponent)(); };
NextTetrominoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NextTetrominoComponent, selectors: [["app-next-tetromino"]], inputs: { tetromino: "tetromino" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]], decls: 2, vars: 1, consts: [["id", "next-grid", 1, "wrapper", "grid"], [3, "class", 4, "ngFor", "ngForOf"]], template: function NextTetrominoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, NextTetrominoComponent_div_1_Template, 1, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.grid.square_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 0px;\r\n  width: 128px;\r\n  position: relative;\r\n  border: 1px solid #050202;\r\n}\r\n\r\n\r\n.cell[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  display: inline-block;\r\n  border-width: 3px;\r\n  border-style: outset;\r\n}\r\n\r\n\r\n.purple[_ngcontent-%COMP%] {\r\n  background-color: #b857f0;\r\n  border-color:#b857f0;\r\n  box-shadow: inset 0 0 1px 1px #dc9ddf;\r\n}\r\n\r\n\r\n.white[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  border-color:black;\r\n  border-width: 1px;\r\n  width: 24px;\r\n  height: 24px;\r\n  border-style: solid;\r\n}\r\n\r\n\r\n.grey[_ngcontent-%COMP%] {\r\n  background-color: #95a5a6;\r\n  border-color: #95a5a6;\r\n  box-shadow: inset 0 0 1px 1px #ccd4d5;\r\n}\r\n\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  background-color: #39d352;\r\n  border-color:#39d352;\r\n  box-shadow: inset 0 0 1px 1px #7afd60;\r\n}\r\n\r\n\r\n.yellow[_ngcontent-%COMP%] {\r\n  background-color: #f3d528;\r\n  border-color:#f3e528;\r\n  box-shadow: inset 0 0 1px 1px #f0e588;\r\n}\r\n\r\n\r\n.turquoise[_ngcontent-%COMP%] {\r\n  background-color: #1abc9c;\r\n  border-color:#1abc9c;\r\n  box-shadow: inset 0 0 1px 1px #55e7ca;\r\n  filter: saturate(3);\r\n}\r\n\r\n\r\n.blue[_ngcontent-%COMP%] {\r\n  background-color: #0f6fc9;\r\n  border-color:#0f6fc9;\r\n  box-shadow: inset 0 0 1px 1px #0ba4eb;\r\n}\r\n\r\n\r\n.lightBlue[_ngcontent-%COMP%] {\r\n  background-color: #01A2E8;\r\n  border-color:#01A2E8;\r\n  box-shadow: inset 0 0 1px 1px #0ba4eb;\r\n  filter: saturate(3);\r\n}\r\n\r\n\r\n.orange[_ngcontent-%COMP%] {\r\n  background-color: #ff9100;\r\n  border-color:#ff9100;\r\n  box-shadow: inset 0 0 1px 1px #f7b02d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5leHQtdGV0cm9taW5vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFFBQVE7RUFDUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0FBQ3ZDOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIscUNBQXFDO0FBQ3ZDOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0FBQ3ZDOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0FBQ3ZDOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHFDQUFxQztBQUN2Qzs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7QUFDdkMiLCJmaWxlIjoibmV4dC10ZXRyb21pbm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgZ2FwOiAwcHg7XHJcbiAgd2lkdGg6IDEyOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDUwMjAyO1xyXG59XHJcblxyXG5cclxuLmNlbGwge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XHJcbn1cclxuXHJcbi5wdXJwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiODU3ZjA7XHJcbiAgYm9yZGVyLWNvbG9yOiNiODU3ZjA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggI2RjOWRkZjtcclxufVxyXG5cclxuLndoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5ncmV5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVhNWE2O1xyXG4gIGJvcmRlci1jb2xvcjogIzk1YTVhNjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCAjY2NkNGQ1O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWQzNTI7XHJcbiAgYm9yZGVyLWNvbG9yOiMzOWQzNTI7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggIzdhZmQ2MDtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZDUyODtcclxuICBib3JkZXItY29sb3I6I2YzZTUyODtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCAjZjBlNTg4O1xyXG59XHJcblxyXG4udHVycXVvaXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xyXG4gIGJvcmRlci1jb2xvcjojMWFiYzljO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4ICM1NWU3Y2E7XHJcbiAgZmlsdGVyOiBzYXR1cmF0ZSgzKTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjZmYzk7XHJcbiAgYm9yZGVyLWNvbG9yOiMwZjZmYzk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggIzBiYTRlYjtcclxufVxyXG5cclxuLmxpZ2h0Qmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxQTJFODtcclxuICBib3JkZXItY29sb3I6IzAxQTJFODtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCAjMGJhNGViO1xyXG4gIGZpbHRlcjogc2F0dXJhdGUoMyk7XHJcbn1cclxuXHJcbi5vcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XHJcbiAgYm9yZGVyLWNvbG9yOiNmZjkxMDA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggI2Y3YjAyZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'test-angular';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap", "rel", "stylesheet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tetris_grille_grille_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tetris/grille/grille.component */ "OJO1");
/* harmony import */ var _tetris_next_tetromino_next_tetromino_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tetris/next-tetromino/next-tetromino.component */ "Q4TP");
/* harmony import */ var _tetris_tetris_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tetris/tetris.component */ "PJCI");
/* harmony import */ var _tetris_score_counter_score_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tetris/score-counter/score-counter.component */ "OR/L");
/* harmony import */ var _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./command-bar/command-bar.component */ "FdzL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _tetris_grille_grille_component__WEBPACK_IMPORTED_MODULE_3__["GrilleComponent"],
        _tetris_next_tetromino_next_tetromino_component__WEBPACK_IMPORTED_MODULE_4__["NextTetrominoComponent"],
        _tetris_tetris_component__WEBPACK_IMPORTED_MODULE_5__["TetrisComponent"],
        _tetris_score_counter_score_counter_component__WEBPACK_IMPORTED_MODULE_6__["ScoreCounterComponent"],
        _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_7__["CommandBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tetris_tetris_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetris/tetris.component */ "PJCI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', redirectTo: '/tetris', pathMatch: 'full' },
    { path: 'tetris', component: _tetris_tetris_component__WEBPACK_IMPORTED_MODULE_1__["TetrisComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wlkB":
/*!********************************************!*\
  !*** ./src/app/tetris/Objets/tetromino.ts ***!
  \********************************************/
/*! exports provided: Tetromino, TetrominoI, TetrominoJ, TetrominoL, TetrominoO, TetrominoS, TetrominoT, TetrominoZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tetromino", function() { return Tetromino; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrominoI", function() { return TetrominoI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrominoJ", function() { return TetrominoJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrominoL", function() { return TetrominoL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrominoO", function() { return TetrominoO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrominoS", function() { return TetrominoS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrominoT", function() { return TetrominoT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrominoZ", function() { return TetrominoZ; });
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ "E72p");

class Tetromino {
    constructor(color = "purple") {
        this.color = color;
        this.centerPosX = 4;
        this.centerPosY = -1;
        this.directions = new Array();
        this.locked = false;
        this.blocks = this.directions[0];
    }
    display(square_list) {
        square_list.filter(square => square.filled == false).map(square => square.color = "white");
        this.blocks.forEach(block => {
            let square = square_list.find(square => square.height_position == (block.height_position + this.centerPosY) && square.width_position == (block.width_position + this.centerPosX));
            if (square != undefined) {
                square.color = this.color;
            }
        });
    }
    lock(grid) {
        this.blocks.forEach(block => {
            let square = grid.square_list.find(square => square.height_position == (block.height_position + this.centerPosY) && square.width_position == (block.width_position + this.centerPosX));
            if (square != undefined) {
                square.filled = true;
                square.color = this.color;
            }
        });
        this.locked = true;
    }
    rotate(grid) {
        let index = this.directions.findIndex(direction => this.blocks == direction);
        if (index < this.directions.length - 1) {
            this.blocks = this.directions[index + 1];
            if (!this.isLegal(grid, 0)) {
                this.blocks = this.directions[index];
            }
        }
        else {
            this.blocks = this.directions[0];
            if (!this.isLegal(grid, 0)) {
                this.blocks = this.directions[index];
            }
        }
    }
    isLegal(grid, direction) {
        let resultat = true;
        let posXOffset = 0;
        let posYOffset = 0;
        if (direction == 1) {
            posXOffset--;
        }
        else if (direction == 2) {
            posYOffset++;
        }
        else if (direction == 3) {
            posXOffset++;
        }
        this.getBlocks().forEach(block => {
            if (this.centerPosY + block.height_position + posYOffset >= grid.height || block.isFilled(grid, this.centerPosY + posYOffset, this.centerPosX)) {
                resultat = false;
            }
            if ((this.centerPosX + block.width_position + posXOffset < 0) || (this.centerPosX + block.width_position + posXOffset >= grid.width) || block.isFilled(grid, this.centerPosY, this.centerPosX + posXOffset)) {
                resultat = false;
            }
        });
        return resultat;
    }
    getBlocks() {
        return this.blocks;
    }
    checkAndMoveDown(grid) {
        if (this.isLegal(grid, 2)) {
            this.centerPosY++;
        }
        else {
            this.lock(grid);
        }
    }
    checkAndMoveLeft(grid) {
        if (this.isLegal(grid, 1)) {
            this.centerPosX--;
        }
    }
    checkAndMoveRight(grid) {
        if (this.isLegal(grid, 3)) {
            this.centerPosX++;
        }
    }
}
class TetrominoI extends Tetromino {
    constructor() {
        super(...arguments);
        this.position1 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](2, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0));
        this.position2 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 2));
        this.directions = new Array(this.position1, this.position2);
        this.blocks = this.position1;
    }
    setStartPosition() {
        this.centerPosY = -3;
        this.centerPosX = 4;
    }
    setDefaultPosition() {
        this.centerPosY = 2;
        this.centerPosX = 2;
    }
}
class TetrominoJ extends Tetromino {
    constructor() {
        super(...arguments);
        this.position1 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, +1));
        this.position2 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0));
        this.position3 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 1));
        this.position4 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, -1));
        this.directions = new Array(this.position1, this.position2, this.position3, this.position4);
        this.blocks = this.position1;
    }
    setStartPosition() {
        this.centerPosY = -1;
        this.centerPosX = 4;
    }
    setDefaultPosition() {
        this.centerPosY = 2;
        this.centerPosX = 2;
    }
}
class TetrominoL extends Tetromino {
    constructor() {
        super(...arguments);
        this.position1 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 1));
        this.position2 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 1));
        this.position3 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, -1));
        this.position4 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, -1));
        this.directions = new Array(this.position1, this.position2, this.position3, this.position4);
        this.blocks = this.position1;
    }
    setStartPosition() {
        this.centerPosY = -1;
        this.centerPosX = 4;
    }
    setDefaultPosition() {
        this.centerPosY = 2;
        this.centerPosX = 2;
    }
}
class TetrominoO extends Tetromino {
    constructor() {
        super(...arguments);
        this.position1 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 1));
        this.directions = new Array(this.position1);
        this.blocks = this.position1;
    }
    setStartPosition() {
        this.centerPosY = -2;
        this.centerPosX = 4;
    }
    setDefaultPosition() {
        this.centerPosY = 2;
        this.centerPosX = 2;
    }
}
class TetrominoS extends Tetromino {
    constructor() {
        super(...arguments);
        this.position1 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 1));
        this.position2 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-2, 0));
        this.directions = new Array(this.position1, this.position2);
        this.blocks = this.position1;
    }
    setStartPosition() {
        this.centerPosY = -1;
        this.centerPosX = 4;
    }
    setDefaultPosition() {
        this.centerPosY = 2;
        this.centerPosX = 2;
    }
}
class TetrominoT extends Tetromino {
    constructor() {
        super(...arguments);
        this.position1 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0));
        this.position2 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1));
        this.position3 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 1));
        this.position4 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1));
        this.directions = new Array(this.position1, this.position2, this.position3, this.position4);
        this.blocks = this.position1;
    }
    setStartPosition() {
        this.centerPosY = -1;
        this.centerPosX = 4;
    }
    setDefaultPosition() {
        this.centerPosY = 2;
        this.centerPosX = 2;
    }
}
class TetrominoZ extends Tetromino {
    constructor() {
        super(...arguments);
        this.position1 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, 1));
        this.position2 = new Array(new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](-1, 0), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](0, -1), new _square__WEBPACK_IMPORTED_MODULE_0__["Square"](1, -1));
        this.directions = new Array(this.position1, this.position2);
        this.blocks = this.position1;
    }
    setStartPosition() {
        this.centerPosY = -2;
        this.centerPosX = 4;
    }
    setDefaultPosition() {
        this.centerPosY = 2;
        this.centerPosX = 2;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map