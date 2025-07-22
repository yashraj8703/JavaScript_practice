'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta:function(ing1,ing2,ing3)
  {
    console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`)
  }
};

const arr= [7,8,9]
const brr=[1,2,3,[2,3,4]]
const newArr=[1,2,arr[0],arr[1]] // creating a new array with some values of other array
console.log(newArr)
const newArr1=brr.concat(arr).flat() // using concat method flat-> for remove nesting
console.log(newArr1);


const a3=[...arr,...brr.flat()]
const b3=[...arr,...brr]
console.log(a3);


//! spread operator opens all the individual elements
//! a nested array will be consider as a single element and does not further spread


const [q1,q2,q3]=b3
console.log(q1,q2,q3);

// creating new array
const newMenu=[...restaurant.mainMenu,'Butter Chicken']
console.log(newMenu)


//use cases -> spread on strings
let a='string'
let b=[...a]
console.log(b);
let [c]=b
console.log(c);

const pastaIngredients=['cheese','peene','brocolli']
restaurant.orderPasta(...pastaIngredients)
//* spread for 3 arguments;

