function spiltNum(num){
    var num=(num*num).toString();
    var mid;
    var result;
    if(num.length>1){
        mid=Math.floor(num.length/2);
        result=[parseInt(num.substr(0,mid)),parseInt(num.substr(mid,num.length))];
    }
    else{
        mid=0;
        result=[parseInt(num),0];
    }
    return result;
}
function kaprekarNumber(left,right){
    let kaprekarNumArr=[];
    for(let i=left;i<=right;i++){
        let seq=spiltNum(i);
        if(seq[0]+seq[1]===i){
            kaprekarNumArr.push(i);
        }
    }
    if(kaprekarNumArr.length===0){
        console.log("INVALID RANGE");
    }
    else{
        console.log(kaprekarNumArr.join(" "));
    }
}
kaprekarNumber(1,10);
kaprekarNumber(100,300);
kaprekarNumber(1,100);