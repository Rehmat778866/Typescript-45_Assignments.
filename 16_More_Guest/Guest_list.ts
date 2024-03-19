

let Guest_list :string[] = ['Quaid_e_Azam','Kamran khan tessori','Rehmat'];

// for(let i=0; i<Guest_list.length; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_Guest :string = 'Quaid_e_Azam' ;

let new_Guest :string = 'Daniyal Nagori' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! We Find Big Table So We are inviting 3 more guests.')

Guest_list.unshift('Sir Zia Khan') ;
Guest_list.splice(2 , 0 , 'Imran khan');
Guest_list.push('Benazir bhutto');

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}
