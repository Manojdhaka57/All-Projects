// An instrument store gives a 10% discount to all students off the 
// original cost of an instrument. During a back to school sale an 
// additional 15% is taken off the discounted price. Julie, a student at the local high school, 
// purchases a flute for $306. How much did it originally cost?
function originallyCost(purchases_cost, discount, additional_discount){
    let originallycost= purchases_cost*10000/((100-discount)*(100-additional_discount));
    return originallycost.toFixed(2);
}
console.log(originallyCost(306,10,15));