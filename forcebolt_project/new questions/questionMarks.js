// "Have the function QuestionsMarks(str) take the str string parameter, which will contain 
// single digit numbers, letters, and question marks, and check if there are exactly 3 question
//  marks between every pair of two numbers that add up to 7. If so, then your program should 
//  return the string true, otherwise it should return the string false. If there aren't any 
//  two numbers that add up to 7 in the string, then your program should return false as well.
// For example: If str is ""arrb3???4xxbl5???eee2"" then your program should return true 
// because there are exactly 3 question marks between 3 and 4, and 3 question marks between 
// 5 and 2 at the end of the string.
// Examples
// Input: ""aa6?9""
// Output: false
 
// Input: ""acc?7??sss?0rr2??????5""
// Output: true
// "
function questionMarks(str){
    let result=false;
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(Number(str[i])+Number(str[j])===7){
                result=true;
                if(str.slice(i,j).split("?").length-1!==3){
                    
                    return false;
                }
            }
        }
    }
    return result;
}
console.log(questionMarks("aa6?9"));
console.log(questionMarks("acc?7??sss?0rr2??????5"));
console.log(questionMarks("arrb3???4xxbl5???eee2"));

