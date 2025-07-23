const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[0]]: { open: '11 AM', close: '10 PM' },
  [weekdays[1]]: { open: '9 AM', close: '9 PM' },
  [weekdays[2]]: { open: '10 AM', close: '8 PM' },
  [weekdays[3]]: { open: '12 PM', close: '10 PM' },
//   [weekdays[4]]: { open: '11 AM', close: '11 PM' },
  [weekdays[5]]: { open: 0, close: '12 AM' },
  [weekdays[6]]: { open: 'Closed', close: 'Closed' }
}
const restaurant = {

  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  sayHello:function()
  {
    return ('Restaurant says Hi') // directly adding functions to object literals
  }
};


console.log(restaurant.openingHours) // embedding one object into another directly
restaurant.sayHello()


//optional chaining operator

if(restaurant.openingHours  && restaurant.openingHours.mon)
{
    console.log(restaurant.openingHours.mon)
}

// if certain property not exists undefined is returned uisng optional chaining ->(?.)

console.log(restaurant.openingHours?.mon?.opened);

for( const day of weekdays)
{
    console.log(restaurant.openingHours?.[day] ?? 'Closed') 
}

//method exists or not checking

console.log(restaurant.sayHello?.() ?? 'Method not exists');

// looping over objects ->not iterables

// for(const day of Object.keys(openingHours))
// {
//     console.log(day);
    
// }
// for(const day of Object.values(openingHours))
// {
//     console.log(day.open);
    
// }

var myObj
for(const day of Object.entries(openingHours))
{
    [...myObj]=[...day]
    break
}
console.log(myObj);
