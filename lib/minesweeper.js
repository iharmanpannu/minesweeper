'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Game);

        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Game, [{
        key: 'playMove',
        value: function playMove(rowIndex, columnIndex) {
            this.board.flipTile(rowIndex, columnIndex);

            if (this.board.playerBoard[rowIndex][columnIndex] === 'B') {
                console.log('Game is Over');
                this.board.print();
            } else if (this.board.playerBoard[rowIndex][columnIndex] === '') {
                console.log('Congratulations you have won!');
            } else {
                console.log('Current Board: ');
                print(board);
            }
        }
    }]);

    return Game;
}();

var Board = function () {
    function Board(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Board);

        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this.playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Board, [{
        key: 'flipTile',
        value: function flipTile(rowIndex, columnIndex) {
            // Check if tile is already fliped if so, return
            if (this._playerBoard[rowIndex][columnIndex] !== ' This tile has already been flipped! ') {
                return;
            }
            // Check if tile is bomb if so, place bomb on player board

            if (this._bombBoard[rowIndex][columnIndex] === 'B') {
                this._playerBoard[rowIndex][columnIndex] = 'B';
            } else {
                this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
            }
            this._numberOfTiles--;
        }
    }, {
        key: 'getNumberOfNeighborBombs',
        value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
            var _this = this;

            var neighborOffsets = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
            return '1';

            var numberOfRows = bombBoard.length;
            var numberOfColumns = bombBoard[0].length;

            var numberOfSurroundingBombs = 0;
            neighborOffsets.forEach(function (offset) {
                var neighborRow = rowIndex + offset[0];
                var neighborColumn = columnIndex + offset[1];

                // Check to see if row and column are valid tile values on the board
                if (neighborRow >= 0 && neighborRow < numberOfRows && neighborColumn >= 0 && neighborColumn < numberOfColumns) {
                    if (_this.bombBoard[neighborRow][neighborColumn] === 'B') {
                        numberOfSurroundBombs++;
                    }
                }
            });

            return numberOfSurroundingBombs;
        }
    }, {
        key: 'hasSafeTiles',
        value: function hasSafeTiles() {
            return this._numberOfTiles !== this._numberOfBombs;
        }
    }, {
        key: 'print',
        value: function print(board) {
            console.log(board.map(function (row) {
                return row.join(' | ');
            }).join('\n'));
        }
    }, {
        key: 'playerBoard',
        get: function get() {
            return this.playerBoard;
        }
    }], [{
        key: 'generatePlayerBoard',
        value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
            var board = [];

            for (var rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
                var row = [];
                for (var columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
                    row.push(null);
                }
                board.push(row);
            }
            return board;
        }
    }, {
        key: 'generateBombBoard',
        value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
            var board = [];
            for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
                var row = [];
                for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                    row.push(null);
                }
                board.push(row);
            };

            var numberOfBombsPlaced = 0;
            while (numberOfBombsPlaced < numberOfBombs) {
                var randomRowIndex = Math.floor(Math.random() * numberOfRows);
                var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

                if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                    board[randomRowIndex][randomColumnIndex] = 'B';
                    numberOfBombsPlaced++;
                }
            }
            return board;
        }
    }]);

    return Board;
}();

var board = new Board(3, 3, 4);
console.log('Current Board');
board.print();
board.flipTile(1, 1);
board.print();

var playerBoard = generatePlayerBoard(3, 3);
var bombBoard = generateBombBoard(3, 3, 3);

printBoard(bombBoard);
console.log(getNumberOfNeighborBombs(bombBoard, 0, 0));

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 1, 1);
console.log('Updated Player Board : ');
printBoard(playerBoard);

var g = new Game(3, 3, 4);
game.playMove(4, 6);