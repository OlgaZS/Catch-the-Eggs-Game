class Egg {
  constructor(name, points, velocity, x, y, src) {
    this.name = name;
    this.points = points;
    this.velocity = velocity;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 25;
    this.interval = undefined;
    this.eggImage = new Image();
    this.eggImage.src = src;
  }

  startDrop(timeout) {
    this.interval = setInterval(() => {
      this.drop();
    }, timeout);
  }

  startDropSlow() {
    this.interval = setInterval(() => {
      this.drop();
    }, 300);
  }

  drop() {
    this.y += this.velocity;
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}
