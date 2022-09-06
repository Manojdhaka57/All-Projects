function elasticzeString(str){
    if(str.length<4){
        return str;
    }
    
    let leftstring=str.substr(0,str.length/2);
    let rightstring=str.substr(str.length/2);
    let leftstrings=leftstring.split('').map((c,index)=>c.repeat(index+1)).join('');
    let rightstrings=rightstring.split('').reverse().map((c,index)=>c.repeat(index+1)).reverse().join('')
    return leftstrings+rightstrings;
}
console.log(elasticzeString('anna'));
console.log(elasticzeString('KAYAK'));
console.log(elasticzeString('X'))
// console.log(String('A'.repeat(3)));