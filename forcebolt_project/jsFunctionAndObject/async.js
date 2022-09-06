function addfunction(color, element){
    return new Promise((resolve, reject)=>{
        if(element=='ram'){
            console.log(color);
            resolve(element);
        }
        else{
            console.log('not color');
            reject('gg');
        }

    })
}
// addfunction('red','ram').then((name)=>console.log(name))
// .then(()=>addfunction('blue','ram'))
// .then(()=>addfunction('yellow','ra')).catch((err)=>console.log(err))
// .then(()=>addfunction('green','ram'))

function newAccount(name,balance){
    function deposit(amount){
        balance+=amount;
        console.log(balance)
    }
    return deposit;
}
const bob=newAccount('bob',100)
bob(100)