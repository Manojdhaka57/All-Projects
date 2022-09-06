function pattern(matrix){
    let row=matrix.length-1;
    let col=matrix[0].length;
    let i=0;
    const result=[];
    while(i<col)
    {
        if(i%2===0){
            for(let j=0;j<=row;j++){
                result.push(matrix[j][i]);
            }
        }
        else{
            for(let j=row;j>=0;j--){
                result.push(matrix[j][i]);
            }
        }
        i++;
    }
    return result;
}
const matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
console.log(pattern(matrix));