//share
var pageId = document.getElementsByClassName("page-active")[0].id;

// var url_root = "https://nasrianas.website/jawab";
var ftArr = footerArray;
//next-pre nav
var pageNext = "#";
var pagePrev = "#";

var titlePrev = " ";
var titleNext = " ";

var titlePage = "Unknown";
var urlPage = '#';
var calc_description = "";

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
    urlPage = url_root + ftArr[i][1];
    calc_description = ftArr[i][4];
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
let thispageTitle = document.title;
//document.title = thispageTitle + " " + titlePage;

var blogTitle = document.getElementById("Blogtitle");
if(blogTitle){
  blogTitle.innerText = titlePage;
}

var calc_desc = document.getElementById("calc_desc");
if(calc_desc){
  calc_desc.innerHTML = calc_description;
}


var share =
  "<a class='share-btn facebook'" +
  "href='https://www.facebook.com/sharer/sharer.php?u=" +
  urlPage +
  "' target='_blank'>Facebook</a>" +
  "<a class='share-btn whatsapp'" +
  "href='whatsapp://send?text=" +
  urlPage +
  "'>WhatsApp</a>";

var shareBtn = document.getElementById("share-btn-top");
if(shareBtn){
  shareBtn.innerHTML = share;
}


