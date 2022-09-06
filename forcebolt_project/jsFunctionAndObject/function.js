function crossBridge(timearr){
    if(timearr.length<=2){
        return Math.max(...timearr);
    }
    let sum=0;
    for(let i=0;i<timearr.length;i++){
        sum+=timearr[i];
    }
    sum+=Math.min(...timearr)*(timearr.length-3)
    return sum;
}
console.log(crossBridge([1,2,5,8]));
console.log(crossBridge([10,20,30]));
function sumofmatrix(matrix,start_i,start_j,k){
    let sum=0;
    for(let i=start_i;i<start_i+k;i++){
        for(let j=start_j;j<start_j+k;j++){
            sum+=matrix[i][j];
        }
    }
    return sum;
}
function mainfunc(matrix,k){
    if(k>matrix.length){
        return ;
    }
    const result=[]
    for(let i=0;i<matrix.length-k+1;i++){
        const x=[]
        for(let j=0;j<matrix[0].length-k+1;j++){
            x.push(sumofmatrix(matrix,i,j,k));
        }
        result.push(x)
    }
    return result;
}
console.log(mainfunc([[8 ,1, 3], [2, 9, 3],[ 0, 3, 5]],2));
console.log(mainfunc([[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]],3))
