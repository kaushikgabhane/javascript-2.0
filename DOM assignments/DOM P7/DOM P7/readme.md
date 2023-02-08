# ***DOM Assignments 7*** :-

***Task 1*** : Remove all the languages conataining 2.0 string.

### Before image 👇
![Before image](./ass7.1-before.png)

### After image 👇
![After image](./ass7.1-after.png)

Ans. Code :

```
<!-- This will fetch all languages -->👇
const all_lang_name = document.querySelectorAll(".main__languages a");

<!-- This will convert node list of all languages to array -->👇
const all_lang_arr = [...all_lang_name];

<!-- This will remove all languages with 2.0 string -->👇
all_lang_arr.forEach((ele) => {
   return ele.textContent.includes("2.0")? ele.style.display = "none":``;
});


```

___
___
***Task 2*** : Use JavaScript to write something in
the input box and submit the form. This should refresh
the page and the languages in the left card should come
back.

### Before image 👇
![Before image](./ass7.2-before.png)

### After image 👇
![After image](./ass7.2-after.png)

Ans. Code :

```
<!-- This will fetch and update input attributes placeholder -->👇
const input = document.querySelector(".main__form-input");
input.removeAttribute("disabled");
input.setAttribute("placeholder","iNeuron");

<!-- This will enables submit button -->👇
const submit = document.querySelector(".main__form-btn");
submit.removeAttribute("disabled");


<!-- This is adding submit functionality to form and preventDefault method to bring back all languages -->👇
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
   for(let ele of all_lang_arr){
      if (ele.textContent.includes("2.0")) {
         ele.style.display = "inline";
      }
   }
   input.value  = "";
   e.preventDefault();

});
```
___
___

# **🧡 Thank you for visiting 💚 !**