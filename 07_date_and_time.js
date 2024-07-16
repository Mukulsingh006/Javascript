// Dates And Times  //
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);


let thisDate = new Date(2023, 0, 27)
let hisDate = new Date(2023, 0, 27, 5, 3)
let createdDate = new Date("2023-01-27")
// console.log(myCreatedDate.toLocaleString());


//  let hisDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString()); // localstring is used for date time like used in office , hotels  andn others 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log( myTimeStamp . getTime());
// console.log(Math.floor(Date.now()/1000)); // this is sed for converting into second and round off the decimal number

let newDate = new Date()
// console.log(newDate.getDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
   weekday:"long",   
})




