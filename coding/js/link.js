var url_root = "https://nasrianas.website/coding";
var PostList = footerArray;

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

//sidebar
var id_sidebar = document.getElementById("sidebar"); 
for (i = 0; i < PostList.length; i++) {
  var x = id_sidebar.getElementsByClassName(PostList[i][0]);
  for (var n = 0; n < x.length; n++) {
    x[n].href = url_root + PostList[i][1];
    x[n].innerHTML = "<li>" + PostList[i][2] + "</li>";
  }
}

//penjelasan 
var c_mainContent = document.getElementsByClassName("main-content"); 
for (i = 0; i < PostList.length; i++) {
  var x = c_mainContent[0].getElementsByClassName(PostList[i][0]);
  for (var n = 0; n < x.length; n++) {
    x[n].href = url_root + PostList[i][1];
    x[n].innerHTML = PostList[i][2];
  }
}

// var my_q = document.querySelectorAll(".penjelasan .mm_2020_8_07"); 
// my_q[0].style.color = "blue";

