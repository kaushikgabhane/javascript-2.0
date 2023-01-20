const counter = document.querySelector(".count");
const follower = document.querySelector(".followers");
const changeValue = document.getElementsByClassName(".count");
// console.log(counter.innerHTML);


let count1 = 0;
let interval = prompt("Entertime in seconds : " )
let id = setInterval(() => {

    if(count1 <= interval ){
        count1++;
        counter.innerHTML = count1;
    }

    if (count1 == interval) {
        let follower1 = "💥 Times up !! ⏱️";
        follower.innerHTML = follower1;
        clearInterval(id);
    }
}, 1000);