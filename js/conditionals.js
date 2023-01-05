//  we will try to make a rough scenario for login in a website

// var isLoggedin = 1;
// var isEmailVerified = true;
// var cardInfo = 0;


function login(isLoggedin, isEmailVerified, cardInfo ){
    
    if (isLoggedin) {
        console.log(`User have an account`);    
        
        if (isEmailVerified) {
            console.log(`Email has submitted`);
        } 
    
        if (cardInfo){
            console.log(`you can purchase the course`);
        } else{
            console.log(`Enter your card info. first`);
        }
    }
}

// login();         No need to pass the parameters but values must assigned first.
// login(1,0,1);    Need to pass arguments and parameters both and no need to assigning.





// Login for allowing login from different websites.

var google = 0;
var email = 1;
var facebook = 0;

// if (google) {
//     console.log(`LoggedIn from google.`);
// }if (email) {
//     console.log(`LogeedIn from Email.`);
// } else {
//     console.log(`LogeedIn from Facebook.`);
// }


// another way for above logic

if(google || email || facebook){
    console.log(`User LogIn successful`);
}