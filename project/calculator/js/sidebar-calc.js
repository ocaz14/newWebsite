var pageId = document.getElementsByClassName("page-active")[0].id;
var pageCategory;

if(pageId){
    for(var i=0; i<footerArray.length; i++){
        if(footerArray[i][0] == pageId){
            pageCategory = footerArray[i][5][0];
        }
    }
}

//sidebar
var sidebar = document.getElementById("sidebar");

//rekomendasi sidebar
var rekArr = [];
var rekResult = [];
for(var i=0; i<footerArray.length; i++){
    if(footerArray[i][5] == pageCategory){
        rekArr.push(footerArray[i][0]);
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

