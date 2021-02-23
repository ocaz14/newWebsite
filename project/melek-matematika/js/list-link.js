var url_root = "https://nasrianas.website/project/melek-matematika";
var PostList = footerArray;

// var id_post = PostList[i][0];
// var url_post = url_root + PostList[i][1];
// var name_post = PostList[i][2];
// var date_post = PostList[i][3];
// var description_post = PostList[i][4];
// var post_category = PostList[i][5];
// var post_preview_src = PostList[i][6];

//full-width list
var listTitle = document.getElementById("list-title");
if(listTitle){
  var rekArr = [];
  var rekResult = [];                      
  for(var i=0; i<footerArray.length; i++){                //cek kategori pada semua anggota
      for(var j=0; j<footerArray[i][5].length; j++){      //cek kategori dari anggota
          if(footerArray[i][5][j] == listTitle.innerText){
            rekArr.push(footerArray[i][0]);
          }
      }
  }
  for(var i=0; i<rekArr.length; i++){
      rekResult[i] = "<a class='"+rekArr[i]+"'></a>";
    }
  document.getElementById("sub-list").innerHTML = rekResult.join("");
}


//link for every matched class
for (i = 0; i < PostList.length; i++) {
  var x = document.getElementsByClassName(PostList[i][0]);
  for (var n = 0; n < x.length; n++) {
    x[n].href = url_root + PostList[i][1];
    x[n].innerHTML = "<li>" + PostList[i][2] + "</li>";
  }
}




