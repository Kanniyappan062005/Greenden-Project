var opennavbar=document.getElementById("open-navbar");
var closenavbar=document.getElementById("close-navbar");
var sidenavbar=document.getElementById("side-navbar");

opennavbar.addEventListener("click", function(){
    sidenavbar.style.right="0%"
})

closenavbar.addEventListener("click", function(){
    sidenavbar.style.right="-50%"
})