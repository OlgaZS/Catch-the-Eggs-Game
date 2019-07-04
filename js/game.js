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
        case 37:
          this.player.moveLeft(); // arror left
          console.log("key left");
          console.log(this.player.position.x);
          break;
        case 39:
          this.player.moveRight(); // arrow right
          console.log("key right");
          console.log(this.player.position.x);
          break;
        case 80: // p pause
          break;
      }
    };
  }

  update() {
    this.ctx.clearRect(0, 0, 800, 600);
    console.log("update");
    this._drawPlayer();
    window.requestAnimationFrame(this.update.bind(this));
  }
}
