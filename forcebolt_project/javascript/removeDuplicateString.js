function removeDuplicateChar(str){
    const charArray=str.split('');
    const resultArray=charArray.filter((item,pos)=>charArray.indexOf(item)===pos);
    let resultString=resultArray.join("");
    console.log(resultString);
}
const str='abbbababcccedddd';
removeDuplicateChar(str);