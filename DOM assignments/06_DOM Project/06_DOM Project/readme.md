# ***DOM Assignments 6*** :-

***Task 1*** : Change the logo with logo of iNeuron logo.

![output](./Output/DOM%20P3%20SS-1.png)

Ans. Code :

```
const logo = document.querySelector(".logo");
logo.setAttribute("src","./assets/ineuron-logo.png");
```
___
___
***Task 2*** : Change the price value and add a linkedin icon in footer section.

![output](./Output/DOM%20P3%20SS-2.png)

Ans. Code :

```
<!-- This code part will change the price value -->

const app_price = document.querySelector(".app_price span");
app_price.textContent = "$10";



<!-- selects the footer section -->

const footer_social = document.querySelector(".footer_social");



<!-- This will add the new linkedin icon in footer section -->


const footer_social_ico = document.createElement("div");
footer_social_ico.className = "footer_social_ico";
footer_social_ico.innerHTML = ` <i class="fa-brands fa-linkedin"></i> `;
// console.log(footer_social_ico);

footer_social.appendChild(footer_social_ico);
```
---
---
# **❤️ Thank you for visiting 😀🫡 !**