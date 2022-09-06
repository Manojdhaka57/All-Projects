// "Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
// Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.
// Example:
// caesarCipher(""middle-Outz"", 2) ➞ ""okffng-Qwvb""

// // m -> o
// // i -> k
// // d -> f
// // d -> f
// // l -> n
// // e -> g
// // -    -
// // O -> Q
// // u -> w
// // t -> v
// // z -> b

// caesarCipher(""Always-Look-on-the-Bright-Side-of-Life"", 5)
// ➞ ""Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj""

// caesarCipher(""A friend in need is a friend indeed"", 20)
// ➞ ""U zlcyhx ch hyyx cm u zlcyhx chxyyx""
// "
function caesarcipher(str, k){
    if(k<0){
        return caesarcipher(str,k+26);
    }
    let output="";
    for(let i=0;i<str.length;i++){
        var char=str[i];
        if(char.match(/[a-z]/i)){
            var code=str.charCodeAt(i);
            if(code>=65 && code<=90){
                char =String.fromCharCode(((code-65+k)%26)+65);
            }
            else if(code>=97 && code<=122){
                char=String.fromCharCode(((code-97+k)%26)+97);
            }
        }
        output+=char;
    }
    return output;
    
}
console.log(caesarcipher("middle-Outz", 2));
console.log(caesarcipher("Always-Look-on-the-Bright-Side-of-Life", 5));
console.log(caesarcipher("A friend in need is a friend indeed", 20));