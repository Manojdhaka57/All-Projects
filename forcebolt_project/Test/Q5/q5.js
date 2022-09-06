// Question 5:- Convert a non-negative integer num to its English words representation.

// Example 1:
// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:
// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"   
const integrTowords=(num)=>{
    let dict={
        '0':' ',
        '1':'on',
        '2':'two',
        '3':'three',
        '4':'four',
        '5':'five',
        '6':'six',
        '7':'seven',
        '8':'eight',
        '9':'nine',
        '10':'ten',
        '11':'eleven',
        '12':'twelve',
        '13':'thirteen',
        '14':'fourteen',

        '15':'fifteen',
        '16':'sixteen',
        '17':'seventeen',
        '18':'eigtheen',
        '19':'nineteen',
        '20':'twenty',
        '30':'thirty',
        '40':'fourty',
        '50':'fifty',
        '60':'sixty',
        '70':'seventy',
        '80':'eighty',
        '90':'ninty',
    }
    let lendict={
        '3':'hundred',
        '4':'thousand',
        '5':'thousand',
        '6':'lakh',
        '7':'lakh'
    }
    let resultStr=''
    let strNum=num.toString();
    while(strNum.length>0 && strNum!='0'){
        let n=strNum.length;
        if(n>3){
            
            if(n%2==0){
                resultStr+=dict[strNum[0]]+' '
                resultStr+=lendict[n]+" ";
                strNum=strNum.slice(1);
            }
            else{
                resultStr+=dict[strNum.slice(0,2)]+' '
                resultStr+=lendict[n]+" ";
                strNum=strNum.slice(2);
            }
        }
        else{
            // resultStr+=dict[strNum]+' ';
            if(n===3){
                resultStr+=dict[strNum[0]]+' hundred ';
                strNum=strNum.slice(1);
            }
            else if(n==2){
                let numstrrr=parseInt(strNum);
                resultStr+=dict[(Math.floor(numstrrr/10)*10)]+' ';
                strNum=strNum.slice(1);
            }
            else{
                resultStr+=dict[strNum]+' ';
                strNum='';
            }
        }
        
    }
    return resultStr;
}
console.log("12345=> "+integrTowords(12345))
console.log("123=> "+integrTowords(123))
console.log(integrTowords(223033))