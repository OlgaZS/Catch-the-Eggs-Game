class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player();
  }

  pause() {
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    }
  }

  start() {
    this.player.draw(this.ctx);
  
    pintarCanvas() {
    this.player.x++;
    requestAnimationFrame(pintarCanvas)}
  
  }
  pintarCanvas();

 let requestAnimationFrame = window.requestAnimationFrame(start);

  // window.requestAnimationFrame(){
  // this.player.x++;
  // }
}
