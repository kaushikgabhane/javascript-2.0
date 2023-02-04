const logo = document.querySelector(".logo");
logo.setAttribute("src","./assets/ineuron-logo.png");



const app_price = document.querySelector(".app_price span");
app_price.textContent = "$10";


const footer_social = document.querySelector(".footer_social");

const footer_social_ico = document.createElement("div");
footer_social_ico.className = "footer_social_ico";
footer_social_ico.innerHTML = ` <i class="fa-brands fa-linkedin"></i> `;
// console.log(footer_social_ico);

footer_social.appendChild(footer_social_ico);