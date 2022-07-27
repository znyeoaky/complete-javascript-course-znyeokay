'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery({ starterIndex = 0, mainIndex = 0, time = '24:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// destructuring array []
///////////////////////////////////////
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// //swap this two variable position
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //receive 2 return values from a function
// const [starter, mainOrder] = restaurant.order(2, 0);
// console.log(starter, mainOrder);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j); // result is [5,6]
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // result is 2 5 6, So destructuring works.

// //set default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

///////////////////////////////////////
// destructuring object {}
///////////////////////////////////////
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(name, categories, openingHours);

// default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); //{ a, b } = obj; this format is wrong they need a ().
// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

///////////////////////////////////////
// the spread operator ...
///////////////////////////////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`); //NOT objects

// // Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

///////////////////////////////////////
// Rest Pattern and Parameters
/////////////////////////////////////////
// (1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions // rest use for variable names
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); //spread use for values

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

///////////////////////////////////////
// Short Circuiting (&& and ||)
///////////////////////////////////////
// console.log('---- OR ----');
// // Use ANY data type, return ANY data type, do short-circuiting
// console.log(3 || 'Jonas'); //1st value is True then return 1st value
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);//Hello

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// //1st value is False then return 1st value, otherwise return last value
// console.log(0 && 'Jonas');//0
// console.log(7 && 'Jonas');//Jonas
// console.log('Hello' && 23 && null && 'jonas');//null

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

///////////////////////////////////////
// The Nullish Coalescing Operator
/////////////////////////////////////////

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); //10

// // Nullish: null and undefined (NOT include 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); //0

///////////////////////////////////////
// Logical Assignment Operators
///////////////////////////////////////

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// // rest1.owner &&= '<ANONYMOUS>';
// // rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////
// Coding Challenge #1
///////////////////////////////////////

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

// const game = {
//   players: [
//     [
//       'Lkjsh',
//       'Dsa',
//       'Edadf',
//       'Yio',
//       'Padsf',
//       'Sewa',
//       'Adfv',
//       'Agth',
//       'Poi',
//       'Bfg',
//       'Lio',
//     ],
//     [
//       'Ysafs',
//       'Asdf',
//       'Qvv',
//       'Vddf',
//       'Ngg',
//       'Mipo',
//       'Nsn',
//       'Rtr',
//       'Wgf',
//       'Copi',
//       'Iva',
//     ],
//   ],
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
//   date: 'Jul 20th, 2044',
// };
// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); //put names as array in the game.scored object
// printGoals(...game.scored);

// //7.
// game.odds.team1 < game.odds.team2 &&
//   console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');//? Uncaught ReferenceError: team1 is not defined

///////////////////////////////////////
//The for-of Loop
///////////////////////////////////////
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log([...menu.entries()]);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

///////////////////////////////////////
//
///////////////////////////////////////
