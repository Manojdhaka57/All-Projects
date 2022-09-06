// "in thumbtack,user are able to rate based on theri experience working 
// with them. each ratig in the form of integer1 to 5. all rating are average 
// to produced a single number rating . if rating are below than average 
// rating , display a message."
// type here

// rating ([[3,4],[3,3,3,4],[4]] , 4)

// "rating [[3,4],[3,3,3,4],[4]] output = 1"
function rating(ratingArray,avg_rating){
    let sum=0;
    let count=0;
    let avgEle=[];
    for(let i=0;i<ratingArray.length;i++){
        count+=ratingArray[i].length;
        let sumEle=0;
        let countEle=ratingArray[i].length;
        for(let j=0;j<ratingArray[i].length;j++){
            sumEle+=ratingArray[i][j];
        }
        sum+=sumEle;
        avgEle.push(sumEle/countEle);
    }
    
    
    let resultCount=0;
    for(let i=0 ;i< avgEle.length;i++){
        if (avgEle[i]>=avg_rating){
            resultCount++;
        }
    }
    return resultCount;
}
console.log(rating([[3,4],[3,3,3,4],[4]],4));