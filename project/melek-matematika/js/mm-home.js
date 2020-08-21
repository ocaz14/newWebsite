var url_root = "/project/melek-matematika";
var PostList = Post_List;

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

var pageActive = document.getElementsByClassName("page-active")[0].id;
var titlePageActive;
var dateBlogActive;
for (i = 0; i < PostList.length; i++) {
  if (pageActive === PostList[i][0]) {
    titlePageActive = PostList[i][2];
    dateBlogActive = PostList[i][3];
  }
}

if (pageActive) {
  document.getElementById("Blogtitle").innerText = titlePageActive;
  document.getElementById(pageActive).innerText = titlePageActive;
  document.title = "Melek Matematika: " + titlePageActive;
  document.getElementById("dateBlog").innerText = dateBlogActive;
}
