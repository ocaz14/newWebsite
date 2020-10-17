var url_root = "https://nasrianas.website/blog";
var PostListAll = Post_List;
var PostList = PostListAll.reverse();

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

//Sidenav category
// sideNav_display_category(
//   class_category,
//   document.getElementById("category")
// );
sideNav_display(PostList, document.getElementById("sideNav-section"));

//Sidenav
//Ketgori
function sideNav_display_category(PostList, idTarget) {
    var navSide_Container = [];
    for (i = 0; i < PostList.length; i++) {
      var url_sideNav = url_root + PostList[i][1];
      var name_sideNav = PostList[i][0];
      navSide_Container[i] =
        `<li><a href='` + url_sideNav + `'>` + name_sideNav + `</a></li>`;
    }
    //side nav
    var sideNav =
      "<div class='side-section'><div class='sub-side-section'><h3>Kategori</h3><ul>" +
      navSide_Container.join("") +
      "</ul></div></div>";
    idTarget.innerHTML = sideNav;
  }
  //melek Matematika
  function sideNav_display(PostList, idTarget) {
    var navSide_Container = [];
    for (i = 0; i < PostList.length; i++) {
      var url_sideNav = url_root + PostList[i][1];
      var name_sideNav = PostList[i][2];
      navSide_Container[i] =
        `<li><a href='` + url_sideNav + `'>` + name_sideNav + `</a></li>`;
    }
    //side nav
    var sideNav =
      "<div class='side-section'><div class='sub-side-section'>" +
      "<h3><a href='/project/coding'>Coding (" +
      navSide_Container.length +
      ")</a></h3><ul>" +
      navSide_Container.join("") +
      "</ul></div></div>";
    idTarget.innerHTML = sideNav;
  }