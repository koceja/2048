/*
Add your code for Game here
*/

export default class Game {
    constructor(size) {
        this.size = size;
        this.board = [];
        this.score = 0;
        this.twos = 0.9;
        this.fours = 0.1;
        this.moveListeners = [];
        this.winListeners = [];
        this.loseListeners = [];
        this.won = false;
        this.over = false;

        this.setupNewGame();
    }

    setupNewGame() {
        const newBoard = [];
        for (let i = 0; i < this.size * this.size; i++) {
            newBoard[i] = 0;
        }
        this.generateNum(newBoard, 2);
        this.board = newBoard;
        this.won = false;
        this.over = false;
        this.score = 0;
    }

    loadGame(gameState) {
        this.board = gameState.board;
        this.score = gameState.score;
        this.won = gameState.won;
        this.over = gameState.over;
    }

    move(direction) {
        const board = this.board;
        let win = false;
        let moved = false;
        switch (direction) {
            case 'up':
                for (let x = 0; x < this.size; x++) {
                    const newRow = [];
                    for (let y = 0; y < this.size; y++) {
                        const spot = this.getSpot(x, y);
                        if (board[spot] !== 0) {
                            newRow.push(board[spot]);
                        }
                    }
                    const resultRow = [];
                    for (let i = 0; i < newRow.length; i++) {
                        if (i === 0) {
                            resultRow.push(newRow[i]);
                        } else if (newRow[i] === newRow[i - 1]) {
                            this.score += newRow[i] * 2;
                            if (newRow[i] * 2 === 2048) {
                                win = true;
                            }
                            resultRow[resultRow.length - 1] = newRow[i] * 2;
                            newRow[i] = 0;
                        } else {
                            resultRow.push(newRow[i]);
                        }
                    }

                    while (resultRow.length < this.size) {
                        resultRow.push(0);
                    }
                    for (let i = 0; i < this.size; i++) {
                        const spot = this.getSpot(x, i);
                        if (resultRow[i] !== board[spot]) {
                            moved = true;
                        }
                        board[spot] = resultRow[i];
                    }
                }
                break;
            case 'down':
                for (let x = 0; x < this.size; x++) {
                    const newRow = [];
                    for (let y = this.size - 1; y >= 0; y--) {
                        const spot = this.getSpot(x, y);
                        if (board[spot] !== 0) {
                            newRow.push(board[spot]);
                        }
                    }
                    const resultRow = [];
                    for (let i = 0; i < newRow.length; i++) {
                        if (i === 0) {
                            resultRow.push(newRow[i]);
                        } else if (newRow[i] === newRow[i - 1]) {
                            this.score += newRow[i] * 2;
                            if (newRow[i] * 2 === 2048) {
                                win = true;
                            }
                            resultRow[resultRow.length - 1] = newRow[i] * 2;
                            newRow[i] = 0;
                        } else {
                            resultRow.push(newRow[i]);
                        }
                    }

                    while (resultRow.length < this.size) {
                        resultRow.push(0);
                    }
                    for (let i = 0; i < this.size; i++) {
                        const spot = this.getSpot(x, this.size - i - 1);
                        if (resultRow[i] !== board[spot]) {
                            moved = true;
                        }
                        board[spot] = resultRow[i];
                    }
                }
                break;
            case 'left':
                for (let y = 0; y < this.size; y++) {
                    const newRow = [];
                    for (let x = 0; x < this.size; x++) {
                        const spot = this.getSpot(x, y);
                        if (board[spot] !== 0) {
                            newRow.push(board[spot]);
                        }
                    }
                    const resultRow = [];
                    for (let i = 0; i < newRow.length; i++) {
                        if (i === 0) {
                            resultRow.push(newRow[i]);
                        } else if (newRow[i] === newRow[i - 1]) {
                            this.score += newRow[i] * 2;
                            if (newRow[i] * 2 === 2048) {
                                win = true;
                            }
                            resultRow[resultRow.length - 1] = newRow[i] * 2;
                            newRow[i] = 0;
                        } else {
                            resultRow.push(newRow[i]);
                        }
                    }

                    while (resultRow.length < this.size) {
                        resultRow.push(0);
                    }
                    for (let i = 0; i < this.size; i++) {
                        const spot = this.getSpot(i, y);
                        if (resultRow[i] !== board[spot]) {
                            moved = true;
                        }
                        board[spot] = resultRow[i];
                    }
                }
                break;
            case 'right':
                for (let y = 0; y < this.size; y++) {
                    const newRow = [];
                    for (let x = this.size - 1; x >= 0; x--) {
                        const spot = this.getSpot(x, y);
                        if (board[spot] !== 0) {
                            newRow.push(board[spot]);
                        }
                    }
                    const resultRow = [];
                    for (let i = 0; i < newRow.length; i++) {
                        if (i === 0) {
                            resultRow.push(newRow[i]);
                        } else if (newRow[i] === newRow[i - 1]) {
                            this.score += newRow[i] * 2;
                            if (newRow[i] * 2 === 2048) {
                                win = true;
                            }
                            resultRow[resultRow.length - 1] = newRow[i] * 2;
                            newRow[i] = 0;
                        } else {
                            resultRow.push(newRow[i]);
                        }
                    }

                    while (resultRow.length < this.size) {
                        resultRow.push(0);
                    }
                    for (let i = 0; i < this.size; i++) {
                        const spot = this.getSpot(this.size - i - 1, y);
                        if (resultRow[i] !== board[spot]) {
                            moved = true;
                        }
                        board[spot] = resultRow[i];
                    }
                }
                break;
            default:
                return;
        }
        this.board = board;

        if (win) {
            this.won = true;
            const winListeners = this.winListeners;
            for (let i = 0; i < winListeners.length; i++) {
                winListeners[i](this.getGameState());
            }
        } else if (moved) {
            this.generateNum(this.board, 1);
            if (this.checkLose()) {
                this.over = true;
                const loseListeners = this.loseListeners;
                for (let i = 0; i < loseListeners.length; i++) {
                    loseListeners[i](this.getGameState());
                }
            } else if (moved) {
                const moveListeners = this.moveListeners;
                for (let i = 0; i < moveListeners.length; i++) {
                    moveListeners[i](this.getGameState());
                }
            }
        }

    }

    generateNum(board, amount) {
        const openSpots = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === 0) {
                openSpots.push(i);
            }
        }
        for (let i = 0; i < amount; i++) {
            const rand = Math.floor(Math.random() * openSpots.length);
            const spot = openSpots[rand];
            const temp = openSpots[openSpots.length - 1]
            openSpots[openSpots.length - 1] = spot;
            openSpots[rand] = temp;
            openSpots.pop();
            board[spot] = (Math.random() <= this.twos) ? 2 : 4;

        }
    }

    checkLose() {
        const board = this.board;
        for (let x = 0; x < this.size - 1; x++) {
            for (let y = 0; y < this.size - 1; y++) {
                const curr = this.getSpot(x, y);
                const down = this.getSpot(x, y + 1);
                const right = this.getSpot(x + 1, y);
                if (board[curr] === 0 || board[curr] === board[down] || board[curr] === board[right]) {

                    return false;
                }
            }
        }
        for (let x = 0; x < this.size; x++) {
            const curr = this.getSpot(x, this.size - 1);
            const right = this.getSpot(x + 1, this.size - 1);

            if (board[curr] === 0 || board[curr] === board[right]) {

                return false;
            }
        }
        for (let y = 0; y < this.size; y++) {
            const curr = this.getSpot(this.size - 1, y);
            const down = this.getSpot(this.size - 1, y + 1);

            if (board[curr] === 0 || board[curr] === board[down]) {
                return false;
            }
        }

        return true;
    }

    toString() {
        const size = this.size;
        const board = this.board;
        let result = ``;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                result += `[${(board[this.getSpot(j, i)] === 0) ? " " : board[this.getSpot(j, i)]}] `;
            }
            if (i !== size - 1) {
                result += '\n';
            }
        }

        return result;
    }

    onMove(callback) {
        this.moveListeners.push(callback);
    }

    onWin(callback) {
        this.winListeners.push(callback);
    }

    onLose(callback) {
        this.loseListeners.push(callback);
    }

    unregisterOnMove(callback) {
        const idx = this.moveListeners.indexOf(callback);
        this.moveListeners.splice(idx, 1);
    }

    unregisterOnWin(callback) {
        const idx = this.winListeners.indexOf(callback);
        this.winListeners.splice(idx, 1);
    }

    unregisterOnLose(callback) {
        const idx = this.loseListeners.indexOf(callback);
        this.loseListeners.splice(idx, 1);
    }

    getGameState() {
        return {
            board: this.board,
            score: this.score,
            won: this.won,
            over: this.over
        };
    }

    getSpot(x, y) {
        return (y * this.size + x);
    }


}