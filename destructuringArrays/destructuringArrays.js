'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  }
};

let [first, second] = restaurant.categories;
console.log(first, second);


//swapping variables 
[first, second] = [second, first];
console.log(first, second);

let [starterDish,mainDish]=restaurant.order(2,0)
console.log(starterDish,mainDish)


// nested destructuring

const nested=[1,2,[3,4]]
const [i,,j]=nested
const [a,,[r,s]]=nested
console.log(i,j)
const [k,p]=j
console.log(k,p)
console.log(a,r,s)

// default values

const [u,l,w]=[2,3]
console.log(u,l,w);
// w-> undefined


// destructuring basics

const arr=[1,2,3]
const [x,y,z]=arr
// console.log(x, y, z); 
// console.log(arr);
