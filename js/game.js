class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.points = 0;
    this.life = 3;
    this.player = new Player();
    this.egg = new Egg("whiteEgg", 1, 15, 100, 20);
    this.egg2 = new Egg("blackEgg", -2, 10, 300, 20);
    this.intervalGame = undefined;
    this.gameOver = undefined;
  }

  start() {
    console.log("start!!!", this);
    this.addControlToKeys();
    this.egg.startDrop(100);
    this.egg2.startDrop(200);
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }

  restart() {
    this.points = 0;
    this.life = 3;
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    }

    this.start();
  }

  _drawPlayer() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(
      this.player.position.x,
      this.player.position.y,
      this.player.width,
      this.player.height
    );
  }

  _resetEgg() {
    this.egg.y = 20;
    this.egg.x = Math.floor(Math.random() * 750);

    this.egg2.y = 20;
    this.egg2.x = Math.floor(Math.random() * 750);
  }

  _checkEggHitBottom() {
    if (this.egg.y > 500 || this.egg2.y > 500) {
      this.life -= 1;
      this._resetEgg();
      console.log(this.life);
    }
  }

  _drawEgg() {
    this.ctx.fillStyle = "white";
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
    if (this.life > 0 && this.points < 3) {
      this.ctx.clearRect(0, 0, 800, 500);
      this._drawPlayer();
      this._drawEgg(this.egg); // sin parametro antes
      this.collission();
      this._checkEggHitBottom();
      window.requestAnimationFrame(this.update.bind(this));
    } else if (this.points === 3) {
      this._winGame();
    } else {
      this._gameOver();
    }
  }

  pause() {
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    }
  }

  collission() {
    const eggBottonLeftX = this.egg.x;
    const eggBottonleftY = this.egg.y + this.egg.height;

    const playerTopLeftX = this.player.position.x;
    const playerTopLeftY = this.pla;
    const playerTopRightX = this.player.position.x + this.player.width;

    const eggBottonRightX = this.egg.x + this.egg.width;
    const eggBottonRightY = this.egg.y + this.egg.height;

    const eggBottonY = this.egg.y + this.egg.height;
    const playerTop = this.player.position.y;
    if (
      ((eggBottonLeftX >= playerTopLeftX &&
        eggBottonLeftX <= playerTopRightX) ||
        (eggBottonRightX >= playerTopLeftX &&
          eggBottonRightX <= playerTopRightX)) &&
      eggBottonY >= playerTop
    ) {
      console.log("Collission");
      this._resetEgg();
      this.points += this.egg.points;
      console.log(`Points: ${this.points}`);
    }
  }

  _gameOver() {
    let parent = document.getElementById("gameover");
    let h1TagGameOver = document.createElement("h1");
    h1TagGameOver.innerHTML = "Game Over";
    parent.appendChild(h1TagGameOver);
  }

  // añadir div, meter dentro h1 y este div es position relative
  _winGame() {
    let parent = document.getElementById("winGame");
    let h1TagWIN = document.createElement("h1");
    h1TagWIN.innerHTML = "WIN WIN WIN";
    parent.appendChild(h1TagWIN);
  }
}
