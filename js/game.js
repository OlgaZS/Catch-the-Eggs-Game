class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.points = 0;
    this.player = new Player();
    this.egg = new Egg("whiteEgg", 1, 10, Math.floor(Math.random() * 750), 20);
    this.intervalGame = undefined;
    this.gameOver = undefined;
  }

  start() {
    this.addControlToKeys();
    this.egg.startDrop();
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

  _checkEggHitBottom() {
    if (this.egg.y > 600) {
      this.egg.y = 20;
    }
  }

  _drawEgg() {
    this.ctx.fillStyle = "violet";
    this.ctx.fillRect(this.egg.x, this.egg.y, this.egg.width, this.egg.height);
  }

  addControlToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 38: // arrow up
          // console.log("key up");
          break;
        case 40: // arror down
          // console.log("key down");
          break;
        case 37:
          this.player.moveLeft(); // arror left
          // console.log("key left");
          // console.log(this.player.position.x);
          break;
        case 39:
          this.player.moveRight(); // arrow right
          // console.log("key right");
          // console.log(this.player.position.x);
          break;
        case 80: // p pause
          this.egg.interval ? this.egg.stop() : this.egg.startDrop();
          break;
      }
    };
  }

  update() {
    this.ctx.clearRect(0, 0, 800, 600);
    this._drawPlayer();
    this._drawEgg();
    this.collission();
    this._checkEggHitBottom();
    window.requestAnimationFrame(this.update.bind(this));
  }

  pause() {
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    }
  }

  collission() {
    const eggBottonLeftX = this.egg.x + this.egg.height;
    const playerTopLeftX = this.player.position.x;
    const playerTopRightX = this.player.position.x + this.player.width;
    const eggBottonRightX = this.egg.x + this.egg.width;
    const eggBottonY = this.egg.y;
    const playerTop = this.player.position.y;
    if (
      ((eggBottonLeftX >= playerTopLeftX &&
        eggBottonLeftX <= playerTopRightX) ||
        (eggBottonRightX >= playerTopLeftX &&
          eggBottonRightX <= playerTopRightX)) &&
      //eggBottonY >= playerTop
      eggBottonY === playerTop
    ) {
      console.log("Collission");
      this.points += this.egg.points;
      console.log(`Points: ${this.points}`);
    }
  }
}
