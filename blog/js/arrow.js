//share
var pageId = document.getElementsByClassName("page-active")[0].id;

var url_root = "https://nasrianas.website/blog";
var ftArr = Post_List;

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

//next-pre nav
var pageNext = "#";
var pagePrev = "#";

var titlePrev = " ";
var titleNext = " ";

var titlePage = "Unknown";

for (i = 0; i < ftArr.length; i++) {
  if (pageId === ftArr[i][0]) {
    //Prev / Rigth
    if (pageId === ftArr[0][0]) {
      //jump to End
      pagePrev = ftArr[ftArr.length - 1][1];
      titlePrev = ftArr[ftArr.length - 1][2];
    } else {
      pagePrev = ftArr[i - 1][1];
      titlePrev = ftArr[i - 1][2];
    }
    //Next / Left
    if (pageId === ftArr[ftArr.length - 1][0]) {
      //jump to Start
      pageNext = ftArr[0][1];
      titleNext = ftArr[0][2];
    } else {
      pageNext = ftArr[i + 1][1];
      titleNext = ftArr[i + 1][2];
    }
    //title - page
    titlePage = ftArr[i][2];
  }
}

//arrow-title
document.getElementById("leftArrow").innerHTML =
  "<div class='left-arrow'>Previous</div><h5 class='lA'>" + titlePrev + "</h5>";
document.getElementById("rightArrow").innerHTML =
  "<div class='right-arrow'>Next</div><h5 class='rA'>" + titleNext + "</h5>";
//arrow-URL
document.getElementById("leftArrow").href = url_root + pagePrev;
document.getElementById("rightArrow").href = url_root + pageNext;

//HTML title
document.title = titlePage;