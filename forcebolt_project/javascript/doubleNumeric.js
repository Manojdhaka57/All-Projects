function doubleNumric(obj){
    for(let x in obj){
        if(typeof(obj[x])==='number'){
            obj[x]*=2;
        }
    }
    return obj;
}
 const obj={
    company: 'forcebolt',
    year: 2021,
    exprience: 1
 }
 console.log(doubleNumric(obj))
