window.onload = function() {
  const canvas = document.getElementById("catchEgg");
  const ctx = canvas.getContext("2d");

  let game = new Game(ctx, winGame, gameOver);

  document.getElementById("startBTN").addEventListener("click", start);

  document.getElementById("restartBTN").addEventListener("click", restart);

  function winGame(score) {
    let parent = document.getElementById("canvas-conteiner");
    let divWin = document.createElement("div");
    divWin.setAttribute("id", "mensaje");
    divWin.className = "win-div";
    divWin.innerHTML = `<h1> THE GOAL IS REACHED,YOU WIN</h1>
`;
    parent.prepend(divWin);
  }

  function gameOver(score) {
    let parent = document.getElementById("canvas-conteiner");
    let divGameOver = document.createElement("div");
    divGameOver.setAttribute("id", "mensaje");
    divGameOver.className = "game-over";
    divGameOver.innerHTML = `<h1> GAME OVER</h1>
                            <p>YOUR SCORE: ${score}</p>
    `;
    parent.prepend(divGameOver);
  }

  function clearScreen() {
    let parent = document.getElementById("canvas-conteiner");
    if (parent.children.length > 1) {
      let children = document.getElementById("mensaje");
      parent.removeChild(children);
    }
  }

  function restart() {
    clearScreen();
    game.restart.bind(game)();
  }

  function start() {
    clearScreen();
    game.start.bind(game)();
  }
};
