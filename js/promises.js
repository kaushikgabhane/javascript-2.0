//  Promise : The promise is an object represents the eventual completion or rejection of ansync operation and its value.

//  There are only three states of promise : resolved , rejected , pending.

// We always attach a callback function to then and catch methods.


// Ex  : 

const cart = ["shoes","T-shirt","pant"];

// Using created promise
createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(){
        console.log("It will be always called.");
    });

// Creating a promise
function createOrder(cart){

    const pr = new Promise(function(resolve,reject){
        // createOrder
        // validateCart
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const ordertId = "1256";
        if(ordertId){
            resolve(ordertId);
        }
    });
    return pr;
}

function validateCart(){
    return true;
}

function proceedToPayment(orderId){
    return new Promise( function(resolve, reject){
        if (orderId) {
            resolve("payment successful for"+ " "+ orderId);
        }
        else{
            reject(new Error("payment denied!!!"));
        }
    })
}

// H.W.
// createOrder
// proceedToPayment
// showorderSummary
// updateWallete