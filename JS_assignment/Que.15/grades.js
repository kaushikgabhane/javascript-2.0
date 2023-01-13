// Write a program which can give grades to students according to theirs scores:
//   - 80-100, A
//   - 70-89, B
//   - 60-69, C
//   - 50-59, D
//   - 0-49, F

function grades(marks){
    if (marks>=80 && marks <= 100) {
        console.log(`This student get's A grade .`);
    }
    else if (marks >= 70 && marks <= 79) {
        console.log(`This student get's B grade`);
    }
    else if (marks >= 60 && marks <= 69) {
        console.log(`This student get's C grade`);
    }
    else if (marks >= 50 && marks <= 59) {
        console.log(`This student get's D grade`);
    }
    else {
        console.log(`This student get's F grade`);
    }
};

grades(90);
grades(30);
grades(70);
grades(60);
grades(50);
grades(40);