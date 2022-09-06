let charToNum={
    'a':0,
    'b':1,
    'c':2,
    'd':3,
    'e':4,
    'f':5,
    'g':6,
    'h':7,
    'i':8,
    'j':9}
const numToChar={
    0:'a', 1:'b',2:'c',3:'d',4:'e',5:'f',6:'g',7:'h',8:'i',9:'j'
}
function changeWordToNumber(s){
    let t=''
    for(let i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='j'){
            t+=charToNum[s[i]];
        }
        else if(s[i]>=0 && s[i]<=9){
            t+=numToChar[s[i]];
        }
        else if(s[i]===' '){
            t+=' '
        }
        else{
            t+=s[i];
        }
        

   }
   return t;
}
console.log(changeWordToNumber("you'll n4v4r 6u4ss 8t: cdja"))
// """Write a function which convert the  number to word and word to number.
// Digit 0 is replaced with 'a',1 is replaced with 'b' and so on,with digit 9 replaced by 'j'.""

// ""Ex:-
        // string = 'you'll n4v4r 6u4ss 8t: cdja' , the output will be 'you'll never guess it: 2390'"""