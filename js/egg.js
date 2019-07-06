class Egg {
  constructor() {
    this.points = undefined;
    this.width = 20;
    this.height = 20;
    this.position = {
      x: 30,
      y: 30
    };
  }

  startDrop() {
    this.interval = setInterval(() => {
      this.drop();
    }, 100);
  }

  drop() {
    this.position.y += 10;
  }
}
