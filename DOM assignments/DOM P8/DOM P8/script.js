const aside = document.querySelector(".new");

aside.style.border = "5px solid red";

const hrLine = document.createElement("hr");
const heading = document.createElement("h2");
const para = document.createElement("p");

hrLine.className = "hr-line";
heading.className = "new-head";
para.className = "new-p";


heading.textContent = "This is my custom heading";
para.textContent = "This is my custom para ";


aside.appendChild(hrLine);
aside.appendChild(heading);
aside.appendChild(para);

aside.style.overflowY = "scroll";
aside.style.overflowX = "hidden";


// Task two

// document.body.style.backgroundImage = "none";

// task three
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar-brand");
const button = document.querySelector(".navbar-toggler");
const navList = document.querySelector("#navbarTogglerDemo01");
const div  = document.createElement("div");

div.appendChild(button);
div.appendChild(navList);

navbar.appendChild(div);

button.addEventListener("click",() => {
    logo.style.position = "relative";
    logo.style.bottom = "87px";

    button.style.width = "max-content";
    button.style.marginLeft = "50px";
    button.style.marginBottom = "20px";
    
    navList.removeAttribute("class","collapse");

    button.addEventListener("click",() => {

        navList.setAttribute("class", "collapse");
        logo.style.position = "static";

    })
    
});