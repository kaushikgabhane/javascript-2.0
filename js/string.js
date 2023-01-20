// let string = "kaushik";

let count = 0 ;
function vowel(string) {
    for (let i = 0; i <= string.length; i++) {
        if (string[i]==="a" || string[i]==="i" || string[i]==="o" || string[i]==="e" || string[i]==="u" || string[i]==="A" || string[i]==="I" || string[i]==="O" || string[i]==="E" || string[i]==="U") {
            count++;
        }
    }

    console.log(`Number of vowels in given string is : ${count}`);
}

vowel("I am a aspiring full stack developer .");