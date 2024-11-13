// const hitUser = new Object() // singleton object 
const hitUser = {} // non singleton object

hitUser.id = "123abc"
hitUser.name = "Victor"
hitUser.isLoggedIn = false

// console.log(hitUser);

const regularUser = {
    email: "any@google.com",
   fullname: {
   userfullname:{
    firstname:"mukul",
    lastname:"singh"
        }
     }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1,obj2} this is wrong method
// const obj3 = Object.assign({}, obj1,obj2) 

const obj3 = {...obj1,...obj2}
console.log(obj3);


const object = [  1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 ]
object.concat(obj1 , obj2)
 console.log(object);
 





