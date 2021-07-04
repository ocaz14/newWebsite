var pageId = document.getElementsByClassName("page-active")[0].id;
var pageCategory;
var cat = cat_1;
var title1 = titleCat_1;

if(pageId){
    for(var i=0; i<footerArray.length; i++){
        if(footerArray[i][0] == pageId){
            pageCategory = footerArray[i][5];
        }
    }
}

//sidebar
var sidebar = document.getElementById("sidebar");

//rekomendasi sidebar
var rekArr = [];
var rekResult = [];
var jumlah_Category = pageCategory.length;

for(var n = 0; n<jumlah_Category; n++){                     //tiap kategori pada halaman terpilih 
    for(var i=0; i<footerArray.length; i++){                //cek kategori pada semua anggota
        for(var j=0; j<footerArray[i][5].length; j++){      //cek kategori dari anggota
            if(footerArray[i][5][j] == pageCategory[n]){
                push_noDuplicate(footerArray[i][0])
            }
        }
    }
}

function push_noDuplicate(data){
    if(rekArr.includes(data)){
        return
    }else{
        rekArr.push(data);
    }
}

for(var i=0; i<rekArr.length; i++){
    rekResult[i] = "<a class='"+rekArr[i]+"' href=''></a>";
}

var rekomendasi_Sidebar = 
"<h3>REKOMENDASI</h3>"+
"<ul>"+
rekResult.join("");
"</ul>";


//Lihat Juga Sidebar
var catArrAll = [];
for(var i=0; i< cat.length; i++){                       //semua kategori
    catArrAll.push(cat[i][0])
}

var chosenCat = [];
for(var n = 0; n< catArrAll.length; n++){                   //list dari 
    var catMember = [];
    for(var i=0; i<footerArray.length; i++){                //cek kategori pada semua anggota
        for(var j=0; j<footerArray[i][5].length; j++){      //cek kategori dari anggota
            if(footerArray[i][5][j] == catArrAll[n]){
                catMember.push(footerArray[i][0])
            }
        }
    }
    var member_Random = Math.floor(Math.random() * catMember.length);
    chosenCat.push(catMember[member_Random]);
}

var lihatJuga_result = [];
for(var i=0; i<chosenCat.length; i++){
    lihatJuga_result[i] = "<a class='"+chosenCat[i]+"' href=''></a>";
}

var lihatjuga_Sidebar = 
"<h3>"+title1+"</h3>"+
"<ul>"+
lihatJuga_result.join("");
"</ul>";

var math_Sidebar = 
"<h3>Math</h3>"+
"<ul>"+
    "<a href='https://nasrianas.website/jawab/math/bilangan/faktorisasi-prima/001-faktorisasi-prima-dari-80'><li>Faktorisasi prima dari 80</li></a>"+   
    "<a href='https://nasrianas.website/jawab/math/pangkat/akar-pangkat3/057-akar-pangkat-3-dari-125000'><li>Akar -1 Berapa</li></a>"+
    "<a href='https://nasrianas.website/jawab/math/panjang/meter-cm/001-1-meter-berapa-cm'><li>1 meter berapa cm</li></a>"+
    "<a href='https://nasrianas.website/jawab/math/pecahan/decimal-pecahanBiasa/001-0,75-diubah-menjadi-pecahan-biasa'><li>0.75 diubah mejadi pecahan biasa</li></a>"+
    "<a href='https://nasrianas.website/jawab/math/persen/1persen/001-1-persen-dari-1-juta'><li>1 persen dari 1 juta</li></a>"+
    "<a href='https://nasrianas.website/jawab/math/suhu/celcius-fahrenheit/001-30-derajat-celcius-berapa-fahrenheit'><li>30 derajat Celcius berapa Fahrenheit</li></a>"+
    "<a href='https://nasrianas.website/jawab/math/waktu/detik-menit/001-300-detik-berapa-menit'><li>300 detik berapa menit</li></a>"+      
"</ul>";

sidebar.innerHTML = 
"<div class='sidebar-child'>"+
rekomendasi_Sidebar+
"</div>"+
"<div class='sidebar-child'>"+
lihatjuga_Sidebar+
"</div>"+
"<div class='sidebar-child'>"+
math_Sidebar+
"</div>";

