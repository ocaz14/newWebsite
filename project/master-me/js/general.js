var card = document.getElementById("card");
var chosen;
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

    var current =
      "<div class='card front' onclick='read()'>" +
      qArr[chosen][0][0] +
      "</div>";
    card.innerHTML = current;
  } else {
    alert("Anda sudah menguasai semua, Refresh Halaman untuk mulai dari awal!");
  }
}
function read() {
  // if (qArr.length != 0) {
  var current =
    "<div class='card back' onclick='closeRead()'>" +
    qArr[chosen][1][0] +
    "</div>";
  card.innerHTML = current;
  // } else {
  //   location.reload();
  // }
}
function closeRead() {
  var current =
    "<div class='card front' onclick='read()'>" + qArr[chosen][0][0] + "</div>";
  card.innerHTML = current;
}
