const button = document.getElementById("themeToggle");

button.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
button.innerHTML="☀️";
}else{
button.innerHTML="🌙";
}

});

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

sections.forEach(section=>{
observer.observe(section);
});