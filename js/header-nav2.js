var header = document.getElementById("header-nav");

header.innerHTML = 
"<div class='logo-container'>"+
"   <div class='logo'>"+
"       <a href='/index'><img src='/img/logo.svg' alt=''></a>"+
//"       <a href='/index'><img src='/img/logo3.png' alt=''></a>"+
"   </div>"+
"   <div class='logo-name'><a href='/index'>nasrianas.website</a></div>"+
"</div>"
+
"<div class='navlinks-cont'>"+
"   <a href='/index'><div class='nav-child'>Home</div></a>"+
"   <a href='/blog'><div class='nav-child'>Blog</div></a>"+
"   <a href='/coding'><div class='nav-child'>Coding</div></a>"+
"   <a href='/project'><div class='nav-child'>Project</div></a>"+
"</div>"
;


var themeColor = document.getElementById("theme-color");
if(themeColor){
    themeColor.content = " #111111";
}
var icon = document.getElementById("icon");
if(icon){
    icon.href = "/img/logo.svg";
}


      
      
        
      
      
    
    
      
     
      
    