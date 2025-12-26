    
// async function ApiFetcFunction() {
//     try {
//         const fetchPromise = await fetch("https://jsonplaceholder.typicode.com/posts"); // use a proper endpoint
//         const data = await fetchPromise.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// ApiFetcFunction();

// console.log("Start");

// const myPromise = new Promise((resolve, reject) => {
//   console.log("Inside Promise");
//   setTimeout(() => resolve("Promise resolved!"), 1000);
//   console.log("promise is in webapi or call back queue but i'm printed here")
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// console.log("End");


// console.log("Start");

// async function fetchData() {
//   console.log("Inside async function");
//   const data = await new Promise((resolve) => {
//     setTimeout(() => resolve("Async/Await resolved!"), 1000);
//   });
//   console.log("Paused till here")
//   console.log(data);
// }

// fetchData();

// console.log("End");


const fs = require("fs");

// Start reading the file asynchronously
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  console.log("File contents:");
  console.log(data);
});

// Expensive synchronous operation
console.log("Starting expensive operation...");

// Let's make it increasingly expensive
let sum = 0;
for (let i = 0; i < 10000000000; i++) {  // You can increase this to 1e10 for more CPU load
  sum += i;
}

console.log("Expensive operation done. Sum =", sum);
