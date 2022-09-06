var a=[1,2,3,4,4,4];
function replaceNumber(a,elementToBeReplace,switchElement){
    for(let i=0;i<a.length;i++){
        if(a[i]===elementToBeReplace){
            a[i]=switchElement;
        }
    }
}
replaceNumber(a,4,3);

console.log(a);