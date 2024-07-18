// Singleton
// object.create


//////////////////// Object literals ///////////////////////

// this is syntax to define a symbol
const mySym = Symbol("keyOne") // this is symbol 

// this is syntax to define a object
const jsUser = {
    name: "mukul", //  the name is store as string type but not required to define 
    "fullName": "Mukul singh", //  it is denoted by square notation "["fullName"]"
    age: 19,
    [mySym]: "keyOne", // this is syntax of include symbol
    location: "Delhi",
    email: "mukul@google.com",
    isLoggedIn: false,
    lastLoginDay: ["monday","saturday"]
}

// console.log(jsUser.email); 
// console.log(jsUser["email"])
// console.log(jsUser["fullName"]);
// console.log(jsUser [mySym]);

jsUser.email = "mukul1@Yahoo.com"
Object.freeze(jsUser) // freeze hone pr kuch or add nhi hota 
jsUser.email = "singh@youtube.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsUser. greeting())













