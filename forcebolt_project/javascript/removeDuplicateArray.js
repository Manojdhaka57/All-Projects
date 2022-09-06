function removeDuplicate(arr){
    const result=arr.filter((item,pos)=>{
        return arr.indexOf(item)===pos;
    })
    console.log(result);
}
// method 2
const arr=[1,2,4,3,5,2,6,7,3,4,5]
const result=[...new Set(arr)];
console.log(result);
removeDuplicate(arr);