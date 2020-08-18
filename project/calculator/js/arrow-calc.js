//share
var pageId = document.getElementsByClassName("page-active")[0].id;

var url_root = "/project/calculator/";
var ftArr = footerArray;
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
      pagePrev = ftArr[ftArr.length - 1][2];
      titlePrev = ftArr[ftArr.length - 1][1];
    } else {
      pagePrev = ftArr[i - 1][2];
      titlePrev = ftArr[i - 1][1];
    }
    //Next / Left
    if (pageId === ftArr[ftArr.length - 1][0]) {
      //jump to Start
      pageNext = ftArr[0][2];
      titleNext = ftArr[0][1];
    } else {
      pageNext = ftArr[i + 1][2];
      titleNext = ftArr[i + 1][1];
    }
    //title - page
    titlePage = ftArr[i][1];
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
