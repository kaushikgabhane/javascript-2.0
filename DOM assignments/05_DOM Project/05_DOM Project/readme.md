# ***DOM Assignments 5*** :-

***Task 1*** : Match the output with the given output image with the help of DOM manipulation.

![output](./Output/DOM%20P2%20SS.png)

Ans. Code :

```
<!-- This will add a Pro Subscription button. -->

const div = document.querySelectorAll(".nav-center div");

const subscription = document.createElement("a");
subscription.className = "subscription_btn";
subscription.innerText = "Pro Subscription";
subscription.style.padding = "12px";
subscription.style.backgroundColor = "#6C4AB6";
subscription.style.borderRadius = "5px"
subscription.style.color = "#fff";
subscription.style.fontSize = "20px";

div[div.length-1].appendChild(subscription);



<!-- This will add chinese as iteam 7. -->

const parent_div = document.querySelector(".tags-container div");
const chinese = document.createElement("a");
chinese.setAttribute("href","#");
chinese.innerText = "Chinese(7)";
parent_div.appendChild(chinese);



<!--  This will add  the 6th card. -->

const recipe_gallery = document.querySelector(".recipe-gallery");

const card_6 = document.createElement("div");
card_6.className = "card";

const recipe_text = document.createElement("a");
recipe_text.className = "recipe-text";
recipe_text.setAttribute("href","#");

const image = document.createElement("img");
image.className = "recipe-img";
image.setAttribute("src","./img/recipe-1.jpeg");

const recipe_name = document.createElement("h5");
recipe_name.className = "recipe-name";
recipe_name.innerText = "6th card added";


recipe_text.appendChild(image);
recipe_text.appendChild(recipe_name);
card_6.appendChild(recipe_text);
recipe_gallery.appendChild(card_6);
// console.log(recipe_text);



<!-- Add Your Name in footer -->

const name1 = document.querySelector(".page-footer p a");
name1.innerText = "Kaushik Gabhane";
console.log(name1);
```
___
___
# **💜 Thank you for visiting 😀🫡 !**