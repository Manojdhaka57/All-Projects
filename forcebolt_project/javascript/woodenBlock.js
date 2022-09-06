// "Ravi got wooden block of different sizes as a present from cloud analogy for 
// his anniversary,each wooden block having an non negative integer size.Since he 
// likes to make things perfect, he wants to arrange them from smallest to large so 
// that each wooden block will be bigger than the previous one exactly by 1.He may need 
// some additional statues to be able to accomplish that.Help him figure out the minimum 
// number of additional statues needed.

// ""Ex:- 
// For wooden block = [5, 6, 10, 12], the output should be 4
// For wooden block = [6,2,3,8], the output should be 3"""

function woodenBlock(woodenArr){
    const sortBlock=woodenArr.sort((a,b)=>a-b);
    
    count=0;
    for(let i =1;i<sortBlock.length;i++){
        if((sortBlock[i]-sortBlock[i-1])!==1){
            count+=(sortBlock[i]-sortBlock[i-1]-1);
        }
    }
    return count;
}
console.log(woodenBlock([5,6,10,12]));
console.log(woodenBlock([6,2,3,8]));