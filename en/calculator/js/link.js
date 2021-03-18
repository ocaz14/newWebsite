// var url_root = "https://nasrianas.website/project/calculator";
var PostList = footerArray;

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

for (i = 0; i < PostList.length; i++) {
  var x = document.getElementsByClassName(PostList[i][0]);
  for (var n = 0; n < x.length; n++) {
    x[n].href = url_root + PostList[i][1];
    x[n].innerHTML = "<li>" + PostList[i][2] + "</li>";
  }
}
