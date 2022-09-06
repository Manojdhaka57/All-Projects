const matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
function spiralpattern(matrix){
    const result=[];
    let row=matrix.length;
    let col=matrix[0].length;
    let start_row=0,start_col=0;
    while(start_row<row && start_col<col){
        for(let i=start_row;i<row;i++){
            result.push(matrix[i][start_col]);
        }
        start_col++;
        for(let i=start_col;i<col;i++){
            result.push(matrix[row-1][i]);
        }
        row--;
        for(let i=row-1;i>=start_row;i--){
            result.push(matrix[i][col-1])
        }
        col--;
        for(let i=col-1;i>=start_col;i--){
            result.push(matrix[start_row][i]);
        }
        start_row++;

    }
    return result;
}
console.log(spiralpattern(matrix));