var url_root = "/project/melek-matematika";
var PostList = Post_List;

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

var class_category = [
  ["Pecahan", "#pecahan", "var(--color1)"],
  ["Persen", "#persen", "var(--color2)"],
];

var idAll = document.getElementById("post_list_new");
var idPecahan = document.getElementById("post_list_pecahan");

postList_display_all(PostList, idAll);
postList_display(PostList, idPecahan, "pecahan");

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
          console.log(q + " , ", +j);
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

  var PostLists_reverse = PostLists.reverse();
  var post_list_new =
    "<div class='nav-page'><h4><a href='/index'> Home </a>><a href='/project'> Project </a>" +
    "><a href='/project/melek-matematika' class='page-active'> Melek Matematika </a></h4></div>" +
    PostLists_reverse.join("");

  idTarget.innerHTML = post_list_new;
}

function postList_display(PostList, idTarget, sub) {
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
      for (var j = 0; j < class_category.length; j++) {
        if (PostList[i][5][q] === class_category[j][0]) {
          post_categoryArr[q] =
            "<a style='background-color: " +
            class_category[j][2] +
            ";' href='" +
            class_category[j][1] +
            "'>" +
            class_category[j][0] +
            "</a>";
          console.log(q + " , ", +j);
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

  var PostLists_reverse = PostLists.reverse();
  var post_list_new =
    "<div class='nav-page'><a name=" +
    sub +
    "></a><h4><a href='/index'> Home </a>><a href='/project'> Project </a>" +
    "><a href='/project/melek-matematika'> Melek Matematika </a> >" +
    "<a href='/project/melek-matematika#" +
    sub +
    "' class='page-active'> " +
    sub +
    " </a></h4>" +
    "</h4></div>" +
    PostLists_reverse.join("");

  idTarget.innerHTML = post_list_new;
}
