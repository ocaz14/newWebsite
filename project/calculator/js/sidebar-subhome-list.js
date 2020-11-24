var sidebar_subhome = document.getElementById("sidebar");
var full_member = document.getElementById("full_member");
var header_title_id = document.getElementById("header_title")

var url_root = "https://nasrianas.website/project/calculator";
var cat = class_category_calc;

var catArr = [];
for(var i = 0; i<cat.length; i++){
    catArr[i] = "<a href='"+url_root+cat[i][1]+"'><li>"+cat[i][0]+"</li></a>"
}

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

var sidebars = 
"<div class='sidebar-child'>"+
"<h3>Kategori</h3>"+
"   <ul>"+
    catArr.join("") +
"   </ul>"+
"</div>"+
"<div class='sidebar-child'>"+
"   <h3>Lihat Juga</h3>"+
"   <ul>"+
    lihatJuga_result.join("") +
"   </ul>"+
"</div>";

if(sidebar_subhome){
    sidebar_subhome.innerHTML = sidebars;
}

if(header_title_id){
    var member_title = header_title_id.innerText
}
reset();

addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      search();
    }
});

function reset(){
    member_function(member_title);
}

function search(){
    var pencarian = document.getElementById("cari").value;
    var full_member_arr = [];

    for(var i=0; i<footerArray.length; i++){ 
        var penc_lowerCase = pencarian.toLowerCase();
        var desc_lowerCase = footerArray[i][4].toLowerCase();
        var title_lowerCase = footerArray[i][2].toLowerCase();        
        if(desc_lowerCase.includes(penc_lowerCase)){
            full_member_arr = push_noDuplicate(full_member_arr, footerArray[i])
        }else if(title_lowerCase.includes(penc_lowerCase)){
            full_member_arr = push_noDuplicate(full_member_arr, footerArray[i])
        }
    }    
    var pencarian_disp = "<span class='color1'>"+pencarian+"</span>";
    var close_search = "<span class='close-search'><button onclick='reset()'>x</button></span>";
    member_disp(full_member_arr, "Hasil Pencaran dari: " + pencarian_disp + close_search);
}

//full member
function member_function(member_title){
    var full_member_arr = [];
    if(header_title_id){
        for(var i=0; i<footerArray.length; i++){                //cek kategori pada semua anggota
            for(var j=0; j<footerArray[i][5].length; j++){      //cek kategori dari anggota
                if(footerArray[i][5][j] == member_title){
                    full_member_arr.push(footerArray[i])
                }
            }
        }
    }else{
        full_member_arr = footerArray;
        var member_title = "Daftar Lengkap";
    }
    member_disp(full_member_arr, member_title);
}

function member_disp(full_member_arr, member_title){
    var member_arr = [];
    for(var i=0; i< full_member_arr.length; i++){
        member_arr[i] =  
        "  <a href='"+
            url_root+full_member_arr[i][1]+
            "'>"+
        "    <li>"+
        "       <h4>"+ 
                full_member_arr[i][2]+
                "</h4>"+
                "<p class='description'>"+
                full_member_arr[i][4]
                +"</p>"+
        "    </li>"+
        "  </a>";
    }
    
    var full_member_disp =     
    "<div class='input-cont'>"+
        "<input id='cari' type='text' placeholder='Pencarian'/>"+
        "<button onclick='search()'>Cari</button>"+
    "</div>"+      
    "<h2>"+
        member_title+
    "</h2>"+
    "<ul>"+
        member_arr.join("") +
    "</ul>";
    
    if(full_member){
        full_member.innerHTML = full_member_disp;
    }
}

function push_noDuplicate(full_member_arr, data){
    if(full_member_arr.includes(data)){
        return
    }else{
        full_member_arr.push(data);
        return full_member_arr;
    }    
}






