// "Given an array  , perform the following operation untill the array contains only one number
// * On the 1st, 3rd, 5th, etc iterations (1 - based) replace each pair of consecutive
//  elements with their sum.
// * On the 2nd, 4th, 6th, etc. iteration replace each pair of consecutive elements with
//  their product. After the algoritham has finished
//    there will be a single element left in the array. return that element.
   
//    input = [1,2,3,4,5,6,7,8] it will give result 186"

function singleElement(arr1){
    if(arr1.length===1){
        return arr[0];
    }
    let arr=[...arr1];
    let count =1
    while(arr.length>1){
        let arr2=[];
        if(count%2===0){
            if(arr.length%2===0){
                for(let i=0;i<arr.length;i+=2){
                    arr2.push(arr[i]*arr[i+1]);
                }
            }
            else{
                for(let i=0;i<arr.length-1;i+=2){
                    arr2.push(arr[i]+arr[i+1]);
                }
                arr2.push(arr[arr.length-1]);
            }
        }
        else{
            if(arr.length%2===0){
                for(let i=0;i<arr.length;i+=2){
                    arr2.push(arr[i]+arr[i+1]);
                }
            }
            else{
                for(let i=0;i<arr.length-1;i+=2){
                    arr2.push(arr[i]+arr[i+1]);
                }
                arr2.push(arr[arr.length-1]);
            }
        }
        count++;
        arr=arr2;
        
    }
    return arr[0];
}
console.log(singleElement([1,2,3,4,5,6,7,8]))