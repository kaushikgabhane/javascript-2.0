# ***DOM Assignments 4*** :-

***Task 1*** : Match the output with the given output image with the help of DOM manipulation.

![output](./Output/DOM%20P1%20SS.png)

Ans. Code :

```
<!-- This code part will change the background color of the respective cards unit stats -->


const barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
barbarian.style.backgroundColor = "#F2CD5C";

const archer = document.querySelector(".clash-card__unit-stats--archer");
archer.style.backgroundColor = "#F56EB3";

const giant = document.querySelector(".clash-card__unit-stats--giant");
giant.style.backgroundColor = "#FF8B13";

const goblin = document.querySelector(".clash-card__unit-stats--goblin");
goblin.style.backgroundColor = "#82CD47";

const wizard = document.querySelector(".clash-card__unit-stats--wizard");
wizard.style.backgroundColor = "#39B5E0";



<!-- This part will select each stat of each card -->

const stat = document.querySelectorAll(".stat");
const stat_value = document.querySelectorAll(".stat-value");



<!-- Convert that collection of values to an array  collection -->

const stat_arr = [...stat];
const stat_value_arr = [...stat_value];



<!-- This will chanage the color of state value and states color -->

stat_arr.map((ele)=> ele.style.color = "white");
stat_value_arr.map((ele)=> ele.style.color = "white");


```

___
___
# **💚 Thank you for visiting 😀🫡 !**