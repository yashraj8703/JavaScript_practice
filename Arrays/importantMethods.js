//! Map()

let c1=[1,2,,3,4,5]

let d1=c1.map((x)=>x*x)

console.log(c1)
console.log(d1)
// Create an array with a "hole" (missing value at index 2)
let a1 = [1, 2, , 3, 4, 5];  // a1[2] is a hole (not undefined, just missing)

// Use map() to square each element in the array
let b1 = a1.map((x) => x * x);

// Print the original array
console.log("Original array (a1):", a1);  // Output: [1, 2, <1 empty item>, 3, 4, 5]

// Print the resulting array after mapping
console.log("Mapped array (b1):", b1);    // Output: [1, 4, <1 empty item>, 9, 16, 25]



//! filter()

let x1=[1,2,3,4,5,6,7,8,9,10]
let y1=x1.filter((x)=>x%2==0)
console.log(y1)

//! reduce() -> return a single value  
let z1=x1.reduce((acc,curr)=>acc+curr,0)
console.log(z1)

//! find() -> In arrays, return first element satisfying condition and if not returns undefined

let p1=x1.find(x=>x>30)
console.log(p1)


//! flat() -> flats nested arrays

let nested = [1, [2, [3, [4]]]];
// console.log(nested)
let n1=nested.flat()
console.log(n1);
let n2=nested.flat(2)
console.log(n2);
let n3=nested.flat(3)
console.log(n3);


