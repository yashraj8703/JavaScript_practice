// // promise - creating our own async function

const { log } = require("node:console");
const { resolve } = require("node:path");

// //! when using promise
// //! no call backs - introduced to get rid of promise - call back hell

// // return new Promise(function(..arg)
// // {
// // resolve(..something)
// // })

// const fs = require("fs");
// console.log("1");

// function myPromise() {
//   console.log("2");
//   return new Promise(function (resolve) {
//     console.log("3");
//     fs.readFile("sample.txt", "utf-8", (err, data) => {
//       console.log("4");

//       resolve(data);
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// var a = myPromise(); //preomised return pending
// console.log(a);

// a.then(onDone);



//! Example where promise is immediately resolved

var d = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("foo");
  }, 1000);
  //   resolve('foo');
});

function callBack() {
  console.log(d);
}

// console.log(d);
// d.then(callBack);

//* .then() - runs when promise is resolved

//more - practice

// let firstPromise=new Promise((res,rej)=>{
//   return res("Hi")
// })

// console.log(firstPromise)

// let failedPromise = new Promise((res, rej) => {
//   let success=true
//   if(success) rej("Something went wrong");
//   else res("fulfilled")
// });
// console.log(failedPromise);

// failedPromise
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

let myPromise = new Promise((res, rej) => {
  let success;
  setTimeout(() => {
    success = true;
    if (success) res("resolved/fufilled");
    else rej("Not fulfilled");
  }, 3000);
});

// console.log(myPromise);
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const myAPIcall = "{\"userId\":1,\"id\":1,\"title\":\"delectus aut autem\",\"completed\":false}";
let myPromo=new Promise((res,rej)=>{
  setTimeout(() => {
    res(myAPIcall)
  }, 3000);
})

myPromo
  .then((res)=> JSON.parse(res))
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{console.log(err);
  })