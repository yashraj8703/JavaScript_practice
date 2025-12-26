📌 Asynchronous JavaScript – Callbacks, Promises, Async/Await

JavaScript is a single-threaded language. This means it executes one statement at a time on a single call stack.

But real-world applications (reading files, making API calls, setting timers) require non-blocking behavior. To achieve this, JavaScript uses:

Callbacks

Promises

Async/Await

Managed by the Event Loop

This README explains these concepts with examples.

🔹 1. Synchronous vs Asynchronous Code
Synchronous Execution

Runs line by line.

Each statement must finish before the next begins.

Long tasks can block the main thread.

Example:

console.log("Start");
for (let i = 0; i < 1e9; i++) {} // long loop blocks
console.log("End");


Output:

Start
End   (appears only after loop finishes)


👉 This is blocking code because the loop freezes execution.

Asynchronous Execution

Allows tasks to run in the background.

Main thread continues while async task completes later.

Example:

console.log("Start");

setTimeout(() => {
  console.log("Async Task Done");
}, 2000);

console.log("End");


Output:

Start
End
Async Task Done


👉 Non-blocking: "End" prints before the async task finishes.

🔹 2. Callbacks

A callback is a function passed as an argument to another function, executed later.

Example:

const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

console.log("Reading file...");


👉 "Reading file..." prints immediately, while file contents print later.

Problem with callbacks: When multiple async tasks depend on each other, code becomes nested and unreadable → Callback Hell.

🔹 3. Promises

A Promise is an object representing a future value.

States: pending → fulfilled (resolved) / rejected.

Consumed with .then() and .catch().

Example:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received"), 1000);
});

promise.then((value) => console.log(value));


Output after 1s:

Data received


👉 Promises make async code more structured compared to callbacks.

🔹 4. Async/Await

async/await is syntactic sugar built on top of Promises.

async marks a function as asynchronous.

await pauses execution until the promise resolves.

Example:

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data received"), 1000)
  );
}

async function main() {
  const result = await fetchData();
  console.log(result);
  console.log("After Await");
}

main();


Output:

Data received
After Await


👉 await makes async code look synchronous and easier to read.

🔹 5. Event Loop

The Event Loop is what makes JavaScript appear concurrent.

Call Stack executes synchronous code first.

Web APIs / Node APIs handle async tasks (timers, file I/O, network).

Callback Queue stores completed async tasks.

Event Loop pushes them back into the call stack when it’s free.

Example:

console.log("First");

setTimeout(() => console.log("Async Task"), 2000);

console.log("Second");


Output:

First
Second
Async Task

🔹 6. Blocking vs Non-Blocking

Blocking: Prevents further execution until task finishes.

Non-blocking: Task runs in background, freeing the main thread.

Example:

// Blocking
function add() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;
  console.log(sum);
}
add(); // blocks

// Non-blocking
setTimeout(add, 1000);
console.log("Hello");

📖 Key Terms

Synchronous: Executes sequentially.

Asynchronous: Executes without blocking other code.

Callback: Function executed after async task completes.

Promise: Object representing eventual completion/failure of async task.

Async/Await: Cleaner syntax for promises.

Event Loop: Manages execution of sync + async tasks.

Blocking Code: Freezes execution until task completes.

Non-blocking Code: Allows execution of other tasks in parallel.

🔮 Visualization Tool

Use Loupe to see how the call stack, Web APIs, and event loop work together.

✅ Summary

JavaScript is single-threaded, but async features allow it to perform non-blocking tasks.

Callbacks → First async approach, but can lead to callback hell.

Promises → Cleaner, chainable syntax.

Async/Await → Modern, synchronous-looking async code.

Event Loop ensures async tasks run without blocking.