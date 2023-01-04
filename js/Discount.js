var sellingPrice = 1111 ;

var markedPrice = 2066;

var discountPercent = ((markedPrice - sellingPrice) / markedPrice) * 100 ;

console.log(`Today we have ${discountPercent}% off !`);

var correctedDiscount = Math.round(discountPercent);

console.log(`Today we have ${correctedDiscount}% off !`);
