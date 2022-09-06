function primeFactor(num){
    const factor=[];
    let divisor=2;
    while(num>=2){
        if(num%divisor==0){
            factor.push(divisor);
            num=num/divisor;
        }
        else{
            divisor+=1;
        }
    }
    return factor.join("*");
}
console.log(primeFactor(100));
