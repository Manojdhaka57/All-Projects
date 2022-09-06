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
function candidatesNumbers(candidates,target){
    const resultCandidates =[[]];
    for(const el of candidates){
        const last=resultCandidates.length-1;
        for(let i=0;i<=last;i++){
            resultCandidates.push([...resultCandidates[i],el]);
        }
    }
    const result=resultCandidates.filter((item)=>{
        const sumEle=item.reduce((a,b)=>a+b,0);
        if(sumEle===target){
            return item;
        }
    });
    
    const x=result.map(item=>item.sort((a,b)=>a-b)).sort();
    const finalResult=[x[0]];
    for(let i=1;i<x.length;i++){
        if(!similarArray(x[i-1],x[i])){
            finalResult.push(x[i]);
        }
    }
    return finalResult.sort();
    
}
const candidate1=[10,1,2,7,6,1,5];
let target1=8

console.log(candidatesNumbers(candidate1,target1));

const candidate2=[2,5,2,1,2]
let target2 =5
console.log(candidatesNumbers(candidate2,target2));