let customer = {
    fname : "kaushik",
    Lname : "gabhane",
    E_mail: "kau@gmail.com",
    addess: "Bhandara" 
};

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

        extra : {
            phy_activity : 20,
            music : 20 ,
            elocution : 30
        }
    }
};

// console.log(student);

// console.log(student.marks.history);

console.log(student.marks.extra);

