const all_lang = document.querySelectorAll(".main_languages");
// console.log(all_lang);
const all_lang_name = document.querySelectorAll(".main__languages a");

const all_lang_arr = [...all_lang_name];
// console.log(all_lang_arr);

// let flag = true;
// if(flag){

//     for (let i = 0; i < all_lang_arr.length; i++) {
//         const x = (all_lang_arr[i].textContent).includes("2.0");
//         if (x) {
//             all_lang_arr[i].textContent = "";
//         }
//     }
// }

let elementsWithout2_0 = [];
let elementsWith2_0 = [];

for (let i = 0; i < all_lang_arr.length; i++) {
    const x = (all_lang_arr[i].textContent).includes("2.0");
    if (x) {
        elementsWith2_0.push(all_lang_arr[i]);
    }
    else{
        elementsWithout2_0.push(all_lang_arr[i]);
    }
}


const input = document.querySelector(".main__form-input");
// console.log(input);
input.removeAttribute("disabled");
input.setAttribute("placeholder","iNeuron");

const submit = document.querySelector(".main__form-btn");
submit.removeAttribute("disabled");

document.addEventListener("load",()=>{


});