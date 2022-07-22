'use strict';

///////////////////////////////////////
// Scoping in Practice
///////////////////////////////////////

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // // Reasssigning outer scope's variable
//       // output = 'NEW OUTPUT!';

//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//       // // Creating NEW variable with same name as outer scope's variable
//       // const output = 'NEW OUTPUT!';
//     }
//     console.log(millenial); // var is function scope so it's working
//     // console.log(add(2, 3)); // add is not defined here on strict mode
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Nanye';
// calcAge(1996);

///////////////////////////////////////
// Hoisting and TDZ in Practice
///////////////////////////////////////

// Variables
// console.log(me); // undefined
// console.log(job); // Cannot access 'job' before initialization
// console.log(year); // Cannot access 'year' before initialization

// var me = 'Nanye';
// let job = 'teacher';
// const year = 1996;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); //  Cannot access 'addExpr' before initialization
// console.log(addArrow); // undefined
// console.log(addArrow(2, 3)); //addArrow is not a function

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // donnot use var
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

///////////////////////////////////////
//'window' is  global object of JS in the browser
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// ///////////////////////////////////////
// // The this Keyword in Practice
// ///////////////////////////////////////

// console.log(this);

// const calcAge = function (birthYear) {
//   // console.log(2037 - birthYear);
//   console.log(this); //undefined
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   // console.log(2037 - birthYear);
//   console.log(this); //Window
// };
// calcAgeArrow(1980);

// const Nanye = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //input array Nanye
//     console.log(2037 - this.year);
//   },
// };
// // Nanye.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = Nanye.calcAge;
// matilda.calcAge();

// const ff = Nanye.calcAge();
// ff(); //ff is not a function
// console.log(ff); //undefined

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
///////////////////////////////////////

// const Nanye = {
//   firstName: 'Nanye',
//   year: 1996,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

// Solution 1
// const self = this; // self or that
// const isMillenial = function () {
//   console.log(self); //window
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// Solution 2
// const isMillenial = () => {
//   console.log(this);
//   console.log(this.year >= 1981 && this.year <= 1996);
// };
// isMillenial();
// },
// greet: () => {
//   console.log(this); //window
//   console.log(`Hey ${this.firstName}`); //Hey undefined in arrow function
// },
// };
// Nanye.greet();
// Nanye.calcAge();

///////////////////////////////////////
// // arguments keyword
///////////////////////////////////////

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);//arguments is not defined, argument only in regular function

// ///////////////////////////////////////
// // Objects vs. primitives
// ///////////////////////////////////////

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Nz',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me); //age also be changed!!!

// ///////////////////////////////////////
// // Primitives vs. Objects in Practice
// ///////////////////////////////////////

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// marriedJessica = {};//Assignment to constant variable.

// // Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //
jessicaCopy.lastName = 'Davis';

// jessica2.family.push('Mary');//push to both array
// jessicaCopy.family.push('John');//also push to both array

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
