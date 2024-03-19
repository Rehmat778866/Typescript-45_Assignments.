
// Write a series of conditional tests.

// creating car variable
let car :string = 'subaru';

//  Test No 1
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');

//  Test No 2
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

//  Test No 3
console.log("Is car != 'Honda'? I predict true.");
console.log(car != 'Honda');


//  Test No 4
console.log("Is car !== 'ford'? I predict true.");
console.log(car !== 'ford');

//  Test No 5
console.log("Is car.upper case == 'SABARU'? !== 'ford'? I predict true.");
console.log(car.toUpperCase() == 'SUBARU');

//  Test No 6
console.log("Is car == 'SABARU'? !== 'ford'? I predict false.");
console.log(car == 'SUBARU');

//  Test No 7
console.log("Is car === 'SABARU'? !== 'ford'? I predict false.");
console.log(car === 'SUBARU');

//  Test No 8
console.log("Is car === 'Train'? !== 'ford'? I predict false.");
console.log(car === 'Train');

//  Test No 9
console.log("Is car === 'Bus'? !== 'ford'? I predict false.");
console.log(car === 'Bus');

//  Test No 10
console.log("Is car === 'cycle'? !== 'ford'? I predict false.");
console.log(car === 'cycle');
