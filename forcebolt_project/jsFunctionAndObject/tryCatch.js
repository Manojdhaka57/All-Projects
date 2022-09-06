// try{
//     let x=20
    
//     if(x<5){
//         throw 'to low';
//     }
//     if(x>10){
//         throw 'too high';
//     }
// }
// catch(err){
//     console.log(err)
// }
// try{
// //block of code for try
// }
// catch(err){
// //block of code for handle error
// }
// finally{
// // block of code to be executed  regardless of try/catch result;
// }
function sumMatrix(matrix,x1,y1,k){
    let sum=0;
    for(let i=x1;i<x1+k;i++){
        for(let j=y1;j<y1+k;j++){
            sum+=matrix[i][j];
        }
    }
    return sum;
}
function submatrix(matrix,k){
    result=[];
    for(let i=0;i<matrix.length-k+1;i++){
        for(let j=0;j<matrix[0].length-k+1;j++){
            result.push(sumMatrix(matrix,i,j,k))
        }
    }
    return result;
}
// console.log(submatrix([[1,2,3],[4,5,6],[7,8,9]],2))
// Given an array of positive distinct integers denoting the crossing time of ‘n’ people.
// There is only one torch with them and the bridge cannot be crossed without the torch. 
// These ‘n’ people are standing at one side of the bridge. The bridge can hold a max of 
// two people at a time. When two people cross the bridge, they must move at the slower 
// person’s pace.

// Find the minimum total time in which all persons can cross the bridge. See this puzzle to 
// understand more. Note: Slower person pace is given by larger time. 
// Input: Crossing Times = [1, 2, 5, 8} Output: 17 
//     Input: Crossing Times = {10, 20, 30} Output: 60 Explanation 
//     1. Firstly person '1' and '2' cross the bridge with a total time of about 20 minutes 
//     (maximum of 10, 20) 2. Now the person '1' will come back with total time of '10' minutes. 
//     3. Lastly the person '1' and '3' cross the bridge with a total time of about 30 minutes
//      Hence total time incurred in the whole journey will be 20 + 10 + 30 = 60
function minimumtime(timearr){
    if(timearr.length<=2){
        return Math.max(...timearr);
    }
    let sum=timearr.reduce((acc,item)=>acc+item,0);
    return sum+Math.min(...timearr)*(timearr.length-3);
}
// console.log(minimumtime([10,20,30,40]))
function perfectSquare(n){
    let result=new Array(n+1);
    for(let i=0;i<n+1;i++){
        result[i]=i;
        for(let j=1;j*j<=i;j++){
            result[i]=Math.min(result[i],1+result[i-j*j]);
        }
    }
    return result;
    

}
// console.log(perfectSquare(12))
function dfs(matrix,m,n,i,j){
    const direction=[[1,0],[-1,0],[0,1],[0,-1]];
    max=0;
    for(dir of direction){
        let x=i+dir[0];
        let y=i+dir[1];
        if(x>=0 &&y>=0 && x<m && y<n && matrix[i][j]<matrix[x][y]){
            max=Math.max(max,dfs(matrix,m,n,x,y));
        }
        
    }
    return max+1;
}
function longestPath(matrix){
    let m=matrix.length;
    let n=matrix[0].length;
    let longestpath=0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++ ){
            longestpath=Math.max(longestpath,dfs(matrix,m,n,i,j))
        }
    }
    console.log(longestpath)
}
// longestPath([[1,2,3],[4,5,6],[7,8,9]]);
function minimumop(n){
    if(n==2){
        return 1;
    }
    else if(n%2==0){
        return 1+minimumop(n/2);
    }
    return Math.min(1+minimumop(n+1),1+minimumop(n-1));
}
// console.log(minimumop(8))
function subsets(arr,k){
    const result=[[]];
    for(let i=0;i<arr.length;i++){
        let l=result.length;
        for(let j=0;j<l;j++){
            result.push([...result[j],arr[i]]);
        }
    }
    const resu= result.filter((item)=>item.reduce((acc,i)=>i+acc,0)==k).map(item=>String(item.sort((a,b)=>a-b)));
    return resu.filter((item,index)=>index===resu.indexOf(item)).length;
}
// console.log(subsets([2,5,2,1,2],5));
// console.log(subsets([10,1,2,7,6,1,5],8))
function maxieven(str){
    let numbers=''
    for(let i=0;i<str.length;i++){
        if(str[i]>='0' && str[i]<'9'){
            numbers+=str[i];
        }
    }
    let  numArr= numbers.split('').map(item=>parseInt(item)).sort().reverse();

    let nums=numArr.filter((item,index)=>index==numArr.indexOf(item));

    const minEven=numArr.filter(item=>item%2===0)
    
    if(minEven.length<1){
        return -1;
    }
    let finalresult=String(nums.filter(item=>item!==minEven[minEven.length-1])).replace(/,/g,'');
    console.log
    return finalresult+Math.min(...minEven);
}
// console.log(maxieven('qwert@821142'));
// console.log(maxieven('dhilshad73119755'));
function gcd(x,y){
    if(y==0){
        return x;
    }
    return gcd(y, x%y);
}
function countfacter(n,m){
    let count=0;
    let i=2;
    while(n>1 && n%i==0){
        count++;
        n/=i;
    }
    for(i=3;i*i<=n && i<m;i+=2){
        while(n%i==0){
            count++;
            n/=i;
        }
    }
    if(n>m){
        return -1;
    }
    if(n!=1){
        count++;
    }
    return count;
}
function multistorey(x,y,m)
{
    let gcdofxy=gcd(x,y);
    let xtime=countfacter(x/gcdofxy,m);
    let ytime=countfacter(y/gcdofxy,m);
    
    return [xtime,ytime, gcdofxy];
}
// console.log(multistorey(20,16,10));
// console.log(multistorey(100,120,10));
// console.log(multistorey(160,100,10));
function iskapn(num){
    let d=num.toString().length;
    
    let snum=(num*num).toString();
    if(snum.length<2){
        if(snum==num){
            return true;
        }
        else 
        {
            return false;
        }
        
    }
    let mid=Math.floor(snum.length/2);
    let left=parseInt(snum.slice(0,mid))
    let right=parseInt(snum.slice(mid,snum.length));
    if((left+right)==num){
        return true;
    }
    else{
        return false;
    }

   
    
}
function kapn(x,y){
    let result=[]
    for(let i=x;i<=y;i++){
        if(iskapn(i)){
            result.push(i);
        }
    }
    return result;
}
// console.log(kapn(1,10));
// console.log(kapn(1,100));
// console.log(kapn(100,300));
function countrectangle(matrix){
    const subsets=[[]];
    for(let i=0;i<matrix.length;i++){
        let len=subsets.length;
        for(let j=0;j<len;j++){
            subsets.push([...subsets[j],matrix[i]]);
        }
    }
    return subsets.filter(item=>item.length==4);
}
console.log(countrectangle([[1,1],[2,1],[1,2],[2,2],[3,1],[3,2]]))