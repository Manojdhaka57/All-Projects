
// switch (fruit) {
//     case 'Mango':
//       alert( "You've got the Mango!" );
//       break;
  
//     case 'Orange':
//     case 'Banana':
//     case 'Guava':
//     case 'Apple':
//       alert( 'Multiple Types Food' );
//       break;
  
//     default:
//       alert( 'No Food Found' );
// }
let fruit='Orange';
if(fruit==='mango'){
    console.log("You've got Mango!");
}
else if(fruit === 'Orange' || fruit=== 'Banana'|| fruit=== 'Guava'|| fruit==='Apple'){
    console.log('Multiple Types Food');
}
else{
    console.log('No Food Found')
}