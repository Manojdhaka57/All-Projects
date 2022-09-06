// Given an m x n matrix, return the length of the longest increasing path in the matrix.
// From each cell, you can either move in four directions: left, right, up, or down. 
// You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
const path=(matrix,m,n,i,j)=>{
    const direction=[[1,0],[-1,0],[0,1],[0,-1]];
    let maxiLength=0;
    for(dir of direction){
        let x=i+dir[0];
        let y=j+dir[1];
        if(x>=0 && y>=0 && x<m && y<n && matrix[i][j]<matrix[x][y]){
            maxiLength=Math.max(maxiLength,path(matrix,m,n,x,y));
        }
    }
    return maxiLength+1;
}
const longestIncPath=(matrix)=>{
    let m=matrix.length;
    let n=matrix[0].length;
    let lip=0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            lip=Math.max(lip,path(matrix,m,n,i,j));
        }
    }
    return lip;
}
console.log(longestIncPath([[3,4,5],[3,2,6],[2,2,1]]));
// console.log(longestIncPath([[9,9,4],[6,6,8],[2,1,1]]));
//3 4 5
//3 2 6
//2 2 1
//output= 
// 4 3 2
// 1 4 1
// 2 1 1