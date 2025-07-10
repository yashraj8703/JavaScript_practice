// ! Data - Types 
// ! PRIMITIVE -> string, Number, Boolean, Symbol, null, undefined, BigInt (Call by value) 
// ! Non - PRIMITIVE -> array, object, symbol (call by reference) 


const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id);
console.log(typeof id);
console.log(id == anotherId);



const bigNumber= 474747474744747474477474747474747474747474747474n;
console.log(bigNumber);
console.log(typeof bigNumber);


const myObject={
    name:null,
    roll:123
}
console.log(myObject);
console.log(typeof myObject);


let myBool=!!0
console.log(myBool);
console.log(typeof myBool);
 // ! two calls of the ! (logical NOT) operator are equivalent to Boolean()


 function myFunction()
 {
    console.log('Hello');
 }

 console.log(typeof myFunction);
// ! The data type of a function is: "function" (via typeof)
// ! But under the hood, it is an instance of the Function object

function greet() {
  return "Hello!";
}

console.log(typeof greet);              // "function"
console.log(greet instanceof Function); // true
console.log(greet instanceof Object);   // true

const myVar=new greet();
console.log(myVar);
