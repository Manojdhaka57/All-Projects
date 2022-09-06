// method 1
let [a,b]=[1,2];
[a,b]=[b,a]
console.log([a,b]);
// method 2
let [x,y]=[1,2];
y=x^y;
x=x^y;
y=x^y;
console.log([x,y]);
// method 3
let [c,d]=[1,2];
c=c+d;
d=c-d;
c=c-d;
console.log([c,d]);