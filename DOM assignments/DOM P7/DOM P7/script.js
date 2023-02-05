const all_lang = document.querySelectorAll(".main_languages");
const all_lang_name = document.querySelectorAll(".main__languages a");

const all_lang_arr = [...all_lang_name];

const input = document.querySelector(".main__form-input");
// console.log(input);
input.removeAttribute("disabled");
input.setAttribute("placeholder","iNeuron");

const submit = document.querySelector(".main__form-btn");
submit.removeAttribute("disabled");

document.addEventListener("load",()=>{


});