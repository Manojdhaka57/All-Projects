// Given an array of positive distinct integers denoting the crossing time of ‘n’ people.There is only one torch 
// with them and the bridge cannot be crossed without the torch. These ‘n’ people are standing at one side of the '
// bridge. The bridge can hold a max of two people at a time. When two people cross the bridge, they must move at 
// the slower person’s pace.

// Find the minimum total time in which all persons can cross the bridge. See this puzzle to understand more.
//  Note: Slower person pace is given by larger time. Input: Crossing Times = [1, 2, 5, 8} Output: 17 Input: 
//     Crossing Times = {10, 20, 30} Output: 60 Explanation 1. Firstly person '1' and '2' cross the bridge with a
//      total time of about 20 minutes (maximum of 10, 20) 2. Now the person '1' will come back with total time of 
//      '10' minutes. 3. Lastly the person '1' and '3' cross the bridge with a total time of about 30 minutes Hence 
//      total time incurred in the whole journey will be 20 + 10 + 30 = 60
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


// Given an n x n square matrix, print the sum of all sub-squares of size k x k where
//  k is smaller than or equal to n.

// See the sample input. 	Input:- size of input matrix = 3 	new matrix size = 2 8 1 3 2 9 3 0 3 5 
// Sample Output : 20 16 14 20 
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
// "A multi-story building has several floors. Each floor has an elevator. You are given two integers X and Y. The elevators in the building have a system with the following rules.

// -> From any floor number A, you can only move to the floors numbered A/P, where 
// P is the Prime factor of A that is smaller than a given number M.
// ->The elevator takes exactly 1 second to move to another floor.
// ->Only one elevator can move at a time.

// 1.  Suppose add floor no : 20 so move floor number A/P M =10 prime ffactor which less than M 
// Write a program to find the minimum time required to move from Xth to the Yth floor of the building

// Input format
// Three space-separated integers X, Y, and M x and y is a floor number

// Output format:-
// Print two space-separated integers in a single line.
// I.e, the time taken to meet and the floor number at which you meet in case, it is not 
// possible to meet print “-1” (without quotes)  T F where T is the time taken and F is Floor number

// Sample input   Sample output
// 20 16 10              3 4
// 100 120 10          3 20
// 160 100 10          4 20
// "