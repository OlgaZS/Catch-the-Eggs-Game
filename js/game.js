class Game {
  constructor(options) {
    this.direction = ""; // lo necesitamos aqui?
    this.player = options.player; // player ahora sin nombre
    this.egg = undefined; //Objeto calliendo con diferentes propiedades
    this.ctx = options.ctx;
    this.gameOver = undefined;
  }
}
