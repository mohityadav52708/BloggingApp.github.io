const text=document.querySelector(".Imaginations");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="Developer";
    },0);
    setTimeout(()=>{
        text.textContent="Freelancer";
    },4000);
    setTimeout(()=>{
        text.textContent="Designer";
    },8000);
}
textLoad();
setInterval(textLoad,12000);

const button=document.getElementById("mybutton");
mybutton.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
});

