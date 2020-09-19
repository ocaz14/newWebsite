var card = document.getElementById("card");
var chosen;
var frontConf = 0;
var backConf = 0;
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
function read() {
  // if (qArr.length != 0) {
  var current =
    "<div class='card back' onclick='closeRead()'>" +
    qArr[chosen][1][backConf] +
    "</div>";
  card.innerHTML = current;
  // } else {
  //   location.reload();
  // }
}
function closeRead() {
  if (frontConf == 1) {
    var frontDisp = "<img src='" + qArr[chosen][0][1] + "' alt=''>";
  } else {
    var frontDisp = qArr[chosen][0][0];
  }
  var current =
    "<div class='card front' onclick='read()'>" + frontDisp + "</div>";
  card.innerHTML = current;
}
