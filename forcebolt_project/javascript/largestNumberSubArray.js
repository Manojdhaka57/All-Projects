function maxSubarray(arr){
    const result=[];
    for(let i=0;i<arr.length;i++){
        result.push(Math.max(...arr[i]));
    }
    return result;
}
const arr=[[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]
console.log(maxSubarray(arr))