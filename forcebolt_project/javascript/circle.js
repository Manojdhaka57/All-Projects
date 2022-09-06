function check_point(x,y,r,a,b){
    var dist_from_center= (x-a)**2 +(y-b)**2 
    if(dist_from_center< r*r){
        return true;
    }
    return false;
}
const a=[2 , 3, 5, 8, 7,1]
console.log(a.sort((a,b)=> a^b))
console.log(check_point(0,0,3,1,1));
console.log(check_point(1,1,5,10,10));