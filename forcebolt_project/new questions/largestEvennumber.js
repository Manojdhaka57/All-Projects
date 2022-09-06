// "Take a string as an input. Separate all the integers from it. 
// Then take each integer only once and form the larges even number possible. 
// print the largest possible even number.And if even number can’t be made, then print -1
// Note:-Even no should be unique

// Input “QWERT@821142”
// Output:-8412

// Input: “Dilshhad73119755”
// Output:- -1

// "
function largestEvenNumber(str){
    let numArr=[]
    for(let i=0;i<str.length;i++){
        if(str[i]>=0 && str[i]<=9){
            numArr.push(Number(str[i]));
        }
    }
    let numArrDistEle=[...new Set(numArr)];
    let evenNumbers= numArrDistEle.filter(num=>num%2===0);
    if(evenNumbers.length===0){
        return -1;
    }
    else{
        let minimumEvenNumber=Math.min(...evenNumbers);
        let numArrDistEles=numArrDistEle.filter(num=>num!==minimumEvenNumber);
        numArrDistEles.sort((a,b)=>b-a).push(minimumEvenNumber);

        return numArrDistEles.join(''); 
    }
    
}
// console.log(largestEvenNumber("QWERT@821142"))
// console.log(largestEvenNumber("Dilshhad73119755"));