// "Given two integers N and M denoting the dimensions of a chessboard, and two
//  integers X and Y denoting the King’s position, i.e. the cell (X, Y). The task 
//  is to find the number of cells the Queen can visit that are not visited by the King 
//  if it gets replaced by the King. The King visits all his adjacent cells and the Queen 
//  can move diagonally, horizontally, and vertically.
// Input: N = 8, M = 8, X = 1, Y = 1
// Output: 18  Refer to the image in the comment for breif."
function countsMovesQueen(n,m,x,y){
    let total_moves=0;
    if((n-x)>0 &&(m-y)>0){
        total_moves+=Math.min((n-x),(m-y));
    }
    if((x-1)>0 && (y-1)>0){
        total_moves+=Math.min((x-1),(y-1));
    }
    if((x-1)>0&&(m-y)>0){
        total_moves+=Math.min((x-1),(m-y));
    }
    if((n-x)>0&& (y-1)>0){
        total_moves+=Math.min(n-x,y-1);
    }
    total_moves+=(n-1)+(m-1);
    let king_moves=0;
    if(x+1<=n){
        king_moves+=1;
    }
    if(x-1>0){
        king_moves+=1;
    }
    if(y+1<=m){
        king_moves+=1;
    }
    if(y-1>0){
        king_moves+=1;
    }
    if(x+1<=n && y+1<=m){
        king_moves+=1;
    }
    if(x+1<=n && y-1>0){
        king_moves+=1
    }
    if(x-1>0 && y-1>0){
        king_moves+=1;
    }
    if(x-1>0 && y+1<=m){
        king_moves+=1;
    }
    return total_moves-king_moves
}
console.log(countsMovesQueen(8,8,1,1));
console.log(countsMovesQueen(2,1,1,1));
// "Given two integers N and M denoting the dimensions of a chessboard, and 
// two integers X and Y denoting the King’s position, i.e. the cell (X, Y). The 
// task is to find the number of cells the Queen can visit that are not visited by
//  the King if it gets replaced by the King. The King visits all his adjacent cells 
//  and the Queen can move diagonally, horizontally, and vertically.
// // Input: N = 8, M = 8, X = 1, Y = 1
// Output: 18  Refer to the image in the comment for breif."
// 0 2 1 1 1 1 1 0 x+1
// 2 2 1 1 1 1 1 1
// 1 1 1 1 1 1 1 1
// 1 1 1 1 0 1 1 1
// 1 1 1 1 1 0 1 1
// 1 1 1 1 1 1 1 1
// 1 1 1 1 1 0 1 1
// 1 1 1 1 1 1 1 0