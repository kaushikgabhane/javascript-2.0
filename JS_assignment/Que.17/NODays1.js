//  Write a program which tells the number of days in a month.


function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

// Since default start for days is 1. In this function, the day parameter is underflowing. Hence When we give 0 value it consider last date of previous month

// July
console.log(daysInMonth(2014,7)); 
