"use strict";
function make_shirt(size = 'large', text = 'I love typescript.') {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'I love python');
