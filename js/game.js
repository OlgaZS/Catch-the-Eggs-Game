class Game {
  constructor(ctx, winGame, gameOver) {
    this.ctx = ctx;
    this.points = 0; // egg counter
    this.life = 3;
    this.timeout = 60; // resetearlo en restart
    this.player = new Player();
    this.egg = new Egg("whiteEgg", 1, 15, 10, 20, "/images/whiteEgg.png");
    // this.egg2 = new Egg("goldenEgg", 2, 10, 300, 20, "/images/goldenEgg.png"); falta crear coliciones en array
    this.intervalGame = undefined;
    this.intervalTimeout = undefined;
    this.gameOver = undefined;
    this.domWinGame = winGame;
    this.domGameOver = gameOver;
    this.statusGame = "runing";
  }

  start() {
    // this.intervalTimeout = setInterval(function() {
    // this.timeout--;
    // console.log(this.timeout);
    // }, 1000);
    this.points = 0;
    this.life = 3;
    // console.log("start!!!", this);
    this.addControlToKeys();
    this.egg.startDrop(130);
    // this.egg2.startDrop(200);
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
    document.getElementById("counter").style = "display: block;";
    document.getElementById("life-counter").style = "display: block;";
  }

  restart() {
    document.getElementById("score").innerHTML = 0;
    document.getElementById("lives").innerHTML = 0;
    this.points = 0;
    this.life = 3;

    this.start();
  }

  _drawPlayer() {
    const playerImage = new Image();

    playerImage.src = "/images/cesta.png";
    this.ctx.drawImage(
      playerImage,
      this.player.position.x,
      this.player.position.y,
      this.player.width,
      this.player.height
    );
  }

  _resetEgg() {
    this.egg.y = 20;
    this.egg.x = Math.floor(Math.random() * 750);

    // this.egg2.y = 20;
    // this.egg2.x = Math.floor(Math.random() * 750);
  }

  _checkEggHitBottom() {
    if (this.egg.y > 500) {
      //|| this.egg2.y > 500
      this.life -= 1;
      this._resetEgg();
      document.getElementById("lives").innerHTML = this.life;
    }
  }

  _drawEgg(egg) {
    this.ctx.drawImage(egg.eggImage, egg.x, egg.y, egg.width, egg.height);
  }

  addControlToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          //controlar si estyo running
          this.player.moveLeft(); // arror left
          // console.log("key left");
          // console.log(this.player.position.x);
          break;
        case 39:
          //controlar is estoy running
          this.player.moveRight(); // arrow right
          // console.log("key right");
          // console.log(this.player.position.x);
          break;
        case 80: // p pause
          if (this.statusGame === "pause") {
            this.statusGame = "runing";
          } else if (this.statusGame === "runing") {
            this.statusGame = "pause";
          }
          //controlar si ya estoy pause y si tengo que llamar a pause()
          break;
      }
    };
  }

  update() {
    if (this.life > 0 && this.points < 10) {
      // cambiar points a 1000..
      this.ctx.clearRect(0, 0, 800, 500);
      this._drawPlayer();
      this._drawEgg(this.egg);
      // this._drawEgg(this.egg2); // sin parametro antes
      this.collission();
      this._checkEggHitBottom();
      window.requestAnimationFrame(this.update.bind(this));
    } else if (this.points === 10) {
      this._winGame();
    } else {
      this._gameOver();
    }
  }

  pause() {
    this.egg.interval ? this.egg.stop() : this.egg.startDrop();
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
      // console.log("Collission");
      // dropSound.play();
      this._resetEgg();
      this.points += this.egg.points;
      // console.log(`Points: ${this.points}`);
      document.getElementById("score").innerHTML = this.points;
    }
  }

  _gameOver() {
    window.cancelAnimationFrame(this.intervalGame);
    this.intervalGame = undefined;
    this.egg.stop();
    // this.egg2.stop();
    this.domGameOver(this.points);
  }

  _winGame() {
    window.cancelAnimationFrame(this.intervalGame);
    this.intervalGame = undefined;
    this.egg.stop();
    // this.egg2.stop();
    this.domWinGame();
  }
}
