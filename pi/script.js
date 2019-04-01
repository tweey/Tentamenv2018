var myGamePiece;
var canvasEl = document.getElementById("canvas")
var ctx = canvasEl.getContext("2d");

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
}

function component(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

startGame();
