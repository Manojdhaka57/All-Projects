// Some people are standing in the field. there are some plants and 
// trees between them which cannot move, 
// arrange them in non-descending order.
function sortPlant(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]===(-1) || arr[j]===(-1)){
                continue;
            }
            else if(arr[i]>arr[j]) {
                let temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }
    return arr;
}
console.log(sortPlant([-1,150,190,170,-1,-1,160,180]));