"use strict";
let Guest_list = ['Quaid_e_Azam', 'Kamran khan tessori', 'Rehmat'];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest = 'Quaid_e_Azam';
let new_Guest = 'Daniyal Nagori';
Guest_list[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We Find Big Table So We are inviting 3 more guests.');
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Imran khan');
Guest_list.push('Benazir bhutto');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log('\nSorry we can not arrange big table, only two peoples will be invited.');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
