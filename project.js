document.getElementById("elipsis1").onclick=show1;
function show1(){
    document.getElementById("drop1").classList.toggle("display");
}
document.getElementById("elipsis2").onclick=show2;
function show2(){
    document.getElementById("drop2").classList.toggle("display");
}
document.getElementById("elipsis3").onclick=show3;
function show3(){
    document.getElementById("drop3").classList.toggle("display");
}
document.getElementById("elipsis4").onclick=show4;
function show4(){
    document.getElementById("drop4").classList.toggle("display");
}
document.getElementById("right").onclick=show5;
function show5(){
    document.getElementById("drop5").classList.toggle("show1");
    var ele=document.getElementById("drop5").classList;
    console.log(ele);
}