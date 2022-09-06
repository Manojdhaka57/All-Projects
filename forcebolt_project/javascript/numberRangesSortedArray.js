function numberRangesSortedArray(numArray){
    let i=0;
    let size=numArray.length;
    const result=[]
    while(i<size){
        let start=numArray[i];
        
        while(i+1<size && numArray[i]+1===numArray[i+1]){
            i++;
           
        }
        let end=numArray[i];
        if(start===end){
            result.push(start);
        }
        else{
            result.push([start,end]);
        }
        i++;
    }
    return result;

}
console.log(numberRangesSortedArray([1,2,3,6,7,9,11,12]))