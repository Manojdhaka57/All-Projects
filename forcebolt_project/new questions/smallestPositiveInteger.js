function smallestInterger(numArr){
    let len= numArr.length;
    let presentArr=new Array(len+1);
    for(let i=0;i<len+1;i++){
        presentArr[i]=false;
    }
    presentArr[0]=true;
    for(let i=0;i<len;i++){
        if(numArr[i]>0 && numArr[i]<=len){
            presentArr[numArr[i]]=true;
        }
    }
    for(let i=0;i<len+1;i++){
        if(!presentArr[i]){
            return i;
        }
    }
    return len+1;
}
console.log(smallestInterger([1,2,0]))
console.log(smallestInterger([7,8,9,11,12]));