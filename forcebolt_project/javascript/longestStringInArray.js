// Input:['abha','ajay','ritika','pihu','vishal'],   Output:['ritika','vishal']        
// Input:['akshay','suraj','somya'],   Output:['akshay']    
// Input:['abc','de','fghi','jklmnop'],   Output:['jklmnop']

function maxLenthArray(arr){
    const arrStringLength=arr.map((item)=>item.length);
    const maxLength=Math.max(...arrStringLength);
    const arr2=arr.filter((item)=>item.length===maxLength);
    return arr2;
}
console.log(maxLenthArray(['abha','ajay','ritika','pihu','vishal']));
console.log(maxLenthArray(['akshay','suraj','somya']));
console.log(maxLenthArray(['abc','de','fghi','jklmnop']));