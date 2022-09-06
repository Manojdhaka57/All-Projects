x=[[1,2,3],[4,5,6],[7,8,9]];
for(let i=0;i<x.length;i++){
    for(let j=0;j<=i;j++){
        temp=x[i][j];
        x[i][j]=x[j][i];
        x[j][i]=temp;
    }
}
console.log(x[2]);