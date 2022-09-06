function countAndSaySequence(n){
    
    let result=['1']
    for(let i=0;i<n;i++){
        let current="";
        for(let j=0;j<result[i].length;j++){
            let index=j;
            while(index<result[i].length && result[i][index]===result[i][index+1]){
                index++;

            }
            current+=String(index-j+1);
            current+=result[i][j];
            j=index;
        }
        result.push(current);
    }
    return result[n-1];
}
console.log(countAndSaySequence(30));