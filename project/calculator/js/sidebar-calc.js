var pageId = document.getElementsByClassName("page-active")[0].id;
var pageCategory;

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

//lihat juga sidebar
var lihatjuga_Sidebar = 
"<h3>LIHAT JUGA</h3>"+
"<ul>"+
"  <a class='Aug20-ProK_01' href=''></a>"+
"  <a class='June20-ProK_07' href=''></a>"+
"  <a class='Aug20-ProK_13' href=''></a>"+
"  <a class='July20-ProK_01' href=''></a>"+
"  <a class='Aug20-ProK_25' href=''></a>"+
"  <a class='Aug20-ProK_28' href=''></a>"+
"  <a class='June20-ProK_01' href=''></a>"+
"  <a class='June20-ProK_05' href=''></a>"+
"  <a class='June20-ProK_06' href=''></a>"+
"  <a class='July20-ProK_02' href=''></a>"+
"</ul>";

sidebar.innerHTML = 
"<div class='sidebar-child'>"+
rekomendasi_Sidebar+
"</div>"+
"<div class='sidebar-child'>"+
lihatjuga_Sidebar+
"</div>";

