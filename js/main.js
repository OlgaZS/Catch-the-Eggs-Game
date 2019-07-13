window.onload = function() {
  const canvas = document.getElementById("catchEgg");
  const ctx = canvas.getContext("2d");

  let game = new Game(ctx);

  document
    .getElementById("startBTN")
    .addEventListener("click", game.start.bind(game));

  document
    .getElementById("restartBTN")
    .addEventListener("click", game.restart.bind(game));
};

// game.start();
