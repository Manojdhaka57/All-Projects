function maxDiff(arr){
    if(arr.length<2){
        return 0;
    }
    arr.sort((a,b)=>a-b);
    let maxDiff=0;
    for(let i=1;i<arr.length;i++){
        if(maxDiff< arr[i]-arr[i-1]){
            maxDiff=arr[i]-arr[i-1];
        }
    }
    return maxDiff;
}
const arr=[3,1,6,9];
console.log(maxDiff(arr));