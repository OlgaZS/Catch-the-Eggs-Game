window.onload = function() {
  const canvas = document.getElementById("catchEgg");
  const ctx = canvas.getContext("2d");

  let game = new Game(ctx);
  game.start();
};
