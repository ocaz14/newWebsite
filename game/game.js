const winningMessageElement = document.getElementById("winningMessage");
var operasi;
//const restartButton = document.getElementById("restartButton");

var hasil;
var poin = 0;
var mulai = 0;

var muncul = "none";
document.getElementById("input").style.display = muncul;
document.getElementById("tebakButton").style.display = muncul;

var klikEnter = document.getElementById("input");
klikEnter.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    myTebak();
  }
});

var pilihanWaktu = 30;
var timeLeft = pilihanWaktu;

document.getElementById("timer").innerHTML = "Klik START untuk Memulai";
document.getElementById("samaDengan").innerHTML = " ";
document.getElementById("hasil").innerHTML = " ";

function startGame() {
  if (mulai == 0) {
    setInterval(countdown, 1000);
  }
  muncul = "block";
  document.getElementById("input").style.display = muncul;
  document.getElementById("tebakButton").style.display = muncul;

  document.getElementById("samaDengan").innerHTML = "=";
  document.getElementById("jawaban").innerHTML = "?";
  operasi = document.getElementById("operators").value;
  winningMessageElement.classList.remove("show");
  poin = 0;
  timeLeft = pilihanWaktu;
  myTebak();
}

function myTebak() {
  tebakan = document.getElementById("input").value;
  if (tebakan != "" && timeLeft != 0) {
    if (tebakan == hasil) {
      poin = poin + 2;
    } else {
      poin = poin - 1;
    }
  }
  document.getElementById("poin").innerHTML = "Jumlah poin: " + poin + " Poin";
  document.getElementById("input").value = "";
  if (timeLeft != 0) {
    myNext();
  }
  return poin;
}

function myNext() {
  var angka1 = (document.getElementById("angka1").innerHTML = Math.floor(
    Math.random() * 10
  ));
  var angka2 = (document.getElementById("angka2").innerHTML = Math.floor(
    Math.random() * 10
  ));

  if (operasi == "tambah") {
    hasil = angka1 + angka2;
    document.getElementById("aritmatika").innerHTML = "+";
  } else if (operasi == "kurang") {
    hasil = angka1 - angka2;
    document.getElementById("aritmatika").innerHTML = "-";
  } else if (operasi == "kali") {
    hasil = angka1 * angka2;
    document.getElementById("aritmatika").innerHTML = "x";
  } else if (operasi == "bagi") {
    hasil = angka1 / angka2;
    document.getElementById("aritmatika").innerHTML = ":";
  }
  document.getElementById("hasil").innerHTML = hasil;
  return hasil;
}

function countdown() {
  if (timeLeft == 0) {
    winningMessageElement.classList.add("show");
    document.getElementById("poinMessage").innerHTML =
      "Jumlah poin: " + poin + " Poin";
    document.getElementById("timer").innerHTML =
      "Waktu Tersisa " + timeLeft + " detik";
    document.getElementById("skor-anda").value = poin;
  } else {
    document.getElementById("timer").innerHTML =
      "Waktu Tersisa " + timeLeft + " detik";
    timeLeft--;
  }
  mulai = 1;
  return mulai;
}
