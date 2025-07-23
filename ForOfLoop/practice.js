
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu=[...restaurant.mainMenu,...restaurant.starterMenu]

// looping over the menu array

for(const dish of menu)
{
    console.log(dish);
    
}
for(const dish of menu.entries())
{
    console.log(dish[0],dish[1]);
}
// }
// var x=[...menu.entries()]
// console.log(x[0]);



//using destructuring operator
for(const [i,e] of menu.entries())
{
    console.log(i,e);
    
}