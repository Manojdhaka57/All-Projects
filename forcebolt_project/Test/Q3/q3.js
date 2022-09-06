// Print all numbers of n*m matrix according to the given pattern.
// [[1,2,3,4],
//  [5,6,7,8],
//  [9,10,11,12],
//  [13,14,15,16]]
// output= 4,3 2 1 5 6 7 8 12 11 10 9 13 14 15 16
const pattern=(matrix)=>{
    const result=[];
    let row=matrix.length;
    let col=matrix[0].length;
    for(let i=0;i<row;i++){
        if(i%2==0){
            for(let j=col-1;j>=0;j--){
                result.push(matrix[i][j]);
            }
        }
        else{
            for(let j=0;j<col;j++){
                result.push(matrix[i][j])
            }
        }
    }
    return result.join(' ')
}
console.log(pattern([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));