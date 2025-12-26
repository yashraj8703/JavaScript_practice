//* .then -> await

const { log } = require("node:console");

function myPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi There");
    }, 1000);
  });
}

function main() {
  console.log(myPromise());

  myPromise().then((val) => {
    console.log(val);
    console.log("Hi There1");
  });
}

// main();

//* using async-await

function myPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi There");
    }, 1000);
  });
}

async function main() {
  const val = await myPromise(); // like - thread is waiting here
  console.log(myPromise());
  console.log(val);
  console.log("Hi There1");
}

// main();

// console.log("Hello World");

//more on this

// sync code
//async code - first process this then only go to 3 rd block
// sync cpde

// if we want top behave this like sync we can use async await


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(res => res.json())
//   .then(data => console.log("From fetch:", data))
//   .catch(err => console.error(err));
// Example with your own Promise
// js
// Copy code
// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`Waited ${ms}ms`), ms);
//   });
// }

// wait(2000)
//   .then(msg => console.log(msg))
//   .catch(err => console.error(err));


//! async function always returns promise

async function getData() {
  setTimeout(() => console.log("Hi"), 2000);
}

// getData();
// console.log(getData);

//? await - why?

console.log("FIRST");


async function getAPI() {
  let res=await fetch("https://jsonplaceholder.typicode.com/todos/1") //promise unfulfilled
  let data=await res.json //json parsing is asyn
  console.log(data);
  
}


getAPI()
console.log("second");
