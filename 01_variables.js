const accountId = "1223567776"
let accountEmail =  "m@googlle.com"
var accountPassword = "12345"
accountcity = "Delhi"

// accountId = 2 // this is not allowed

console.log(accountId);

accountEmail  =  "mukul@google.com"
accountPassword = "122333"
accountcity = "Noida"

console.table([accountEmail, accountPassword, accountcity])

/*
prefer not to use var
because of issue in block scope and functional  scope
*/