var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//variable
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

var colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];

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

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.update = function () {
    this.draw();

    let noise = Math.random() * (1 * 2) - 1;

    if (this.x + this.radius > canvas.width) {
      this.x = 0;
    }

    if (this.y + this.radius > canvas.height) {
      this.y = 0;
    }
    if (this.y + this.radius < 0) {
      this.y = canvas.height;
    }

    this.y += noise * this.radius;
    this.x += this.radius;
  };

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //c.rect(this.x, this.y, this.radius, this.radius);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
}

//implementation
let circles;
function init() {
  circles = [];

  for (let i = 0; i < 1; i++) {
    let color = randomColor(colorArray);
    let radius = 5;
    circles.push(
      new Circle(canvas.width / 2, canvas.height / 2, radius, color)
    );
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(255,255,255,0.01)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillText("HTML", mouse.x, mouse.y);

  circles.forEach((circle) => {
    circle.update();
  });
}

init();
animate();
