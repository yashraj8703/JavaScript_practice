//! Reduce Method

let a=[1,288,3,4,50];
let val=a.reduce((acc,curr)=>{
    // console.log(acc);
    // console.log(curr);
    return acc+curr},0);
console.log(val);
 

// largest Element in an Array
let max=a.reduce((acc,curr)=>{
    if(acc>curr) return acc;
    else return curr
},a[0]);
console.log(max);
