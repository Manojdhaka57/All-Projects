function squareNumbers(n){
    
    let result=new Array(n+1);
    
    for(let i=0;i<=n;i++){
        result[i]=i;
        for(let j=1;j*j<=i;j++){
            result[i]=Math.min(result[i],1+result[i-j*j])
        }
        
    }
    console.log(result)
    return result[n];
    
    
}
console.log(squareNumbers(12));
console.log(squareNumbers(13));