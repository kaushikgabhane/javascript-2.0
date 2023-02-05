# ***DOM Assignments 9*** :-

***Task 1*** : Change the heading color.

### Before image
![Before image](./ass9.1-before.png)

### After image
![After image](./ass9.1-after.png)

Ans. Code :

```
const heading  = document.querySelector(".caption .title");
heading.style.color = "#D61355";
```
___
___

***Task 2*** : Change the color color of cart button on click event.

### Before image 👇
![Before image](./ass9.2-before.png)

### After image 👇
![After image](./ass9.2-after.png)

Ans. Code :

```
const cartButton = document.querySelector(".add-to-cart");

cartButton.addEventListener("click", () => {
    cartButton.style.backgroundColor = "#D61355";
});

```
___
___
#  💚 If you like hit that star 💫 for this repository 😉.
# 💥💛 Thanks for visiting ❤️!