const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
var showmore=document.getElementById("showmore");
var hidecont=document.getElementById("hidecont");
var exploreless=document.getElementById("exploreless");
var foot=document.getElementById("foot");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
showmore.addEventListener("click",()=>{
  hidecont.style.display='block'
  showmore.style.display='none'
  foot.style.display='block'
})
exploreless.addEventListener('click',()=>{
  hidecont.style.display='none'
  showmore.style.display='block'
  foot.style.display='none'
})