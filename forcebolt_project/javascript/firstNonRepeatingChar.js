function firstNonRepeatingChar(str){
    for(var i=0;i<str.length;i++){
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    return false;
}
console.log(firstNonRepeatingChar('aabbc'));