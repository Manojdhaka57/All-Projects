// "Given an input string with duplicate characters 
// generate a string which does have all A's together in the front 
// and other characters maintain their respective position. Input Format 
// You will be given a function with String as argument. Output Format You need to return 
// the string from the given function. 
// Sample TestCase 1 Input ababacada Output aaaaabbcd "
function duplicateCharacter(str){
    return str.split('').sort().join('');
}
console.log(duplicateCharacter('ababacada'));