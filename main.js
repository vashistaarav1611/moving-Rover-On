canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverwidth = 100;
roverhight = 100;
roverx = 10;
rovery = 10;
backgroundimg = "mars.jpg";
roverimg = "rover.png";
var roverspeed = 10;

function up() {
 ctx.clearRect(roverx, rovery, canvas.width, canvas.height);
 rovery -= roverspeed;
 ctx.drawImage(roverimgtag, roverx, rovery, roverwidth, roverhight);  
}

function down() {
 ctx.clearRect(roverx, rovery, canvas.width, canvas.height);
 rovery += roverspeed;
 ctx.drawImage(roverimgtag, roverx, rovery, roverwidth, roverhight);
}

function left() {
 ctx.clearRect(roverx, rovery, canvas.width, canvas.height);
 roverx -= roverspeed;
 ctx.drawImage(roverimgtag, roverx, rovery, roverwidth, roverhight);
}

function right() {
 ctx.clearRect(roverx, rovery, canvas.width, canvas.height);
 roverx += roverspeed;
 ctx.drawImage(roverimgtag, roverx, rovery, roverwidth, roverhight);
}
function add() {
 // backgroundimgtag = new Image();
 // backgroundimgtag.onload = uploadbackground;
 // backgroundimgtag.src = backgroundimg;

 roverimgtag = new Image();
 roverimgtag.onload = uploadrover;
 roverimgtag.src = roverimg;
}

function uploadbackground() {
 ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
 ctx.drawImage(roverimgtag, roverx, rovery, roverwidth, roverhight);
}

window.addEventListener("keydown", keydown);

function keydown(e) {
 keypressed = e.keyCode;
 console.log("keyPressed");
 if (keypressed == '38') {
  up();
  console.log("up");
 }
 if (keypressed == '40') {
  down();
  console.log("down");
 }
  if (keypressed == '37') {
      left();
      console.log("left");
  }
  if (keypressed == '39') {
      right();
      console.log("right");
  }
}
