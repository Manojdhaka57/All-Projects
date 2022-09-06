// // "You are stuck in a multi-storey car parking lot. Your task is to exit the car park using only the staircases. Exit is always at the bottom right of the ground floor.

// // Create a function that takes a two-dimensional array where:

// // Free car parking spaces are represented by a 0
// // Staircases are represented by a 1
// // Your starting position is represented by a 2 and can be at any level of the car park.
// // Exit is always at the bottom right of the ground floor.
// // You must use the staircases (1) to go down a level.
// // Each floor will have only one staircase apart from the ground floor which will not have any staircases.

// // ... and returns an array of the quickest route out of the car park.

// // arr = [
// //   [1, 0, 0, 0, 2],
// //   [0, 0, 0, 0, 0]
// // ]

// // // Starting from 2, move to left 4 times = ""L4""
// // // Go down from stairs 1 step = ""D1""
// // // Move to right 4 times to exit from right bottom corner = ""R4""

// // result = [""L4"", ""D1"", ""R4""]

// // Example:
// // parking_exit([
// //   [1, 0, 0, 0, 2],
// //   [0, 0, 0, 0, 0]
// // ]) ➞ [""L4"", ""D1"", ""R4""]

// // parking_exit([
// //   [2, 0, 0, 1, 0],
// //   [0, 0, 0, 1, 0],
// //   [0, 0, 0, 0, 0]
// // ]) ➞ [""R3"", ""D2"", ""R1""]

// // // Starting from 2, move to right 3 times = ""R3""
// // // Go down from stairs 2 steps = ""D2""
// // // Move to right 1 step to exit from right bottom corner = ""R1""
// // parking_exit([[0, 0, 0, 0, 2]]) ➞ []
// // // You are already at the bottom right corner.
// // "
function startPoint(matrix){
    for(let i=0;i<matrix.length;i++){
        if(matrix[i].includes(2)){
            return [i,matrix[i].indexOf(2)];
        }
    }
}
function carParking(matrix){
    const [x,y]=startPoint(matrix);
    const path=[[x,y]];
    for(let i=0;i<matrix.length;i++){
        if(matrix[i].includes(1)){
            path.push([i,matrix[i].indexOf(1)]);
        }
    }
    path.push([matrix.length-1,matrix[0].length-1]);
    const result=[];
    for(let i=0;i<matrix.length;i++){
        if(path[i][0]==matrix.length-1 && path[i][1]==matrix[0].length-1){
            return result;
        }
        if(path[i][0]==path[i+1][0]){
            if(path[i][1]>path[i+1][1]){
                result.push('L'+(path[i][1]-path[i+1][1]));
            }
            else{
                result.push('R'+(path[i+1][1]-path[i][1]))
            }
        }
        else{
            count=1;
            while(path[i][1]==path[i+1][1]){
                i++;
                count++;
            }
            result.push('D'+count);
            
            if(path[i][1]>path[i+1][1]){
                result.push('L'+(path[i][1]-path[i+1][1]));
            }
            else{
                result.push('R'+(path[i+1][1]-path[i][1]))
            }
        }
    }
    return result;
}


console.log(carParking([
      [1, 0, 0, 0, 2],
      [0, 0, 0, 0, 0]
    ]))
console.log(carParking([
      [2, 0, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0]]))
console.log(carParking([
    [0, 0, 1, 0, 2],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0]]))