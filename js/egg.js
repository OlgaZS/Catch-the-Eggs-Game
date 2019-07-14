class Egg {
  constructor(name, points, velocity, x, y) {
    this.name = name;
    this.points = points;
    this.velocity = velocity;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.interval = undefined;
  }

  startDrop() {
    this.interval = setInterval(() => {
      this.drop();
    }, 100);
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
