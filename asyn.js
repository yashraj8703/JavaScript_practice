// JS is single threaded but can context switch or help other to do some works

function add()
{
    let sum=0;
    for(let i=0;i<=10000000000;i++)
    {
        sum+=i
    }
    console.log(sum)
}
const { log } = require("console");
// add()
// setTimeout(add,1000) //async function
// console.log("Hello")



/////////////////////////////////////////////////////////////////
// async functions - FileSystem.readFile, setTimeout, fetch-data from API endpoint - have call back functions
//! sync function do not have callbacks


//async call
const fs=require("fs")
fs.readFile("sample.txt","utf-8",(err,data)=>{
    try{
        console.log(data);
    } 
    catch{
        console.log(err);
    }
})

console.log("Hello");


for(let i=0;i<1000000000;i++)
{

}

console.log("Hi there 2")
//! "Hello" is printed first because file reading happens asynchronously.
//! The long loop blocks the main thread, so the file reading output appears only after the loop finishes.

//* use LOUPE website

console.log("first")

setTimeout(function(){
    console.log("from async function")
},5000)

setTimeout(function(){
    console.log("from async 2 function")
},5000)

let a=0
for(let i=0;i<6;i++)
{
    a+=i
}
console.log(a)
console.log("xyz")

console.log("second")

console.log("third")

