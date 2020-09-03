var url_root_melekMatematika = "/project/melek-matematika";
var PostListAll_mm = Post_List; //melek matematika
var PostList_mm = PostListAll_mm.reverse();

var url_root_calc = "/project/calculator";
var PostListAll_cal = footerArray; //kalkulator online
var PostList_cal = PostListAll_cal.reverse();

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

//Sidenav MelekMatematika
sideNav_display_category(
  class_category_MelekMatematika,
  document.getElementById("melek_matematika_category"),
  url_root_melekMatematika
);
//Melek-matematika home
var idAll = document.getElementById("post_list_melek_matematika");
if (idAll) {
  postList_display_all(
    PostList_mm,
    idAll,
    url_root_melekMatematika,
    class_category_MelekMatematika
  );
}

//Sidenav MelekMatematika
sideNav_display_category(
  class_category_calc,
  document.getElementById("calculator_category"),
  url_root_calc
);
//Melek-matematika home
var idAll2 = document.getElementById("post_list_calculator");
if (idAll2) {
  postList_display_all(
    PostList_cal,
    idAll2,
    url_root_calc,
    class_category_calc
  );
}

function postList_display_all(PostList, idTarget, url_root, class_category) {
  var PostLists = [];
  for (var i = 0; i < 2; i++) {
    var url_post = url_root + PostList[i][1];
    var name_post = PostList[i][2];
    var date_post = PostList[i][3];
    var description_post = PostList[i][4];
    var pos_preview_src = PostList[i][6];

    var categoryLength = PostList[i][5].length;
    var post_categoryArr = [];
    for (var q = 0; q < categoryLength; q++) {
      for (var j = 0; j < class_category.length; j++) {
        if (PostList[i][5][q] === class_category[j][0]) {
          post_categoryArr[q] =
            "<a style='background-color: " +
            class_category[j][2] +
            ";' href='" +
            url_root +
            class_category[j][1] +
            "'>" +
            class_category[j][0] +
            "</a>";
        }
      }
    }

    PostLists[i] =
      "<div class='post-list'><a href='" +
      url_post +
      "'><div class='post-preview'><img src='" +
      pos_preview_src +
      "' alt='" +
      name_post +
      "'></div></a><div class='post-description-container'><div class='post-title'><a href='" +
      url_post +
      "'><h3>" +
      name_post +
      "</h3></a></div><div class='post-information'><div class='post-category'>" +
      post_categoryArr.join("") +
      "</div><div class='post-date'>" +
      date_post +
      "</div></div><div class='post-description'>" +
      description_post +
      "</div></div></div>";
  }
  var post_list_new =
    "<div class='nav-page'><h4><a href='/index'> Home </a>><a href='/project'> Project </a>" +
    "><a href='/project/melek-matematika' class='page-active'> Melek Matematika </a></h4></div>" +
    PostLists.join("");

  idTarget.innerHTML = post_list_new;
}

//Sidenav
//Ketgori
function sideNav_display_category(PostList, idTarget, url_root) {
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
