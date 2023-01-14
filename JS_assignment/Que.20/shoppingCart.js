// In the following shopping cart add, remove, edit items


//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];



//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
let flag = false;

for(var i=0; i<shoppingCart.length; i++){

    if(shoppingCart[i] != 'Meat'){
        flag = true;
    }
}
if (flag == true) {
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart);






//     - add Sugar at the end of your shopping cart if it has not been already added

let flag2 = false;

for(var i=0; i<shoppingCart.length; i++){

    if(shoppingCart[i] != 'Sugar'){
        flag2 = true;
    }
}
if (flag2 == true) {
    shoppingCart.push('sugar');
}
console.log(shoppingCart);


//     - remove 'Honey'
shoppingCart.splice(4,1);
console.log(shoppingCart);

//     - modify Tea to 'Green Tea'

shoppingCart.splice(3,1,"Green Tea");
console.log(shoppingCart);