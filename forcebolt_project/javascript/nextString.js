// "Given a string and change each string to next string.

// Given string = ""crazy"" ,output will be ""dsbaz"""
// a=97 , z=122 , A=65, Z=90
function nextString(str){
    let resultString="";
    const charcodeArray=[]
    for(let i=0;i<str.length;i++){
        let charcode=str.charCodeAt(i);
        if(charcode>=97 &&charcode<=122){
            resultString+=String.fromCharCode((charcode-96)%26+97);
        }
        else if(charcode>=65 &&charcode<=90){
            resultString+=String.fromCharCode((charcode-64)%26+65);
        }
        else{
            resultString+=str[i];
        }
    }
    
    
    return resultString;
}
console.log(nextString("crazy vr"))