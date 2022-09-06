function generateSquence(n,k) {
    let nArr=[1];//[1,2,1]
    while(n>1){
        let mid=Math.floor(nArr.length/2);
        let midEle=nArr[mid];
        nArr=[...nArr, midEle+1, ...nArr];//
        n=n-1;
    }
    console.log(nArr);
    console.log("element at k=" + nArr[k-1]);//[1] [1,2,1] [1,2,1,3,1,2,1]

}
generateSquence(3,2);
// "Let's consider the following algorithm of generating a sequence of integers. 
// Initially we have a sequence consisting of a single element equal to 
// 1. Then we perform (n - 1) steps. On each step we take the sequence we've got on

// the previous step, append it to the end of itself and insert in the middle the 
// minimum positive integer we haven't used before. For example, we get the sequence 
// [1, 2, 1] after the first step, the sequence [1, 2, 1, 3, 1, 2, 1] after the second step.

// The task is to find the value of the element with index k (the elements are numbered from 1) in the obtained sequence, i. e. after (n - 1)steps.

 
// Input Format
 
// You will be given a function with two integers n and k as arguments.

 
// Return single integer the integer at the k-th position in the obtained sequence
 
// Sample TestCase 1
 
// Input
// 3 2
 
// Output
 
// 2
// "