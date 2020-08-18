var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//variable
var inDistance = 30;
var particleAmount = 200;
var particleRadius = 1;
var velocity_UpTo = 0.5;

//eventListener
window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

//utility function
function distance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
function drawLine(x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);

  c.stroke();
  c.closePath();
}

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.velocity = {
    x: Math.random() * (velocity_UpTo * 2) - velocity_UpTo,
    y: Math.random() * (velocity_UpTo * 2) - velocity_UpTo,
  };

  this.update = function () {
    this.draw();

    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
}

//implementation
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#171e26");
backgroundGradient.addColorStop(1, "#3f586b");

let particles;
let backgroundStars;
function init() {
  particles = [];
  backgroundStars = [];

  for (let i = 0; i < particleAmount; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particles.push(new Particle(x, y, particleRadius, "white"));
  }
}

function animate() {
  requestAnimationFrame(animate);
  //c.clearRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = 0; j < particles.length; j++) {
      let x1 = particles[i].x;
      let y1 = particles[i].y;
      let x2 = particles[j].x;
      let y2 = particles[j].y;
      dist = distance(x1, y1, x2, y2);
      if (dist <= inDistance) {
        c.strokeStyle = "rgba(255, 255, 255, 0.1)";
        drawLine(x1, y1, x2, y2);
      }
    }
  }
}

init();
animate();
