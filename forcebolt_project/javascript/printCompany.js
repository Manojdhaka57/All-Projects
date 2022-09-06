// "A print company wants a method to calculate last number prints by printer if 
// you pass the current number and number of digit for print.
// Ex:-
// For currentPage = 1,numberOfDigits = 5,the output will be 5.`1
// The following numbers will be printed : 1,2,3,4,5
// For currentPage = 8,numberOfDigits = 4,the output will be 10.
// The following numbers will be printed : 8,9,10"""
function printCompany(currentPage, numberOfDigits){
    const arrPrintPage=[]
    while(currentPage.toString().length<=numberOfDigits){
        arrPrintPage.push(currentPage);
        
        numberOfDigits-=currentPage.toString().length;
        currentPage++;

    }
    return arrPrintPage;
}
console.log(printCompany(1,5));
console.log(printCompany(8,4));
