
// TASK 1 :

const nav_list = document.querySelector("nav ul");
// console.log(nav_list);

const proj = nav_list.getElementsByTagName("li");
proj[proj.length-1].innerText = "Projects";

const hireMe = document.createElement("li");
hireMe.innerHTML = "<a>Hire Me</a>";
// console.log(hireMe);
nav_list.appendChild(hireMe);





// TASK 2 :
// nav_list.removeChild(hireMe);
const placeHolder = document.querySelector(".search-field input");

placeHolder.setAttribute("placeholder","Search My Project");


// TASK 3 :

const para = document.querySelector(".hero-left-section p");

const span = para.getElementsByTagName("span");
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt Ltd"
// console.log(span);


// TASK 4 :
const profilePic = document.querySelector(".hero-right-section img");
profilePic.setAttribute("src","./image.png");


// TASK 5 :
const pro_btn = document.querySelector(".hero-right-section-btns");
const support = document.createElement("button");
support.innerText = "Support Me";
support.style.padding = "5px";
support.style.width = "100px"

pro_btn.appendChild(support);