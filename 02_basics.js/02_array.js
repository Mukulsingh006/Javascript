const marvel_heros = ["Ironman" , "Thor" , "Spiderman"]
const cartoon = ["Ben10" , "Oggy" , "chota Bheem"]

// marvel_heros.push(cartoon); // it is not a way to merge two arrays 

// console.log(marvel_heros)

// const Heros = marvel_heros.concat(cartoon); // this is way to merge two arrays but is not a right way 
// console.log(Heros);

const allHeros = [...marvel_heros,...cartoon]
// console.log(allHeros);

const number_array = [1,2,[3,5,6],[9,7,8,[4,7,9,3,6]]]
const real_number_array = number_array.flat(Infinity) // it helps to clear or merge n-number of array
// console.log(real_number_array);

// console.log(Array.isArray("Mukul")); 
// console.log(Array.from("Mukul")); // it is convert into array

// console.log(Array.from({name: "mukul"})) // it gives eempty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

