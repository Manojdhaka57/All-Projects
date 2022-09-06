// "Give a two number array and check both are similar or not. Return true/false.

// a= [1, 2, 2], b= [2, 1, 1] , output will be false.
// a= [3, 2,1], b= [2, 1, 3] , output will be true."

function similarArray(ar1,ar2){
    let l1=ar1.length;
    let l2=ar2.length;
    if(l1!==l2){
        return false;
    }
    const  arr1=ar1.sort();
    const arr2=ar2.sort();
    for(let i=0;i<l1;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}
console.log(similarArray([1,2,2],[2,1,1]));
console.log(similarArray([3,2,1],[2,1,3]));