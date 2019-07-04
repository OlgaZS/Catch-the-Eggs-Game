class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player();
  }

  start() {
    this.addControlToKeys();
    window.requestAnimationFrame(this.update.bind(this));
  }

  _drawPlayer() {
    this.ctx.fillStyle = "#2FC6B1";
    this.ctx.fillRect(
      this.player.position.x,
      this.player.position.y,
      this.player.width,
      this.player.height
    );
  }

  addControlToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 38: // arrow up
          console.log("key up");
          break;
        case 40: // arror down
          console.log("key down");
          break;
        case 37: // arror left
          console.log("key left");
          break;
        case 39: // arrow right
          console.log("key right");
          break;
        case 80: // p pause
          break;
      }
    };
  }

  update() {
    console.log("update");
    this._drawPlayer();
    window.requestAnimationFrame(this.update.bind(this));
  }
}
