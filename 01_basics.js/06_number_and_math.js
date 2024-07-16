const score =  400
// console.log(score);

const balance = new Number(100.5) // this is way to express number or other things 
// console.log(balance);

// console.log(balance.toString().length) // it is converted into string andd ger property of string like : concat , length 
//  console.log(balance.toFixed(2)) // it used to show decimal " () " in the colon we set the value 

const otherNumber =  123.84444
// console.log(otherNumber.toPrecision(4));

const hundred = 1000000
// console.log(hundred.toLocaleString('en-in'));

// +++++++++++++++++++++++++++++++++++++++++   -----   MATHS  -----        +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.round(4.9)); //  Round mean round off -if want to chose higher value so use "ceil" and for lower value "floor"

// console.log(Math.min(3,2,5,7,8,9,7));

// console.log(Math.max(3,2,5,7,8,9,7));

console.log(Math.random());

console.log((Math.random()*10) + 1);

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)



