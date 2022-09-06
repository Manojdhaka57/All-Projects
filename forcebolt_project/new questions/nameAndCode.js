// ".Take input from user in the given format (consist of name and code),
// Find max digit from code which is less or equal to the length of string
// And put that place char in the final string if there is no digit found which not satisfy the
//  condition that simply put ‘x’

// #Input: Abhishek:34848,Mayur:4739,Friends:2949,Yeah:9889
// #Output: KueX
// "
function nameAndCode(str){
    let inputArr=str.split(',').map(item=>item.split(':'));
    let result=''
    for(let i=0;i<inputArr.length;i++){
        let lenOfstring=inputArr[i][0].length;
        let number=inputArr[i][1];
        let found=false;
        let digit=-1;
        for(let ci of number){
            if(ci<=lenOfstring && ci>digit){
                found=true;
                digit=ci;
            }
        }
        
        if(found===true){
            result+=inputArr[i][0][digit-1];
        }
        else{
            result+='X';
        }
    }
    return result;
}
console.log(nameAndCode("Abhishek:34848,Mayur:4739,Friends:2949,Yeah:9889"));