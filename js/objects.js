let customer = {
    fname : "kaushik",
    Lname : "gabhane",
    E_mail: "kau@gmail.com",
    addess: "Bhandara" 
};
customer.pinCode = 1234; //assign new property
// console.log(customer);
// console.log(customer.addess);




// nested objects

let student = {
    name : "ash",
    class : "5th" ,
    roll_no : 11 ,
    marks : {
        history : 50 ,
        math : 89,
        sci : 90,

        extraActivities : {
            phy_activity : 20,
            music : 20 ,
            elocution : 30
        }
    }
};

// console.log(student);

// console.log(student.marks.history);

// console.log(student.marks.extraActivities);


// Arrays and objects 
let obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
    key4 : "value4"
};

// console.log(obj);

let arr = ["value1","value2","value3","value4"];
// console.log(arr);


arr.prop1 = 2;          //key value pair is added in array. but it will not be counted in length of array
// console.log(arr);
// console.log(arr.length);

// But if we want to iterate through all values then it will definitely give the key "prop"

for(const key in arr){
    // console.log(key);
}

// object methods

const emp = {
    Name :"tom",
    id : "245s2fdg",

    salary(){
        return "Salary is Disbursed for Decembar 2022";
    }
};

// console.log(emp.salary());



// working with this keyword
const student1 = { 
    name: "ash",
    rollNo: 20,
    subject: "maths",
    marks: "75%"
}

const student2 = {
    name: "tom",
    rollNo: 10,
    subject: "history",
    marks: "85%"
}

function getSub() {
    console.log(`The subject of ${this.name} is ${this.subject} and passed with ${this.marks}.`);
}

student1.getSub = getSub;
student2.getSub = getSub;

student1.getSub();
student2.getSub();
