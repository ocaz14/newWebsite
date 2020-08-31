var url_root = "/project/calculator";
var ftArr = footerArray;

var nav_links = [];
for (var i = 0; i < ftArr.length; i++) {
  var thisURL = url_root + ftArr[i][1];
  var thisTitle = ftArr[i][2];
  nav_links[i] = "<div><a href='" + thisURL + "'>" + thisTitle + "</a></div>";
}

var footer =
  "<div class='nav-link'>" +
  "<h3>Lihat Juga</h3>" +
  nav_links.join("") +
  "</div>";

document.getElementById("footer").innerHTML = footer;
