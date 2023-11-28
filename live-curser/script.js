var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // console.log(dets);
    crsr.style.left = dets.x+"px"
    crsr.style.top  = dets.y+"px" 
    blur.style.left = dets.x - 60 +"px"
    blur.style.top  = dets.y - 60 +"px" 
})