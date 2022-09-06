// Write a function sortRange(arr, a, b) that gets an array arr,
// looks for elements between a and b in it and returns an array of them.
function sortRange(arr,a,b){
    return [...arr.slice(0,a) ,...arr.slice(a,b).sort(),...arr.slice(b)];
}
console.log(sortRange([4,5,2,1,7,8,3,4,5],2,7));