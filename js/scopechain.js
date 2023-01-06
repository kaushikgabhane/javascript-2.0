
// here the called values are searched first within its context.
// If not found then it approches to higher context for the same value.

// Example .

var  name = "Global";
console.log(name);

function string(){
   // var name = "string context";             //If we are not providing value of name. it will go to higher context and get value of name.
    console.log("It's a string ",name);


    
    function stringTwo(){
        console.log("It's a stringTwo ",name);
    }
    stringTwo();
}

string();

// In the above example, the string Two function first searching value for name in its own execution context. If not found then, search it in one level above in string functions exe. context and if there also not found then in global context.