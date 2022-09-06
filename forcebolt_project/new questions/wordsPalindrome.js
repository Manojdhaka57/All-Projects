// "Given a list of unique words, return all the pairs of the distinct indices (i, j) 
// in the given list, so that the concatenation of the two words words[i] + words[j] 
// is a palindrome.                        
// Example 1:  Input: words = [""abcd"",""dcba"",""lls"",""s"",""sssll""]
//                     Output: [[0,1],[1,0],[3,2],[2,4]]
// Explanation: The palindromes are [""dcbaabcd"",""abcddcba"",""slls"",""llssssll""]

// Example 2:  Input: words = [""bat"",""tab"",""cat""]
//                     Output: [[0,1],[1,0]]
// Explanation: The palindromes are [""battab"",""tabbat""]

// Example 3:  Input: words = [""a"",""""]
//                     Output: [[0,1],[1,0]]"
function checkPalindrome(str){
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
function wordsPalindrome(wordArr){
    const resultArr=[];
    for(let i=0;i<wordArr.length-1;i++){
        for(let j=i+1;j<wordArr.length;j++){
            if(checkPalindrome(wordArr[i]+wordArr[j])){
                resultArr.push([i,j]);
            }
            if(checkPalindrome(wordArr[j]+wordArr[i])){
                resultArr.push([j,i]);
            }
        }
    }
    console.log(resultArr);
}
wordsPalindrome(["abcd","dcba","lls","s","sssll"]);
wordsPalindrome(["bat","tab","cat"]);
wordsPalindrome(["a",""]);