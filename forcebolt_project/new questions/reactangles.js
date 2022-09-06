// "You are given an array of distinct (x, y) coordinates. Create a function that
//  returns how many rectangles these points form on the plane.
// Example:
// rectangles([[1, 1], [2, 1], [1, 2], [2, 2]]) ➞ 1

// rectangles([[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [3, 2]]) ➞ 3

// rectangles([[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3]]) ➞ 10
// // Note: We have a rectangle with vertices (2, 1), (3, 2), (2, 3), and (1, 2).
// Don't forget to count rectangles that aren't parallel to the x- and y-axis (see example #3).
// "
function rectangleOrNot(rectArr){
    let [[x1,y1],[x2,y2],[x3,y3],[x4,y4]]=rectArr;
    let centerOfx=(x1+x2+x3+x4)/4;
    let centerOfy=(y1+y2+y3+y4)/4;
    let dist1tocenter=(centerOfx-x1)**2+(centerOfy-y1)**2;
    let dist2tocenter=(centerOfx-x2)**2+(centerOfy-y2)**2;
    let dist3tocenter=(centerOfx-x3)**2+(centerOfy-y3)**2;
    let dist4tocenter=(centerOfx-x4)**2+(centerOfy-y4)**2;
    return dist1tocenter===dist2tocenter && dist1tocenter===dist3tocenter && dist1tocenter===dist4tocenter;

}
// console.log(rectangleOrNot([[1, 1], [2, 1], [1, 2], [2, 2]]))
function subsets(x){
    let result=[[]];
    for(let el of x){
        let lent=result.length;
        for(let i=0;i<lent;i++){
            result.push([...result[i],el])
        }
    }
    return result;
}
function noOfRectangle(coordinates){
    let totalFourCoordinates=subsets(coordinates).filter(item=>item.length===4);
    return totalFourCoordinates.filter(item=>rectangleOrNot(item)).length;
}
const coordinates=[[1, 1], [2, 1], [1, 2], [2, 2]]
console.log(noOfRectangle(coordinates));
let coordinates2=[[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [3, 2]]
console.log(noOfRectangle(coordinates2));
let coordinates3=[[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3]]
console.log(noOfRectangle(coordinates3));
// console.log(subset([1,2,3]).filter(item=>item.length==2));
