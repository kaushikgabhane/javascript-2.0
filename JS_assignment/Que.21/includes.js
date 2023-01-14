// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ["INDIA","Ethiopia","NEPAL","MALDIVES","BANCOK","AMSTERDAM"];

let flag = false;

for(var i=0; i<countries.length; i++){

    if(countries[i] == 'Ethiopia'){
        flag = true;
        countries[i] = countries[i].toUpperCase();   
        console.log(countries);     

    }
}
if (flag == false) {
    countries.push('Ethiopia');
    console.log(countries);
}