# DOM Assignments 1,2 and 3

## **Assignment  1 :** 
---
---

***Task 1*** :  Add a list item to the navigation section named " Hire Me ".

![output](./firstAssignmentImage/task1Output.png)

Ans. Code :

```
const nav_list = document.querySelector("nav ul");

const proj = nav_list.getElementsByTagName("li");
proj[proj.length-1].innerText = "Projects";

const hireMe = document.createElement("li");

hireMe.innerHTML = "<a>Hire Me</a>";

nav_list.appendChild(hireMe);
```

___

***Task 2*** :  Replace the placeholder value from "Search" to "Search My Project" and remove "Hire Me" .

![output](./firstAssignmentImage/task2Output.png)

Ans. Code :

```
const placeHolder = document.querySelector(".search-field input");

placeHolder.setAttribute("placeholder","Search My Project");
```
---


***Task 3*** : Change the innerText of 2nd and 3rd span element inside .hero-left-section > p tag.

![output](./firstAssignmentImage/task3Output.png)

Ans. Code :

```
const para = document.querySelector(".hero-left-section p");

const span = para.getElementsByTagName("span");
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt Ltd"
```
---

**Task 4** : Change the profile picture.

![output](./firstAssignmentImage/task4Output.png)

Ans. Code :

```
const profilePic = document.querySelector(".hero-right-section img");
profilePic.setAttribute("src","./image.png");
```
---

**Task 5** : Add a "Support Me" button aside of "chat with me button.

![output](./firstAssignmentImage/task5Output.png)

Ans. Code :

```
const pro_btn = document.querySelector(".hero-right-section-btns");
const support = document.createElement("button");
support.innerText = "Support Me";
support.style.padding = "5px";
support.style.width = "100px"

pro_btn.appendChild(support);
```
---