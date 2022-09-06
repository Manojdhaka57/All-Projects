// random number beetween 5 to 7
function randomNumber(a,b){
    const x= (Math.random())*(b-a)+a;
    console.log(x.toFixed(5));
}
randomNumber(5,7);