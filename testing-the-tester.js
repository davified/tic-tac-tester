$(function() {

$('.grid').click(function() {

  id = parseInt(this.id);
  playTurn(id)
  
  console.log("winner: " + whoWon())

})

$('.restart').click(restart);

/*tic tac toe logic goes here:  */

var grid = [null, null, null, null, null, null, null, null, null]
var player = "x"

function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    $("#" + index).text(player);
    if (player === "x") player = "o"
    else player = "x"
    return true   // need to add if/else conditional to detect if game is over.
  }
}

function isGameOver () {
  if (whoWon()) return true
  return false
}

// function showWinner() {
//   if (whoWon() === "x") {
//     alert("player X wins!")
//   }
//   else if (whoWon() === "o") {
//     alert("player O wins!")
//   }
//   else if (whoWon() === 3 ) {
//     alert("It's a draw! Try again!")
//   }
//   else{}
// }

function whoWon () {
  if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
  if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
  if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
  if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
  if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
  if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
  if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
  if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8]) return 3
  return 0
}


function restart () {
  grid = [null, null, null, null, null, null, null, null, null]
  player = "x"
  $('.grid').empty();
}

// function countScore() {
//   xWins = 0;
//   oWins = 0;
//   if (whoWon() == "x") {
//     return xWins++
//   }
//   else if (whoWon() == "o") {
//     return oWins++
//   }
//   else {

//   }
// }



})
