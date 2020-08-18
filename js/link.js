//internal link
var linkId = idBlog;
var linkPage = URLBlog;

for (i = 0; i < linkId.length; i++) {
  if (document.getElementById(linkId[i])) {
    document.getElementById(linkId[i]).href = linkPage[i];
  }
}
