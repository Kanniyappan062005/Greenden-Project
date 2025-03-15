var opennavbar=document.getElementById("open-navbar");
var closenavbar=document.getElementById("close-navbar");
var sidenavbar=document.getElementById("side-navbar");

opennavbar.addEventListener("click", function(){
    sidenavbar.style.right="0%"
})

closenavbar.addEventListener("click", function(){
    sidenavbar.style.right="-50%"
})


//Product Search Functionality
var search=document.getElementById("search")
var productContainer=document.getElementById("product-container")
var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredValue=event.target.value.toUpperCase()

    for(count=0; count<productList.length; count=count+1){

        var productName=productList[count].querySelector(".product-name").textContent

        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }else{
            productList[count].style.display="block"
        }
    }
})