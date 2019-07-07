class Player {
  constructor() {
    this.width = 40;
    this.height = 40;
    this.position = {
      x: 800 / 2 - this.width,
      y: 600 - this.height - 10
    };
  }

  moveLeft() {
    if (this.position.x >= 50) {
      // si no se cumple  ->  ejecuta movimiento
      this.position.x -= 50;
    }
  }

  moveRight() {
    if (this.position.x + this.width <= 800 - 50) {
      this.position.x += 50;
    }
  }

  collidesWith() {}
}
