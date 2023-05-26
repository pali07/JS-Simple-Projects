const  btnn = document.querySelector(".btn");
const bodyy = document.querySelector("body");

var colors = ["green","red","blue","violet","indigo","yellow","Orange"];
btnn.addEventListener("click",addcolor);
function addcolor(){
  var c = Math.floor(Math.random()*colors.length);
  bodyy.style.backgroundColor=colors[c];
}

