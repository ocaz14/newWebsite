//share
var pageId = document.getElementsByClassName("page-active")[0].id;
console.log(pageId);

var readId = idBlog;
var URLShare = URLBlog;

var website = "https://www.nasrianas.website";
var URL = "Error";
//next-pre nav
var pageNext = "next";
var pagePrev = "prev";

for (i = 0; i < readId.length; i++) {
  if (pageId === readId[i]) {
    URL = URLShare[i];
    //next-pre nav
    pageNext = URLShare[i + 1];
    pagePrev = URLShare[i - 1];
  }
}

if (pageId === readId[0]) {
  pagePrev = URLShare[readId.length - 1];
}
if (pageId === readId[readId.length - 1]) {
  pageNext = URLShare[0];
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
  website +
  URL +
  "' target='_blank'>Facebook</a>" +
  "<a class='share-btn whatsapp'" +
  "href='whatsapp://send?text=" +
  website +
  URL +
  "'>WhatsApp</a>";

document.getElementById("share-btn").innerHTML = share;
document.getElementById("leftArrow").href = pagePrev;
document.getElementById("rightArrow").href = pageNext;
