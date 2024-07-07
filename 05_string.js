const name = "mukul"
const age = 19

// console.log(name + age + "value"); // this is outdated so preffer not to  use this because it is not readable 

console.log(`Hello my name is ${name } and my age is ${age}`); // it is better way to read 

const random = "Hello this is a string "

console.log(random[0]);
console.log(random.__proto__);

console.log(random.length);
// console.log(random.toUpperCase);

console.log(random.charAt(3));
console.log(random.indexOf('o'));

const newString = random.substring(0,5) // start counnt at zero nut last digit is not countable  ++++++
console.log(newString)

const anotherString = random.slice(-2,5)
console.log(anotherString);

const newStringOne =  "   Mukul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mukul.com/mukul%20singh"
console.log(url.replace('%20', '_'));

console.log(url.includes('b'));

console.log(random.blink());