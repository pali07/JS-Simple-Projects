const inbtn = document.querySelector(".in");
const debtn = document.querySelector(".de");
const rebtn = document.querySelector(".rst");
const btn = document.querySelector(".btn");
let countEle = document.querySelector(".count");
let count=0;
inbtn.addEventListener("click",increase);
debtn.addEventListener("click",decrease);
rebtn.addEventListener("click",reset);
function increase(){
  count++;
  countEle.innerHTML=count;
  if(count>0){
        countEle.style.color = "green";
    }
  if(count==0){
        countEle.style.color = "black";
    }
}
 function decrease(){
   count--;
   countEle.innerHTML=count;
   if(count<0){
        countEle.style.color = "red";
    }
  if(count==0){
        countEle.style.color = "black";
    }
 }
function reset(){
  count=0;
  countEle.innerHTML=count;
  if(count==0){
        countEle.style.color = "black";
    }
}
