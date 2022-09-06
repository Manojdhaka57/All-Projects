function numberCatAndPeople(num){
    const x=[];
    if(num>=4){
        x.push(Math.floor(num/4))
    }
    if(num>=2){
        x.push(Math.floor(num/2))
    }   
    
    return x;
}
console.log(numberCatAndPeople(6))
console.log(numberCatAndPeople(2))