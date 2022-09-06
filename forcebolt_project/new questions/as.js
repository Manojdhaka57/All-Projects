function check(num){
    let d=String(num).length;
    let x=(num*num).toString();
    
    if(x.length<2){
        if(x==num){
            return true;
        }
        else return false;
    }
    let mid=Math.floor(x.length/2)
    let left=x.slice(0,mid);
    let right=x.slice(mid);
    if(parseInt(left)+parseInt(right)==num){
        return true;
    }
    return false;

}
function kaspir(x,y){
    let result=[];
    for(let i=x;i<=y;i++){
        if(check(i)){
            result.push(i)
        }
    }
    return result;
}
// console.log(kaspir(1,100))
function isrectangle(arr){
    let [[x1,y1],[x2,y2],[x3,y3],[x4,y4]]=arr;
    let centerx=(x1+x2+x3+x4)/4;
    let centery=(y1+y2+y3+y4)/4;
    let dd1=(centerx-x1)*(centerx-x1)+(centery-y1)*(centery-y1);
    let dd2=(centerx-x2)*(centerx-x2)+(centery-y2)*(centery-y2);
    let dd3=(centerx-x3)*(centerx-x3)+(centery-y3)*(centery-y3);
    let dd4=(centerx-x4)*(centerx-x4)+(centery-y4)*(centery-y4);
    return dd1==dd2 && dd1==dd3 && dd1==dd4;
}
function countRect(vortexArr){
    let count=0;
    if(vortexArr.length<4){
        return 0;
    }
    let subset=[[]];
    for(let i=0;i<vortexArr.length;i++){
        let x=subset.length;
        for(let j=0;j<x;j++){
            subset.push([...subset[j],vortexArr[i]]);
        }
    }
    let rectangs=subset.filter(y=>y.length==4);
    for(let i=0;i<rectangs.length;i++){
        if(isrectangle(rectangs[i])){
            count++;
        }
    }
    return count;
}
// console.log(countRect([[1,1],[2,1],[1,2],[2,2],[3,1],[3,2],[3,3],[2,3],[1,3]]));
function smallestInt(arr){
    let result=new Array(arr.length+1);

}
