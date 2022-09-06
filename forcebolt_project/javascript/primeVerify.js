function verfiyPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
function printPrimeNumber(num){
    const primenumber=[];
    for(let i=2;i<=num;i++){
        if(verfiyPrime(i)){
            primenumber.push(i);
        }
    }
    return primenumber.join(' ')
}
console.log(printPrimeNumber(50));
console.log(verfiyPrime(2));