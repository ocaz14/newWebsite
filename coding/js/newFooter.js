var url_root = "https://nasrianas.website/coding";
var footer = document.getElementById("footer");
var cat = class_category;

var catArr = [];
for(var i = 0; i<cat.length; i++){
    catArr[i] = "<a href='"+url_root+cat[i][1]+"'>"+cat[i][0]+"</a>"
}

footer.innerHTML = 
"<div class='footer-child'>"+
"   <div class='title'>"+
"       Kategori"+
"   </div>"+
"   <div class='cat-childs'>"+
        catArr.join("")+
"   </div>"+
"</div>"+
"<div class='footer-child'></div>"+
"<div class='footer-child'></div>";







  
  



