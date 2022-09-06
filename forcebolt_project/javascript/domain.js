// "Write a method that labels of domain as 'Bussiness','Company','CallingService','Technology' 
// for .com,.org,.net or .info respectively. For the given list of domains 
// return the list of their labels." "Ex:- ['en.wiki.org',onlinesbi.com''happy.net','code.info'] , 
// the result should be = ['Company','Bussiness','CallingService','Technology'].""
function domain(arr){
    const obj={
        'com': 'Bussiness',
        'org': 'Company',
        'net': 'CallingService',
        'info': 'Technology'
    }
    const result=[]
    for(let i =0;i<arr.length;i++){
        let do_main=arr[i].slice(arr[i].lastIndexOf('.')+1)
        result.push(obj[do_main]);
    }
    console.log(result);
}
const ex=['en.wiki.org','onlinesbi.com','happy.net','code.info']
domain(ex);