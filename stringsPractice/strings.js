console.log('1'+2); // 12   //! if first is string then the other coerced to string also (if adding)

let myString="this is my string" // ! this is string literal

let myNewString= `this is my -> ${myString}`; // ! using backtick (can inject variables)

console.log(myNewString);

// ! string object using new string()

let objString=new String(()=>{
    return 'abc'
});


console.log(objString);
console.log(typeof objString); //! [String: "()=>{\r\n    return 'abc'\r\n}"]
console.log(objString.String);

/* let objString = new String(() => { return 'abc'; });
You're passing a function into the String constructor.

The String constructor tries to convert the argument to a string.

So this:

js
Copy
Edit
new String(() => { return 'abc'; })
is equivalent to:

js
Copy
Edit
new String("() => { return 'abc'; }")
Result: objString becomes a String object that wraps:

js
Copy
Edit
"() => { return 'abc'; }" */

console.log(typeof objString);

// let s1 = "hello";
// let s2 = new String("hello");

// console.log(typeof s1); // "string"
// console.log(typeof s2); // "object"

// console.log(s1 == s2);  // true (values are same)
// console.log(s1 === s2); // false (types differ)

// console.log(objString[0]);

// * some methods

const exString='lorem ipsum'

let newExString=exString.substring(1,-3); // * cannot be negative index 0 by default
/* 🧠 Breakdown of substring(1, -3):
start = 1
end = -3 → becomes 0
Since start > end, JS swaps them.
➡️ substring(1, -3) → substring(0, 1)
* /

console.log(newExString);

let newExString2=exString.slice(1,4,2); // * index can be negative 
console.log(newExString2);
*/
console.log("char\"".length);

let arr=[1,2,3,4,5,6,7,8];

