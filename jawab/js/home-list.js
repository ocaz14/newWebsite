// var url_root = "https://nasrianas.website/jawab";
var PostListAll = footerArray;
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
  class_category_calc,
  document.getElementById("categoryContainer")
);
var sidenavAll = document.getElementById("sideNav-section");
if (sidenavAll) {
  sideNav_display(PostList, sidenavAll);
}

//calculator home
var idAll = document.getElementById("post_list_new");
if (idAll) {
  postList_display_all(PostList, idAll);
}
// calculator sub home
var idList = [
  document.getElementById("post_list_waktu"),
  document.getElementById("post_list_suhu"),
  document.getElementById("post_list_bilangan"),
  document.getElementById("post_list_kecepatan"),
  document.getElementById("post_list_trigonometri"),
  document.getElementById("post_list_berat"),
  document.getElementById("post_list_pangkat"),
  document.getElementById("post_list_pecahan"),
  document.getElementById("post_list_persen"),
];

for (var sub = 0; sub < idList.length; sub++) {
  postList_Category(PostList, class_category_calc[sub][0], idList[sub]);
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
      for (var j = 0; j < class_category_calc.length; j++) {
        if (PostList[i][5][q] === class_category_calc[j][0]) {
          post_categoryArr[q] =
            "<a style='background-color: " +
            class_category_calc[j][2] +
            ";' href='" +
            url_root +
            class_category_calc[j][1] +
            "'>" +
            class_category_calc[j][0] +
            "</a>";
        }
      }
    }

    PostLists[i] =
      "<div class='post-list'>" +
      // "<a href='" +
      // url_post +
      // "'><div class='post-preview'><img src='" +
      // pos_preview_src +
      // "' alt='" +
      // name_post +
      // "'></div></a>" +
      "<div class='post-description-container'><div class='post-title'><a href='" +
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
    "><a href='/project/calculator' class='page-active'> Kalkulator Online </a></h4></div>" +
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
          for (var j = 0; j < class_category_calc.length; j++) {
            if (PostList[i][5][q] === class_category_calc[j][0]) {
              post_categoryArr[q] =
                "<a style='background-color: " +
                class_category_calc[j][2] +
                ";' href='" +
                url_root +
                class_category_calc[j][1] +
                "'>" +
                class_category_calc[j][0] +
                "</a>";
            }
          }
        }
        PostLists[i] =
          "<div class='post-list'>" +
          // "<a href='" +
          // url_post +
          // "'><div class='post-preview'><img src='" +
          // pos_preview_src +
          // "' alt='" +
          // name_post +
          // "'></div></a>" +
          "<div class='post-description-container'><div class='post-title'><a href='" +
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
        "<div class='nav-page'><h4><a href='/index'> Home </a>|<a href='/project'> Project </a>" +
        "|<a href='/project/melek-matematika'> Melek Matematika </a> >" +
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
    "<h3><a href='/project/melek-matematika'>Melek Matematika (" +
    navSide_Container.length +
    ")</a></h3><ul>" +
    navSide_Container.join("") +
    "</ul></div></div>";
  idTarget.innerHTML = sideNav;
}
