var navContainer = [];
for (i = 0; i < titleBlogCenter.length; i++) {
  navContainer[i] =
    `<li><a href='` + URLBlog[i] + `'>` + titleBlogCenter[i] + `</a></li>`;
}

//side nav
var sideNav =
  "<div id='sideSection-src' class='side-section'>" +
  "<div class='top-line'></div>" +
  //project
  "<div class='sub-side-section'>" +
  "<h3><a href='/project.html'>Project</a></h3>" +
  "<ul>" +
  navContainer.join("") +
  "</ul>" +
  "</div>" +
  //blog
  "<div class='sub-side-section'>" +
  "<h3><a href='/blog.html'>Blog</a></h3>" +
  "</div>" +
  //coding
  "<div class='sub-side-section'>" +
  "<h3><a href='/coding.html'>Coding</a></h3>" +
  "</div>" +
  //Game
  "<div class='sub-side-section'>" +
  "<h3> <a href='/game.html'>Game</a></h3>" +
  "</div>" +
  "</div>";

//default
var pageChoice = 1;

var pageActive = document.getElementsByClassName("page-active")[0].id;

var titlePageActive;
var dateBlogActive;
for (i = 0; i < idBlog.length; i++) {
  if (pageActive === idBlog[i]) {
    titlePageActive = titleBlogCenter[i];
    dateBlogActive = dateBlog[i];
  }
}

if (pageActive) {
  document.getElementById("Blogtitle").innerText = titlePageActive;
  document.getElementById(pageActive).innerText = titlePageActive;
  document.title = "Project: " + titlePageActive;
  document.getElementById("dateBlog").innerText = dateBlogActive;
  //document.getElementById("meta-keywords").content = "Keywords?";
} else {
  page(pageChoice);
}

document.getElementById("sideNav-section").innerHTML = sideNav;

function page(pageChoice) {
  var groupPost;
  var totalPost = 3;
  var pageActive = pageChoice;

  console.log(pageActive);
  var maxPage = Math.ceil(titleBlogCenter.length / totalPost);
  for (i = 0; i < maxPage; i++) {
    var equation = i + 1;
    if (pageActive == equation) {
      groupPost = equation * totalPost;
    }
  }
  var summaryStart = titleBlogCenter.length - groupPost;
  var pageDiplay;
  if (titleBlogCenter.length - summaryStart < totalPost) {
    pageDiplay = titleBlogCenter.length - summaryStart;
  } else {
    pageDiplay = totalPost;
  }
  var summaryContainer = [];
  for (i = 0; i < pageDiplay; i++) {
    var page = i + summaryStart;
    summaryContainer[page] =
      `<a class='summary-page-title' href='` +
      URLBlog[page] +
      `'><h2>` +
      titleBlogCenter[page] +
      `</h2><h6>` +
      dateBlog[page] +
      `</h6><p>` +
      descriptionBlog[page] +
      `</p></a>`;
  }
  summaryContainer.reverse();
  var summary =
    "<div class='summary-title-center'><h1>Project Area</h1>" +
    "<h5>Page :  " +
    pageActive +
    " / " +
    maxPage +
    "</h5></div>" +
    "<div id='numberNavs2' class='numberNavs'></div>" +
    summaryContainer.join("");

  var numberNav = [];
  for (i = 0; i < maxPage; i++) {
    var num = i + 1;
    numberNav[i] =
      "<div class='numberNav' onclick='page(" + num + ")'>" + num + "</div>";
  }

  var numberNavContainer =
    "<div class='arrowNav' onclick=''><</div>" +
    numberNav.join("") +
    "<div class='arrowNav' onclick=''>></div>";

  document.getElementById("summary").innerHTML = summary;
  document.getElementById("numberNavs").innerHTML = numberNavContainer;
  document.getElementById("numberNavs2").innerHTML = numberNavContainer;
}
