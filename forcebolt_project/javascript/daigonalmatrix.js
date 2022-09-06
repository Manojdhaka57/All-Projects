function diagonal(matrix){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(i===j || i+j===matrix.length-1){
                matrix[i][j]*=2;
            }
        }
    }
    return matrix;
}
const matrix= [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
console.log(matrix);
console.log(diagonal(matrix));
