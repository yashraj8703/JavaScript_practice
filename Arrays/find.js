let a=[1,,3,,5,3,4,5]

let index=a.find((x)=>x%2==0)

console.log(index)

a.find((x,i)=> console.log(x,i))