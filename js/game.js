class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player();
  }

  start() {
    this.player.draw(this.ctx);
  }
}
