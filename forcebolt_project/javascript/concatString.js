function concatString(s){
    if(s.length %2 !==0){
        return false
    }
    var x=s.length;
    for(let i=0;i<x/2;i++){
        if(s[i]!==s[i+x/2]){
            return false;
        }
    }
    return true;
}
console.log(concatString('cloudcloud'));
console.log(concatString('2w2ww'));
console.log(concatString('qqq'));