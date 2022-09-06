// Given an array of integers and a target number. 
// Find out the count of all subsets such that the sum of all the numbers in the 
// subset is equal to a target number For 
// Example: Input: [1 2 3 4 5] target: 5 Count: 3 Subsets are [ [ 1,4 ] , [2,3] , [5] ] 
// Input Format You will be given a function which will take integer array as 
// argument 1 and a target as second argument. Output Format:- Return the count of the 
// subset from the function. 
// Sample TestCase 1 Input 5 1 2 3 4 5 Output 3 ""

function subset(arr,sum){
    const subsets=[[]];
    for(const el of arr){
        const last=subsets.length-1;
        for(let i=0;i<=last;i++){
            subsets.push([...subsets[i],el]);
        }
    }
    const result=subsets.filter((item)=>{
        const sumEle=item.reduce((a,b)=>a+b,0);
        if(sumEle===sum){
            return item;
        }
    });
    return result;
    
    
}
const arr=[5,1,2,3,4];
const result=[];
console.log(subset(arr,5));