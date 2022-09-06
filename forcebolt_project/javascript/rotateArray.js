function rotateArray(arr,k){
    return [...arr.splice(k), ...arr.slice(0,k)];
}
console.log(rotateArray([1,2,3,4,5,6,7,8,9],3));