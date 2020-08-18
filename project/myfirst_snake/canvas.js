var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var box = 20;
var width = 30;
var height = 20;
var delay = 100;
var poin = 0;

var fieldWidth = width * box;
var fieldHeight = height * box;
var xfield_freeSpace = (canvas.width - fieldWidth) / 2;
var yfield_freeSpace = (canvas.height - fieldHeight) / 2;

var x_user = randomFloor(0, width);
var y_user = randomFloor(0, height);

var userArray = [];
userArray[0] = [x_user, y_user];

var dx = 1;
var dy = 0;

var die = 0;

var x_food;
var y_food;

food();

var loop;
loop = setInterval(function () {
  //snakeGrow
  for (var i = userArray.length - 1; i > 0; i--) {
    userArray[i] = userArray[i - 1];
  }
  //snakeMove
  x_user += dx;
  y_user += dy;
  //snakeTeleport
  teleport();
  //snakeDie
  for (var i = 1; i < userArray.length; i++) {
    if (x_user == userArray[i][0] && y_user == userArray[i][1]) {
      clearInterval(loop);
    }
  }
  //snakeHead
  userArray[0] = [x_user, y_user];
  //console.log(userArray[0]);
  //snakeDraw
  init();
  //snakeEat
  if (x_food == userArray[0][0] && y_food == userArray[0][1]) {
    eat();
    userArray.length += 1;
  }
}, delay);

var press = 0;

function eat() {
  food();
  score();
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

window.addEventListener("mousedown", function () {
  init();
});

window.addEventListener("keyup", function () {
  press = 1;
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    //left
    if (dx != 1) {
      dx = -1;
      dy = 0;
    }
  }
  if (event.keyCode === 38) {
    //up
    if (dy != 1) {
      dx = 0;
      dy = -1;
    }
  }
  if (event.keyCode === 39) {
    //right
    if (dx != -1) {
      dx = 1;
      dy = 0;
    }
  }
  if (event.keyCode === 40) {
    //down
    if (dy != -1) {
      dx = 0;
      dy = 1;
    }
  }
});

function init() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  drawField();

  for (var i = 0; i < userArray.length; i++) {
    drawUser(userArray[i][0], userArray[i][1]);
  }

  drawFood();
}

function drawField() {
  c.fillStyle = "rgba(0, 255, 0, 0.5)";
  c.fillRect(xfield_freeSpace, yfield_freeSpace, fieldWidth, fieldHeight);
}

//field
function drawUser(x, y) {
  //user
  var x_posUser = x * box + xfield_freeSpace;
  var y_posUser = y * box + yfield_freeSpace;
  c.fillStyle = "rgba(0, 0, 255, 0.5)";
  c.fillRect(x_posUser, y_posUser, box, box);
  c.strokeStyle = "white";
  c.strokeRect(x_posUser, y_posUser, box, box);
}

function food() {
  x_food = randomFloor(0, width);
  y_food = randomFloor(0, height);

  for (var i = 0; i < userArray.length; i++) {
    if (x_food == userArray[i][0] && y_food == userArray[i][1]) {
      food();
    }
  }
}

function drawFood() {
  var x_posFood = x_food * box + xfield_freeSpace;
  var y_posFood = y_food * box + yfield_freeSpace;
  c.fillStyle = "rgba(255, 0, 0, 0.5)";
  c.fillRect(x_posFood, y_posFood, box, box);
  c.strokeStyle = "white";
  c.strokeRect(x_posFood, y_posFood, box, box);
}

function teleport() {
  if (dx > 0) {
    if (x_user == width) {
      x_user = 0;
    }
  } else if (dx < 0) {
    if (x_user == -1) {
      x_user = width - 1;
    }
  }

  if (dy > 0) {
    if (y_user == height) {
      y_user = 0;
    }
  } else if (dy < 0) {
    if (y_user == -1) {
      y_user = height - 1;
    }
  }
}

function score() {
  poin += 1;
  console.log(poin);
}

function randomFloor(min, max) {
  var result = Math.floor(Math.random() * max + min);
  return result;
}
