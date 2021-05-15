var pageId = document.getElementsByClassName("page-active")[0].id;
var pageCategory;
var cat = class_category;

var shortArr = [
    [url_root + footerArray[0][1], "Math.random()"],
    [url_root + footerArray[1][1], "Math.random() + Math.floor()"],
    [url_root + footerArray[2][1], "Math.round()"],
    [url_root + footerArray[3][1], "Math.floor()"],
    [url_root + footerArray[4][1], "Math.ceil()"],
    [url_root + footerArray[5][1], "Math.ceil()"],
    [url_root + footerArray[6][1], "Date()"],
    [url_root + footerArray[7][1], "Object.getOwnPropertyNames()"],
    [url_root + footerArray[8][1], "Math.abs()"],
    [url_root + footerArray[9][1], "derajat-radian, radian-derajat"],

    [url_root + footerArray[10][1], "Math.sin() derajat"],
    [url_root + footerArray[11][1], "Math.cos() derajat"],
    [url_root + footerArray[12][1], "Math.tan() derajat"],
    [url_root + footerArray[13][1], "Math.min()"],
    [url_root + footerArray[14][1], "Math.max()"],
    [url_root + footerArray[15][1], "Math.asin() derajat"],
    [url_root + footerArray[16][1], "Math.acos() derajat"],
    [url_root + footerArray[17][1], "Math.atan() derajat"],
    [url_root + footerArray[18][1], "document.getElementById()"],
    [url_root + footerArray[19][1], "Secan derajat"],

    [url_root + footerArray[20][1], "Cosecan derajat"],
    [url_root + footerArray[21][1], "Cotangen derajat"],
    [url_root + footerArray[22][1], "Invers cosecan derajat"],
    [url_root + footerArray[23][1], "Invers secan derajat"],
    [url_root + footerArray[24][1], "Invers cotangen derajat"],
    [url_root + footerArray[25][1], "Array []"],
    [url_root + footerArray[26][1], "Array length"],
    [url_root + footerArray[27][1], "toString() & join()"],
    [url_root + footerArray[28][1], "splice()"],
    [url_root + footerArray[29][1], "Selector"],

    [url_root + footerArray[30][1], "classList.add()"],
    [url_root + footerArray[31][1], "classList()"],
    [url_root + footerArray[32][1], "Selector bertingkat"],
    [url_root + footerArray[33][1], "classList.remove()"],
    [url_root + footerArray[34][1], "parseInt()"],
    [url_root + footerArray[35][1], "toString()"],
    [url_root + footerArray[36][1], "style.backgroundColor"],
    [url_root + footerArray[37][1], "style.color"],
    [url_root + footerArray[38][1], "innerText"],    
]

var shortList = [];
for(var i=0; i<shortArr.length; i++){
    shortList[i] = "<a class='' href='"+shortArr[i][0]+"'><li>"+shortArr[i][1]+"</li></a>";
}
var shortListDisplay = 
"<h3>Daftar Isi</h3>"+
"<ul>"+
shortList.join("");
"</ul>";


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
"<h3>Daftar Lengkap</h3>"+
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
"<h3>LIHAT JUGA</h3>"+
"<ul>"+
lihatJuga_result.join("");
"</ul>";

sidebar.innerHTML = 
// "<div class='sidebar-child'>"+
// shortListDisplay+
// "</div>" +
"<div class='sidebar-child'>"+
rekomendasi_Sidebar+
"</div>"
// +
// "<div class='sidebar-child'>"+
// lihatjuga_Sidebar+
// "</div>"
;

