"use strict";
let current_users = ['ReHmat', 'kamRan khan tessori', 'danIyal naggori', 'shoni', 'Beebo'];
let new_users = ['Aizal', 'ReHmat', 'KamRan khan tessori', 'Faryal', 'Sheryar'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username`);
    }
    else {
        console.log(` The username ${newUsername} is available.`);
    }
});
