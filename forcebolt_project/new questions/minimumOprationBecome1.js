function minimumOprations(n){
    let count=0;
    while(n>1){
        if(n%2===0){
            n=n/2;
        }
        else{
            n=n-1;
        }
        count++;
    }
    return count;
}
// console.log(minimumOprations(8));

console.log(minimumOprations(15));

function miniop(n){
    
    if(n===2){
        return 1;
    }
    if(n%2===0){
        return 1+miniop(n/2);
    }
    return Math.min(1+miniop(n-1),1+miniop(n+1));

}
console.log(miniop(8));
console.log(miniop(15));

function miniop2(n){
    let cnt=0;
    while(n>1){
        ++cnt;
        if((n&1)==1){
            if(((n&2)==2)&&(n!=3)){
                ++n;
            }
            else{
                --n;
            }
        }
        else{
            n>>=1;
        }
    }
    return cnt;
}
console.log(miniop2(15));