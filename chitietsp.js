const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll("product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})
const mota = document.querySelector(".mota")
const chatlieu = document.querySelector(".chatlieu")
if(mota){
    mota.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-mota").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-chatlieu").style.display = "block"
    })
}
if(chatlieu){
    chatlieu.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-mota").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-chatlieu").style.display = "none"
    })
}
const button = document.querySelector(".product-content-right-bottom-top")
if(button){
    button.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}
