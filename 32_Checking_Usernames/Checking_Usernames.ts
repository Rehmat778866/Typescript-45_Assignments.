let current_users: string[] = ['ReHmat','kamRan khan tessori','danIyal naggori','shoni','Beebo'];

let new_users: string[] = ['Aizal','ReHmat','KamRan khan tessori','Faryal','Sheryar'];

new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();
   
    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username`);
    }
    else{
        console.log(` The username ${newUsername} is available.`);
    }
})