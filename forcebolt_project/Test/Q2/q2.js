// Given a String s, find the length of the longest prefix which is also a suffix. 
// the prefix and suffix should not be overlap

// Input abcdabc   cbadcba 
// 
// Output:- 3
// Input ababa
// acbacbac
// Output:-1
const prefixtosufix=(str)=>{
    let mid=Math.floor(str.length/2);
    let i=0;
    count=0;
    while(i<mid){
        let left=str.slice(0,i+1);
        let right=str.slice(str.length-i-1);
        if(left==right){
            count=Math.max(count,left.length);
        }
        i++
    }
    console.log(count);
}
prefixtosufix('abcdabc')
prefixtosufix('ababa');
prefixtosufix('abcabc')
// prefixtosufix('acbacbac')