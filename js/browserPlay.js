$("#game-start-button").on("click", beginGame);

function beginGame() {
  var whatGame = $('#game-start-button').attr("data-value")
  $("#game-start-button").remove();
  $("#gameplay-frame").load(`${whatGame}`);
}
