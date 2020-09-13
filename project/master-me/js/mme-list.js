var url_root = "/project/master-me";
var PostListAll = Post_List;
var PostList = PostListAll.reverse();

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

//Sidenav
sideNav_display_category(
  class_category_MelekMatematika,
  document.getElementById("melek_matematika_category")
);
sideNav_display(PostList, document.getElementById("sideNav-section"));

//Melek-matematika home
var idAll = document.getElementById("post_list_melek_matematika");
if (idAll) {
  postList_display_all(PostList, idAll);
}
//Melek-matematika sub home
// var idPecahan = document.getElementById("post_list_pecahan");
// postList_Category(PostList, "Pecahan", idPecahan);
// var idPersen = document.getElementById("post_list_persen");
// postList_Category(PostList, "Persen", idPersen);
// var idBilangan = document.getElementById("post_list_bilangan");
// postList_Category(PostList, "Bilangan", idBilangan);

var idList = [
  document.getElementById("post_list_pecahan"),
  document.getElementById("post_list_persen"),
  document.getElementById("post_list_bilangan"),
];

for (var sub = 0; sub < idList.length; sub++) {
  postList_Category(
    PostList,
    class_category_MelekMatematika[sub][0],
    idList[sub]
  );
}

function postList_Category(PostList, title, id) {
  if (id) {
    postList_display(PostList, id, title);
  }
}

function postList_display_all(PostList, idTarget) {
  var PostLists = [];
  for (var i = 0; i < PostList.length; i++) {
    var url_post = url_root + PostList[i][1];
    var name_post = PostList[i][2];
    var date_post = PostList[i][3];
    var description_post = PostList[i][4];
    var pos_preview_src = PostList[i][6];

    var categoryLength = PostList[i][5].length;
    var post_categoryArr = [];
    for (var q = 0; q < categoryLength; q++) {
      for (var j = 0; j < class_category_MelekMatematika.length; j++) {
        if (PostList[i][5][q] === class_category_MelekMatematika[j][0]) {
          post_categoryArr[q] =
            "<a style='background-color: " +
            class_category_MelekMatematika[j][2] +
            ";' href='" +
            url_root +
            class_category_MelekMatematika[j][1] +
            "'>" +
            class_category_MelekMatematika[j][0] +
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
    "><a href='/project/master-me' class='page-active'> Master Me </a></h4></div>" +
    PostLists.join("");

  idTarget.innerHTML = post_list_new;
}

function postList_display(PostList, idTarget, sub) {
  var PostLists = [];
  for (var i = 0; i < PostList.length; i++) {
    for (var x = 0; x < PostList[i][5].length; x++) {
      if (PostList[i][5][x] === sub) {
        var url_post = url_root + PostList[i][1];
        var name_post = PostList[i][2];
        var date_post = PostList[i][3];
        var description_post = PostList[i][4];
        var pos_preview_src = PostList[i][6];

        var categoryLength = PostList[i][5].length;
        var post_categoryArr = [];
        for (var q = 0; q < categoryLength; q++) {
          for (var j = 0; j < class_category_MelekMatematika.length; j++) {
            if (PostList[i][5][q] === class_category_MelekMatematika[j][0]) {
              post_categoryArr[q] =
                "<a style='background-color: " +
                class_category_MelekMatematika[j][2] +
                ";' href='" +
                url_root +
                class_category_MelekMatematika[j][1] +
                "'>" +
                class_category_MelekMatematika[j][0] +
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
        "><a href='/project/master-me'> Master Me </a> >" +
        "<a href='#' class='page-active'> " +
        sub +
        " </a></h4>" +
        "</h4></div>" +
        PostLists.join("");
      idTarget.innerHTML = post_list_new;
    }
  }
}

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
    "<h3><a href='/project/master-me'>Master Me (" +
    navSide_Container.length +
    ")</a></h3><ul>" +
    navSide_Container.join("") +
    "</ul></div></div>";
  idTarget.innerHTML = sideNav;
}
