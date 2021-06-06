// var url_root = "https://nasrianas.website/jawab";
var footer = document.getElementById("footer");
var cat1 = cat_1;
var cat2 = cat_2;
var cat3 = class_category_calc;

var title_1 = titleCat_1;
var title_2 = titleCat_2;
var title_3 = "Kategori Lain";

var cat_1arr = [];
for(var i = 0; i<cat1.length; i++){
    cat_1arr[i] = "<a href='"+url_root+cat1[i][1]+"'>"+cat1[i][0]+"</a>"
}

var cat_2arr = [];
for(var i = 0; i<cat2.length; i++){
    cat_2arr[i] = "<a href='"+url_root+cat2[i][1]+"'>"+cat2[i][0]+"</a>"
}

var cat_3arr = [];
for(var i = 0; i<cat3.length; i++){
    cat_3arr[i] = "<a href='"+url_root+cat3[i][1]+"'>"+cat3[i][0]+"</a>"
}

footer.innerHTML = 
"<div class='footer-child'>"+
"   <div class='title'>"+
        title_1+
"   </div>"+
"   <div class='cat-childs'>"+
        cat_1arr.join("")+
"   </div>"+
"</div>"+
"<div class='footer-child'>"+
"   <div class='title'>"+
        title_2+
"   </div>"+
"   <div class='cat-childs'>"+
        cat_2arr.join("")+
"   </div>"+
"</div>"+
"<div class='footer-child'>"+
"   <div class='title'>"+
        title_3+
"   </div>"+
"   <div class='cat-childs'>"+
        cat_3arr.join("")+
"   </div>"+
"</div>";







  
  



