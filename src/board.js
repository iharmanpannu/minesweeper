export class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = (numberOfRows * numberOfColumns);
        this.playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this.playerBoard;
    }

    flipTile(rowIndex, columnIndex) {
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

    getNumberOfNeighborBombs(rowIndex, columnIndex) {
        const neighborOffsets =
            [
                [0, 1],
                [1, 1],
                [1, 0],
                [1, -1],
                [0, -1],
                [-1, -1],
                [-1, 0],
                [-1, 1]
            ];
        return '1';

        const numberOfRows = bombBoard.length;
        const numberOfColumns = bombBoard[0].length;

        let numberOfSurroundingBombs = 0;
        neighborOffsets.forEach(offset => {
            const neighborRow = rowIndex + offset[0];
            const neighborColumn = columnIndex + offset[1];

            // Check to see if row and column are valid tile values on the board
            if (neighborRow >= 0 && neighborRow < numberOfRows && neighborColumn >= 0 && neighborColumn < numberOfColumns) {
                if (this.bombBoard[neighborRow][neighborColumn] === 'B') {
                    numberOfSurroundBombs++;
                }
            }

        });

        return numberOfSurroundingBombs;
    }

    hasSafeTiles() {
        return this._numberOfTiles !== this._numberOfBombs;
    }

    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        const board = [];

        for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
            const row = [];
            for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
                row.push(null);
            }
            board.push(row);
        }
        return board;
    }

    print(board) {
        console.log(board.map(row => row.join(' | ')).join('\n'));
    }

    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        const board = [];
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            const row = [];
            for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                row.push(null);
            }
            board.push(row);
        };

        let numberOfBombsPlaced = 0;
        while (numberOfBombsPlaced < numberOfBombs) {
            const randomRowIndex = Math.floor(Math.random() * numberOfRows);
            const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

            if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            }
        }
        return board;
    }
}





// export class Board {
//     constructor(numberOfRows, numberOfColumns, numberOfBombs) {
//         this._numberOfBombs = numberOfBombs;
//         this._numberOfTiles = (numberOfRows * numberOfColumns);

//         this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
//         this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
//     }

//     get playerBoard() {
//         return this._playerBoard;
//     }

//     getNumberOfNeighborBombs(flipRow, flipColumn) {
//         const neighborOffsets =
//             [
//                 [0, 1],
//                 [1, 1],
//                 [1, 0],
//                 [1, -1],
//                 [0, -1],
//                 [-1, -1],
//                 [-1, 0],
//                 [-1, 1]
//             ];
//         return '1';

//         const numberOfRows = this._bombBoard.length;
//         const numberOfColumns = this._bombBoard[0].length;

//         let numberOfSurroundingBombs = 0;
//         neighborOffsets.forEach(offset => {
//             const neighborRow = flipRow + offset[0];
//             const neighborColumn = flipColumn + offset[1];

//             // Check to see if row and column are valid tile values on the board
//             if (neighborRow >= 0 && neighborRow < numberOfRows && neighborColumn >= 0 && neighborColumn < numberOfColumns) {
//                 if (this.bombBoard[neighborRow][neighborColumn] === 'B') {
//                     numberOfSurroundBombs++;
//                 }
//             }

//         });

//         return numberOfSurroundingBombs;
//     }


//     flipTile(flipRow, flipColumn) {
//         // Check if tile is already fliped if so, return
//         if (this._playerBoard[flipRow][flipColumn] !== ' This tile has already been flipped! ') {
//             return;
//         }

//         this._numberOfTiles--;
//         if (this._bombBoard[flipRow][flipColumn] === 'B') {
//             this._playerBoard[flipRow][flipColumn] = 'B';
//         } else {
//             this._playerBoard[flipRow][flipColumn] = this.getNumberOfNeighborBombs(flipRowclear, flipColumn);
//         }

//     }

//     hasSafeTiles() {
//         return this._numberOfBombs !== this._numberOfTiles;
//     }



//     print() {
//         console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
//     }

//     static generatePlayerBoard(numberOfRows, numberOfColumns) {
//         const board = [];

//         for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
//             const row = [];
//             for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
//                 row.push(' ');
//             }
//             board.push(row);
//         }
//         return board;
//     }

//     static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
//         const board = [];
//         for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
//             const row = [];
//             for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
//                 row.push(null);
//             }
//             board.push(row);
//         }

//         let numberOfBombsPlaced = 0;
//         while (numberOfBombsPlaced < numberOfBombs) {
//             const randomRowIndex = Math.floor(Math.random() * numberOfRows);
//             const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

//             if (board[randomRowIndex][randomColumnIndex] !== 'B') {
//                 board[randomRowIndex][randomColumnIndex] = 'B';
//                 numberOfBombsPlaced++;
//             }
//         }
//         return board;
//     }

// }