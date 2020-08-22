//share
var pageId = document.getElementsByClassName("page-active")[0].id;

var url_root = "https://nasrianas.website/project/melek-matematika";
var PostList = Post_List;

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

var pageNext = "next";
var pagePrev = "prev";

for (i = 0; i < PostList.length; i++) {
  if (pageId === PostList[i][0]) {
    //share
    url = url_root + PostList[i][1];
    //Arrow
    if (pageId === PostList[PostList.length - 1][0]) {
      pageNext = url_root + PostList[0][1];
    } else {
      pageNext = url_root + PostList[i + 1][1];
    }

    if (pageId === PostList[0][0]) {
      pagePrev = url_root + PostList[PostList.length - 1][1];
    } else {
      pagePrev = url_root + PostList[i - 1][1];
    }
  }
}

/*
  <a class="share-btn twitter" href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>">Twitter</a>
  <a class="share-btn facebook" href="https://www.facebook.com/sharer/sharer.php?u=<URL>">Facebook</a>
  <a class="share-btn linkedin" href="https://www.linkedin.com/shareArticle?url=<URL>&title=<TITLE>&summary=<SUMMARY>&source=<SOURCE_URL>">LinkedIn</a>
  <a class='share-btn whatsapp' href='whatsapp://send?text=<URL>'>WhatsApp</a>
  <a class="share-btn email" href="mailto:?subject=<SUBJECT>&body=<BODY>">Email</a>
*/

var share =
  "<a class='share-btn facebook'" +
  "href='https://www.facebook.com/sharer/sharer.php?u=" +
  url +
  "' target='_blank'>Facebook</a>" +
  "<a class='share-btn whatsapp'" +
  "href='whatsapp://send?text=" +
  url +
  "'>WhatsApp</a>";

document.getElementById("share-btn-top").innerHTML = share;
document.getElementById("share-btn").innerHTML = share;
document.getElementById("leftArrow").href = pagePrev;
document.getElementById("rightArrow").href = pageNext;
