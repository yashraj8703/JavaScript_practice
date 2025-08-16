// // promise - creating our own async function

const { log } = require("node:console");

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

// //



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

console.log(d);
d.then(callBack);

//* .then() - runs when promise is resolved
