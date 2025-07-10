// ! Arrays are non primitives

let a=[1,2,3,4];
let b=a;
b[1]='yash'

// console.log(a)
// console.log(typeof a)
// console.log(b)

//! declaration

let arr=[1,2,3,4]
let arr2=new Array(5)
// console.log(arr)
// console.log(arr2)


// ! Methods

a.push(490);  //? adds item to end of array
// console.log(a)
// console.log(b)

//? pop 
a.pop() // removes last element

//? unshift -> adds element to first
a.unshift(35)

//? shift() -> removes first element
a.shift()

//* question type methods

//? includes() -> element in array or not
// console.log(a.includes(6));

//? indexof() of element
// console.log(a.indexOf(6)); // return -1 if not found



//? join -> joins the arrray elements with seperator and tuens into string
let myNewArr=[1,2,3,4,5]
let myString=myNewArr.join("%")
// console.log(myString)
// console.log(typeof myString)

//? Split() -> splits the string into array elements with splitter
let myNewString="Helo There Mate"
let newArr=myNewString.split(' ');
// console.log(newArr)
// console.log(typeof newArr) //type is object





//! splice() -> adds/removes elemnets from certain index (a,b) a=> starting index b=> no of elements to be removed and modifies original array
let array3=[1,2,3,4,5]
let x4=array3.splice(2,3)
// console.log("a3",array3)
// console.log("x4",x4) // x4 conatins the removed elements

//* another variant
let array4=[1,2,3,4,5]
array4.splice(1,2,'X','Y'); // index 1,2 replaced with X and Y
// console.log(array4)
array4.splice(0,0,101,102)
// console.log(array4)// adds 101 nad 102 at 0 and 1 and shifts rest


//! splice() -> returns new array and not changes origina array AND sUsed to extract a portion of the array

let a5=[1,2,3,4,5,6,7,8]
let b5=a5.slice(2,4)
// console.log(b5)
// console.log(a5)


//! concat
let x1=[1,2]
let y1=[5,6,7,8,[34,56]]

// let p1=[...x1,...y1]
// let p1=[...x1,...y1] //P1 [ 1, 2, 3, 4, 5, 6, 7, 8, [ 34, 56 ] ] one level of spreading appplied
let p1=x1.concat(...y1) 
//P1 [
//   1, 2, 3,  4,  5,
//   6, 7, 8, 34, 56
// ]
console.log("P1",p1);

let [f1,g1]=[...x1]
console.log(f1,g1)