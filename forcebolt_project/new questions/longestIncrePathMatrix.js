function dfs(matrix,m,n,i,j){
    let direction=[[1,0],[-1,0],[0,1],[0,-1]];

    let max=0;
    for(dir of direction){
        let x=i+dir[0], y=j+dir[1];
        if(x>=0 && y>=0 && x<m &&y<n && matrix[x][y]> matrix[i][j]){
            max=Math.max(max, dfs(matrix,m,n,x,y));
        }
        
    }
    
    return max+1;
}
function longestIncrePathMatrix(matrix){
    if(matrix.length===0){
        return 0;
    }
    let m=matrix.length;
    let n=matrix.length;
    let longestIncPath=0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            let path=dfs(matrix,m,n,i,j);
            longestIncPath=Math.max(path,longestIncPath);
            
        }
    }
    return longestIncPath;
}
console.log(longestIncrePathMatrix([[9,9,4],[6,6,8],[2,1,1]]));
// console.log(longestIncrePathMatrix([[3,4,5],[3,2,6],[2,2,1]]))
// "Given an m x n matrix, return the length of the longest increasing path in matrix.
// From each cell, you can either move in four directions: left, right, up, or 
// down. You may not move diagonally or move outside the boundary (i.e., wrap-around is 
//     not allowed). 
// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
// "