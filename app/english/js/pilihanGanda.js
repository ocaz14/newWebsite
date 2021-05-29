var latihanArr = [...myArr];
var nomorSoal;

var idTimer = document.getElementById("timer");
var idPertanyaan = document.getElementById("question");
var idJawaban = document.getElementById("jawaban");

var idwJumlahBenar = document.getElementById("wJumlahBenar");
var idwJumlahSoal = document.getElementById("wJumlahSoal");
var idwWaktuTotal = document.getElementById("wWaktuTotal");

var idwinningMessage = document.getElementById("winning_msg");

var idBenar = document.getElementById("benar");
var idNumber = document.getElementById("number");
var bolehJawab = true;

var jumlahSoal = 0;
var totalSoal = 10;

var poin;
var detik;
var menit;
var jam;
var waktuTotal;

mulai()
var timer = setInterval(function () {
    detik += 1;
    displayWaktu();
}, 1000);
function resetData(){
    latihanArr = [...myArr];  
    mulai();          
}
function mulai(){
    jumlahSoal = 0;
    poin = 0;
    detik = 0;
    menit = 0;
    jam = 0;
    idwinningMessage.classList = "winning-message";
    next();            
}
function benar(){
    if(bolehJawab){
        idBenar = document.getElementById("benar");          
        idBenar.classList = "jawaban-child benar";
        poin += 1;
        bolehJawab = false;
    }
}
function salah(){
    if(bolehJawab){
        idBenar = document.getElementById("benar");
        idBenar.classList = "jawaban-child salah";
        bolehJawab = false;
    }
}
function next(){
    bolehJawab = true;
    jumlahSoal += 1;

    if(jumlahSoal <= totalSoal){
        
        dispPilihanGanda(latihanArr);
        idNumber.innerText = jumlahSoal + " / " + totalSoal;
    }else{
        idwinningMessage.classList = "winning-message show";
    }
    displayWinning();
}
function master(){
    latihanArr.splice(nomorSoal,1);
    next();
}
function dispPilihanGanda(myArr){
    var newArr = [...myArr]; 
    [pertanyaan, jawabBenar, salah1, salah2, salah3] = pertanyaanJawaban(newArr);
    
    var divBenar = "<div id='benar' class='jawaban-child' onclick='benar()'>"+jawabBenar+"</div>";
    var divSalah1 = "<div class='jawaban-child' onclick='salah()'>"+salah1+"</div>";
    var divSalah2 = "<div class='jawaban-child' onclick='salah()'>"+salah2+"</div>";
    var divSalah3 = "<div class='jawaban-child' onclick='salah()'>"+salah3+"</div>";
    var acakArr = acakPilihan(divBenar,divSalah1,divSalah2,divSalah3);
    var jawabanCont = acakArr.join("");  
    
    idPertanyaan.innerText = pertanyaan;
    idJawaban.innerHTML = jawabanCont;
}
function displayWinning(){
    idwWaktuTotal.innerText = "Waktu Total: " + waktuTotal;
    idwJumlahBenar.innerText = "Jawaban Benar: "+ poin;
    idwJumlahSoal.innerText = "Jumlah Soal: "+ totalSoal;
}
function randInt(length){
    return Math.floor(Math.random()*length);
}
function acakPilihan(a,b,c,d){
    var arr = [a,b,c,d]
    var newArr = [];

    for(var i=0; i<4; i++){
        var acak = Math.floor(Math.random()*arr.length);
        newArr[i] = arr[acak];
        arr.splice(acak,1)
    }
    return newArr
}
function pertanyaanJawaban(newArr){
    var terpilih = randInt(newArr.length);
    nomorSoal = terpilih;
    
    var pertanyaan = newArr[terpilih][0];
    var benar = newArr[terpilih][1];
    newArr.splice(terpilih,1);
    
    var randSalah1 = randInt(newArr.length);
    var salah1 = newArr[randSalah1][1];
    newArr.splice(randSalah1,1);

    var randSalah2 = randInt(newArr.length);
    var salah2 = newArr[randSalah2][1];
    newArr.splice(randSalah2,1);

    var randSalah3 = randInt(newArr.length);
    var salah3 = newArr[randSalah3][1];
    newArr.splice(randSalah3,1);

    return [pertanyaan, benar, salah1, salah2, salah3]
}
function make2dgt(n) {
    if (n < 10) {
        return (display_n = "0" + n);
    } else {
        return (display_n = n);
    }
}
function soal(n){
    totalSoal = n;
    mulai()
}
function displayWaktu(){
    if (detik == 60) {
        detik = 0;
        menit += 1;
    }
    if (menit == 60) {
        menit = 0;
        jam += 1;
    }
    if(jam == 24){
        jam = 0;
    }

    display_hh = make2dgt(jam);
    display_mm = make2dgt(menit);
    display_ss = make2dgt(detik);

    waktuTotal = display_hh + " : " + display_mm + " : " + display_ss;
    idTimer.innerText = waktuTotal;
}  