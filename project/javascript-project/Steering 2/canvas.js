var foodStartAmount = 100;
var newFoodRate = 0.04;
var maxSpeed = 5;
var maxForce = 0.3;

let mover;
var food = [];
var poison = [];
function setup() {
  createCanvas(innerWidth, innerHeight);
  mover = new Mover(200, 200);
  for (let i = 0; i < foodStartAmount; i++) {
    var x = random(width);
    var y = random(height);
    food.push(createVector(x, y));
  }

  for (let i = 0; i < 0; i++) {
    var x = random(width);
    var y = random(height);
    poison.push(createVector(x, y));
  }
}

function draw() {
  if (food.length <= 0) {
    background(0);

    let v = "VICTORY";
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(v, width / 2, height / 2, 1, 100);
  } else {
    background(40);

    //random target
    if (random(1) < newFoodRate) {
      var x = random(25, width - 25);
      var y = random(25, height - 25);
      food.push(createVector(x, y));
    }

    //target vector
    target = createVector(mouseX, mouseY);

    for (let i = 0; i < food.length; i++) {
      fill(0, 255, 0);
      noStroke();
      ellipse(food[i].x, food[i].y, 10, 10);
    }

    for (let i = 0; i < poison.length; i++) {
      fill(255, 0, 0);
      noStroke();
      ellipse(poison[i].x, poison[i].y, 10, 10);
    }

    mover.eat(food);
    mover.eat(poison);
    //mover.seek(target);
    mover.update();
    mover.show();

    let s = food.length;
    fill(255);
    text(s, 10, 10, 70, 80);
  }
}

class Mover {
  constructor(x, y) {
    //vihacle
    this.len = 20;
    this.w = 10;

    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.alp = 0;

    this.maxspeed = maxSpeed;
    this.maxforce = maxForce;

    this.brakeDist = 100;
  }
  seek(target) {
    //desired vector
    this.desired = p5.Vector.sub(target, this.pos);
    this.d = this.desired.mag();
    this.desired.normalize();
    //using maxspeed
    this.desired.mult(this.maxspeed);
    //steer vector
    this.steer = p5.Vector.sub(this.desired, this.vel);
    this.steer.limit(this.maxforce);
    this.applyForce(this.steer);
  }
  update() {
    //motion 101
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  show() {
    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    stroke(50);
    fill(255, 20, 20);
    rotate(this.vel.heading());
    vertex(0, 0);
    vertex(0 - this.len, 0 + this.w / 2);
    vertex(0 - this.len, 0 - this.w / 2);
    vertex(0, 0);
    endShape();
    pop();
  }
  applyForce(force) {
    this.acc.add(force);
  }
  eat(list) {
    var record = Infinity;
    var closest = -1;
    for (let i = 0; i < list.length; i++) {
      var d = this.pos.dist(list[i]);
      //var d = dist(this.pos.x, this.pos.y, list[i].x, list[i].y);
      if (d < record) {
        record = d;
        closest = i;
      }
    }

    if (record < 5) {
      list.splice(closest, 1);
    } else if (closest > -1) {
      this.seek(list[closest]);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
