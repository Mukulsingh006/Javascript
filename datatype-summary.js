// premitive Data type

// 7 types : number, null, string, boolean, Bigint,  undefined, symbol

// the gives values as copy format 

const score  = 100
const scoreValue =  100.3

const isLoggedIn = false 
const outsideTemp =  null

let userEmail;
 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12234533323256687n



// Refrence (Non-premitive)  Data type

// Array ,  Object , Function

const heros = ["shaktimaan" , "Doga", "Naagraj"];

let myObj = {
    name: "Mukul",
    age: 19,
}

const myFunction =  function(){

   console.log("Hello World");}

console.log(typeof false)

// +++++++++++++++++++++++++++++++++++++++++++++++++++$# Stack and Heap #$++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Premitive) , Heap (Non-Premitive or Refrence)

// Stack meh vallue copy hokr jati aur original value change nhi hoti hai //

let myName = "Mukul singh"

let anotherName = myName
anotherName = "Singh Mukul"

console.log( myName);
console.log(anotherName );

// Heap meh Refrence aur change dono hi original value hoti hai //

let userOne = {
    email : "user@google.com"
    
}

let userTwo = userOne;

userTwo.email = "mukul@google.com"

console.log(userOne);
console.log(userTwo);











