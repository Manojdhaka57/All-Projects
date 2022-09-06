function sumOfTwoNumber(arr, sumOfNumbers){
    const arr2=arr.sort();
    let left=0;
    let right=arr2.length-1;
    while(left<right){
        if((arr2[left]+arr2[right])===sumOfNumbers){
            return [arr2[left],arr2[right]];
        }
        else if((arr2[left]+arr2[right])>sumOfNumbers){
            right--;
        }
        else{
            left++;
        }
    }
    return false;
}
const arr=[5,6,7,2,4,6,8]
console.log(sumOfTwoNumber(arr,8));
console.log(sumOfTwoNumber(arr,9));