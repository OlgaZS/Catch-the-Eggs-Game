class Player {
  constructor() {
    this.width = 60;
    this.height = 60;
    this.position = {
      x: 800 / 2 - this.width,
      y: 500 - this.height - 10
    };
    // this.intervalID = undefined;
  }

  // playSound() {
  //   const playerSound = new SourceBuffer();
  //   playerSound.src = "/sounds/dropSound.wav";

  //   this.playSound.play();
  // }

  moveLeft() {
    if (this.position.x >= 40) {
      // si no se cumple  ->  ejecuta movimiento
      this.position.x -= 50;
    }
  }

  moveRight() {
    if (this.position.x + this.width <= 800 - 50) {
      this.position.x += 50;
    }
  }
}
