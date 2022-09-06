// // Question 1:- "Find the all possible combination?
// // input:- 1 2 3 4               
// // Output:-   2 1 3 4            2134
// //                 2 3 1 4       2314
// //                 2 3 4 1       2341
// //                 3 2 4 1       3241
// //                 3 4 2 1
// //                 3 4 1 2
// //                 4 3 1 2
// //                 4 1 3 2
// //                 4 1 2 3
// //                 1 4 2 3
// //                 1 2 4 3
// //                 1 2 3 4
const combi=(arr)=>{
    const result=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            let eleatj=arr[j];
            let eleatj1=arr[j+1];
            let re=[...arr.slice(0,j),eleatj1,eleatj,...arr.slice(j+2)];
            arr=re;
            console.log(re);
        }
    }
}
combi([1,2,3,4])

