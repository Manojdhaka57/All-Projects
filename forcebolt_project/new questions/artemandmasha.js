function maximunTimes(stones){
    if(stones%3===0){
        return (stones/3)*2;
    }
    return Math.floor(stones/3)*2 +1;
}
console.log(maximunTimes(1));
console.log(maximunTimes(2));
console.log(maximunTimes(3));
console.log(maximunTimes(9));
 
// Little Artem got n stones on his birthday and now wants to give some of them to Masha. 
// He knows that Masha cares more about the fact of receiving the present, rather than the
//  value of that present, so he wants to give her stones as many times as possible. However, 
//  Masha /remembers the last present she received, so Artem can't give her the same number of 
 
//  stones twice in a row. For example, he can give her 3 stones, then 1 stone, then again 3 
//  stones, but he can't give her 3 stones and then again 3 stones right after that.

 
// How many times can Artem give presents to Masha?

// Input Format
 
// You will be given a function which contains a single integer n, number of 
// stones Artem received on his birthday.
 
// Output Format
 
// Return the maximum possible number of times Artem can give presents to Masha.
 
// Sample TestCase 1
 
// Input 
// 1
// Output
// 1
 
// "
