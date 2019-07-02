class Player {
  constructor() {
    this.width = 30;
    this.height = 30;
    this.position = {
      x: 800 / 2 - this.width,
      y: 600 - this.height - 10
    };
  }
  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle("#2FC6B1");
  }

  moveLeft() {}
  moveRight() {}
}
