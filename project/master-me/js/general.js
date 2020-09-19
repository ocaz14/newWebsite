var card = document.getElementById("card");
var chosen;

if (reorder == 1) {
  var order = Math.floor(Math.random() * 2); //reorder-option
} else {
  var order = 0;
}

console.log(order);
//reorder
if (order == 0) {
  var f_disp = 0;
  var b_disp = 1;
} else {
  var f_disp = 1;
  var b_disp = 0;
}

//image
if (img == 1) {
  if (order == 0) {
    var frontImg = 1;
    var backImg = 0;
  } else {
    var frontImg = 0;
    var backImg = 1;
  }
} else {
  var frontImg = 0;
  var backImg = 0;
}

reset();

function master() {
  qArr.splice(chosen, 1);
  reset();
}
function morePractice() {
  reset();
}
function reset() {
  if (qArr.length != 0) {
    var q_rand = Math.floor(Math.random() * qArr.length);
    chosen = q_rand;

    closeRead();
  } else {
    alert("Anda sudah menguasai semua, Refresh Halaman untuk mulai dari awal!");
  }
}
function closeRead() {
  if (frontImg == 1) {
    var frontDisp = "<img src='" + qArr[chosen][f_disp][1] + "' alt=''>";
  } else {
    var frontDisp = qArr[chosen][f_disp][0];
  }
  var current =
    "<div class='card front' onclick='read()'>" + frontDisp + "</div>";
  card.innerHTML = current;
}
function read() {
  // if (qArr.length != 0) {
  if (backImg == 1) {
    var backDisp = "<img src='" + qArr[chosen][b_disp][1] + "' alt=''>";
  } else {
    var backDisp = qArr[chosen][b_disp][0];
  }
  var current =
    "<div class='card back' onclick='closeRead()'>" + backDisp + "</div>";
  card.innerHTML = current;
  // } else {
  //   location.reload();
  // }
}
