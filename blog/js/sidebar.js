var pageId = document.getElementsByClassName("page-active")[0].id;
var pageCategory;
var cat = class_category;

if(pageId){
    for(var i=0; i<footerArray.length; i++){
        if(footerArray[i][0] == pageId){
            pageCategory = footerArray[i][5];
        }
    }
}

//sidebar
var sidebar = document.getElementById("sidebar");

//rekomendasi sidebar
var rekArr = [];
var rekResult = [];
var jumlah_Category = pageCategory.length;

for(var n = 0; n<jumlah_Category; n++){                     //tiap kategori pada halaman terpilih 
    for(var i=0; i<footerArray.length; i++){                //cek kategori pada semua anggota
        for(var j=0; j<footerArray[i][5].length; j++){      //cek kategori dari anggota
            if(footerArray[i][5][j] == pageCategory[n]){
                push_noDuplicate(footerArray[i][0])
            }
        }
    }
}

function push_noDuplicate(data){
    if(rekArr.includes(data)){
        return
    }else{
        rekArr.push(data);
    }
}

for(var i=0; i<rekArr.length; i++){
    rekResult[i] = "<a class='"+rekArr[i]+"' href=''></a>";
}

var rekomendasi_Sidebar = 
"<h3>Lihat Juga</h3>"+
"<ul>"+
rekResult.join("");
"</ul>";


//Lihat Juga Sidebar
var catArrAll = [];
for(var i=0; i< cat.length; i++){                       //semua kategori
    catArrAll.push(cat[i][0])
}

var chosenCat = [];
for(var n = 0; n< catArrAll.length; n++){                   //list dari 
    var catMember = [];
    for(var i=0; i<footerArray.length; i++){                //cek kategori pada semua anggota
        for(var j=0; j<footerArray[i][5].length; j++){      //cek kategori dari anggota
            if(footerArray[i][5][j] == catArrAll[n]){
                catMember.push(footerArray[i][0])
            }
        }
    }
    var member_Random = Math.floor(Math.random() * catMember.length);
    chosenCat.push(catMember[member_Random]);
}

var lihatJuga_result = [];
for(var i=0; i<chosenCat.length; i++){
    lihatJuga_result[i] = "<a class='"+chosenCat[i]+"' href=''></a>";
}



var lihatjuga_Sidebar = 
"<h3>LIHAT JUGA</h3>"+
"<ul>"+
lihatJuga_result.join("");
"</ul>";

//pilih 5 array acak untuk ditampilkan di sidebar
var All_IDarray = array_IDpage(footerArray);
var fiveId = rand_IDpage(All_IDarray, 5);
var choosenList = listofClass(fiveId, "Lihat Juga"); 

sidebar.innerHTML = 
"<div class='sidebar-child'>"+
choosenList+
"</div>"
// "<div class='sidebar-child'>"+
// rekomendasi_Sidebar+
// "</div>"
// +
// "<div class='sidebar-child'>"+
// lihatjuga_Sidebar+
// "</div>"
;



function array_IDpage(fullArray){
    //mengumpulkan semua id pada array. 
    var id_Array = [];
    for (var i = 0; i<fullArray.length; i++){
        id_Array.push(fullArray[i][0]);         
    }
    return id_Array;
}

function rand_IDpage(pageArray, n){
    //menghasilkan n buah dengan memilih secara acak dari array
    var newArr = [...pageArray];   
    var resultArr = []; 
    for(var i = 0; i< n; i++ ){
        var indexArr = Math.floor(Math.random() * newArr.length);   //bangkitkan bilangan acak
        resultArr.push(newArr[indexArr]);       //masukkan yg terpilih ke array baru 
        newArr.splice(indexArr,1);              //hapus array terpilih
    }
    return resultArr
}

function listofClass(array, nameofList){
    //menampilkan array dalam List
    var resultArr = [];
    for(var i=0; i<array.length; i++){
        resultArr[i] = "<a class='"+array[i]+"' href=''></a>";
    }
    var resultList = 
        "<h3>"+ nameofList +"</h3>"+
        "<ul>"+
        resultArr.join("");
        "</ul>";
    return resultList
}
