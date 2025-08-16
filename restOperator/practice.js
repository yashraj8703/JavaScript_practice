// ! rest -> pack elements into arrays
// ! rest think of using on left side 
let a=[1,2,3,4]
let [b,c,...d]=a
console.log(b,c,d);
// * b->1st c->2nd element & rest elements are goes to d


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },
  orderPizza:function(mainIng,...otherIng){
    console.log(mainIng);
    console.log(otherIng);
    
  }
};
restaurant.orderPizza(...['Mushroom','a','b','c'])



// * rest element must be the last element
const [first,,third,...rest]=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(first,third,rest);


const add=function(...numbers)
{
    let sum=numbers.reduce((acc,curr)=>acc+curr,0)
    console.log(sum)
}
const x=[1,2,3]
add(...x)
add(2,3,4)
