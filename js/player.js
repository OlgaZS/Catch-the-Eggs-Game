class Player {
  constructor() {
    this.width = 30;
    this.height = 30;
    this.position = {
      x: 800 / 2 - this.width,
      y: 600 - this.height - 10
    };
  }

  moveLeft() {
    this.position.x = -5;
  }

  moveRight() {
    this.position.x = +5;
  }
}
