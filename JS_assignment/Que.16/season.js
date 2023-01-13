// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

//     - September, October or November, the season is Autumn.

//     - December, January or February, the season is Winter.

//     - March, April or May, the season is Spring

//     - June, July or August, the season is Summer

let month = prompt("Enter a month name with first letter uppercase : ");


// One of the way of getting result,

// if (month=="September" || month=="Octomber" || month=="November" )
//  {
//     console.log(`This is a Autumn season.`);
// } 
// if (month=="December" || month=="January" || month=="February") 
// {
//     console.log(`This is a Winter season.`);
// } 
// if(month=="March" || month=="April" || month=="May")
// {
//     console.log(`This is a Spring season.`);  
// }
// else
//  {
//     console.log(`This is a Summer season.`);
// }


// Another way of getting same result,

switch (month) {
    case "September":
        console.log(`This is a Autumn season.`);
        break;
    case "Octomber":
        console.log(`This is a Autumn season.`);
        break;
    case "November":
        console.log(`This is a Autumn season.`);
        break;
    case "December":
        console.log(`This is a Winter season.`);
        break;
    case "January":
        console.log(`This is a Winter season.`);
        break;
    case "February":
        console.log(`This is a Winter season.`);
        break;
    case "March":
        console.log(`This is a Spring season.`);
        break;
    case "April":
        console.log(`This is a Spring season.`);
        break;
    case "May":
        console.log(`This is a Spring season.`);
        break;
    case "June":
        console.log(`This is a Summer season.`);
        break;
    case "July":
        console.log(`This is a Summer season.`);
        break;
    case "August":
        console.log(`This is a Summer season.`);
        break;        
    default:
        console.log(`Search month names on google!!! 😁`);
        break;
}