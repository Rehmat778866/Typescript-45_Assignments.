

let Guest_list :string[] = ['Quaid_e_Azam','Kamran khan tessori','Rehmat'];

// for(let i=0; i<Guest_list.length; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_Guest :string = 'Quaid_e_Azam' ;

let new_Guest :string = 'Daniyal Nagori' ;

Guest_list[0] = new_Guest ;

// for(let i=0; i<Guest_list.length; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We Find Big Table So We are inviting 3 more guests.')

//  array me 3 guest add kiye hai.
Guest_list.unshift('Sir Zia Khan') ;
Guest_list.splice(2 , 0 , 'Imran khan');
Guest_list.push('Benazir bhutto');
// Yaha par maine 6 guest ke array ko print karwaya hai.
// for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
//  Sorry Message to guest for not inviting.
// console.log('\nSorry we can not arrange big table, only two peoples will be invited.');

//  Yaha par Guest remove kiye hai.
while(Guest_list.length > 2){
  let remove_Guest =  Guest_list.pop();
  // console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
// Hmre bachy hoye 2 invited Guest.
// for(let i=0; i<Guest_list.length; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
// }

// Maine sare guest array sy remove krdiye hai.
Guest_list.splice(0, 2);
console.log(Guest_list);

// Excercise 19

// Print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest Are: ${Guest_list.length}`);
