const msg = document.querySelector("input");
const btn = document.querySelector("button");
const messageEl = document.querySelector(".last_message");
const errorEl = document.querySelector(".Error");
const lastEl = document.querySelector(".last h3");
btn.addEventListener("click",send);
function send(){
  if(msg.value){
   messageEl.style.display="block";
    lastEl.style.display="block";
   messageEl.textContent=msg.value;
    msg.value="";
  }
  else{
    errorEl.style.display="block";
    setInterval(() => {
        errorEl.style.display = "none";
       }, 1000);
  }
}
