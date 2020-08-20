var url_root = "/project/melek-matematika/";
var PostList = Post_List;

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

sideNav_display(PostList);

function sideNav_display(PostList) {
  var navSide_Container = [];
  for (i = 0; i < PostList.length; i++) {
    var url_sideNav = url_root + PostList[i][1];
    var name_sideNav = PostList[i][2];
    navSide_Container[i] =
      `<li><a href='` + url_sideNav + `'>` + name_sideNav + `</a></li>`;
  }
  //side nav
  var sideNav =
    "<div id='sideSection-src' class='side-section'>" +
    "<div class='top-line'></div>" +
    //blog
    "<div class='sub-side-section'>" +
    "<h3><a href='/blog.html'>Melek Matematika (All)</a></h3>" +
    "<ul>" +
    navSide_Container.join("") +
    "</ul>" +
    "</div>" +
    //Game
    // "<div class='sub-side-section'>" +
    // "<h3> <a href='/game.html'>Game</a></h3>" +
    // "</div>" +
    //end
    "</div>";
  document.getElementById("sideNav-section").innerHTML = sideNav;
}

var pageActive = document.getElementsByClassName("page-active")[0].id;
var titlePageActive;
var dateBlogActive;
for (i = 0; i < PostList.length; i++) {
  if (pageActive === PostList[i][0]) {
    titlePageActive = PostList[i][2];
    dateBlogActive = PostList[i][3];
  }
}
document.getElementById("Blogtitle").innerText = titlePageActive;
document.getElementById(pageActive).innerText = titlePageActive;
document.title = "Melek Matematika: " + titlePageActive;
document.getElementById("dateBlog").innerText = dateBlogActive;

// if (pageActive) {
// } else {
//   page(pageChoice);
// }
