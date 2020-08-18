var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//variable
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

var colorArray = ["#2C3E50", "#E74C3C", /*"#ECF0F1",*/ "#3498DB", "#2980B9"];

//eventListener
window.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

//utility function
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
function distance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function Walker(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.update = function () {
    this.draw();

    let choice = Math.random();
    let xMaxPixel = Math.floor(canvas.width / this.radius) * this.radius;
    let yMaxPixel = Math.floor(canvas.height / this.radius) * this.radius;

    if (choice <= 0.25) {
      if (this.x > canvas.width) {
        this.x = 0;
      } else {
        //to right
        this.x += this.radius;
      }
    } else if (choice <= 0.5) {
      if (this.x < 0) {
        this.x = xMaxPixel;
      } else {
        //to left
        this.x -= this.radius;
      }
    } else if (choice <= 0.75) {
      if (this.y > canvas.height) {
        this.y = 0;
      } else {
        //to bottom
        this.y += this.radius;
      }
    } else {
      //chance to going up is 40%
      if (this.y < 0) {
        this.y = yMaxPixel;
      } else {
        //to top
        this.y -= this.radius;
      }
    }
  };

  this.draw = function () {
    c.beginPath();
    c.rect(this.x, this.y, this.radius, this.radius);
    //c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();

    // c.beginPath();
    // c.rect(this.x, this.y, this.radius, this.radius);
    // c.strokeStyle = "black";
    // c.stroke();
    // c.closePath();
  };
}

//implementation
let walkers;
function init() {
  walkers = [];

  for (let i = 0; i < 1; i++) {
    let color = randomColor(colorArray);
    walkers.push(new Walker(canvas.width / 2, canvas.height / 2, 10, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(255, 255, 255, 0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  //c.fillText("HTML", mouse.x, mouse.y);

  walkers.forEach((walker) => {
    walker.update();
  });

  // c.beginPath();
  // c.rect(150, 150, 100, 100);
  // c.strokeStyle = "green";
  // c.stroke();
  // c.closePath();
}

init();
animate();
