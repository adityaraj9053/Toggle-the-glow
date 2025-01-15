const switchBtn = document.querySelector(".switch");// selecting switch
const body = document.body; 

switchBtn.addEventListener("click",()=>{  
    body.classList.toggle("on");

});
