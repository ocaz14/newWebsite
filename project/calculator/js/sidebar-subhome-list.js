var sidebar_subhome = document.getElementById("sidebar");
var url_root = "https://nasrianas.website/project/calculator";
var cat = class_category_calc;

var catArr = [];
for(var i = 0; i<cat.length; i++){
    catArr[i] = "<a href='"+url_root+cat[i][1]+"'><li>"+cat[i][0]+"</li></a>"
}

var sidebars = 
"<div class='sidebar-child'>"+
"<h3>Kategori</h3>"+
"<ul>"+
catArr.join("") +
"</ul>"+
"</div>"+
"<div class='sidebar-child'>"+
"  <h3>Lihat Juga</h3>"+
"  <ul>"+
"    <a class='Aug20-ProK_01' href=''></a>"+
"    <a class='June20-ProK_07' href=''></a>"+
"    <a class='Aug20-ProK_13' href=''></a>"+
"    <a class='July20-ProK_01' href=''></a>"+
"    <a class='Aug20-ProK_25' href=''></a>"+
"    <a class='Aug20-ProK_28' href=''></a>"+
"    <a class='June20-ProK_01' href=''></a>"+
"    <a class='June20-ProK_05' href=''></a>"+
"    <a class='June20-ProK_06' href=''></a>"+
"    <a class='July20-ProK_02' href=''></a>"+
"  </ul>"+
"</div>";

if(sidebar_subhome){
    sidebar_subhome.innerHTML = sidebars;
}