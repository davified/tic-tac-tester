// # Tic-Tac-Tester.js
// This script will test the game logic of your tic tac toe game. To use it you will need to include it in your html file after you main tic-tac-toe script. You will need to declare the following functions in the global scope: 

// It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played. 
// It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

var grid = new Array(9)
var player = 1

function playTurn(index) {
	if (grid[index] || isGameOver()) {
		return false
	} else {
		grid[index] = player
		if (player === 1) player = 2
		else player = 1
		return true
	}
}

// It should return a true or false if the game is over.
function isGameOver() {
	if (whoWon() !== true) return false;
	return true
}

// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
function whoWon() {
	if ((grid[0] == grid[1]) && (grid[0] == grid[2]) && grid[0]) return grid[0]
	if ((grid[3] == grid[4]) && (grid[3] == grid[5]) && grid[3]) return grid[3]
	if ((grid[6] == grid[7]) && (grid[6] == grid[8]) && grid[6]) return grid[6]
	if ((grid[0] == grid[3]) && (grid[0] == grid[6]) && grid[0]) return grid[0]
	if ((grid[1] == grid[4]) && (grid[1] == grid[5]) && grid[1]) return grid[1]
	if ((grid[2] == grid[5]) && (grid[2] == grid[6]) && grid[2]) return grid[2]
	if ((grid[0] == grid[4]) && (grid[0] == grid[8]) && grid[0]) return grid[0]
	if ((grid[2] == grid[4]) && (grid[2] == grid[6]) && grid[2]) return grid[2]
	if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] &&
		grid[6] && grid[7] && grid[8]) return 3
	return 0
}

// It should restart the game so it can be played again.
function restart() {
	if (whoWon())
		grid = new Array(9)
}

// It is assumed that the turns of the player will be automatically changed after an allowed move.

