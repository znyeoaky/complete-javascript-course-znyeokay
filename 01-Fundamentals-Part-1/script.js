// let js = 'amazing';
// console.log(40 + 9 + 9 - 10);

// let firstname = "znyeokay";

// console.log(firstname);
// console.log(23);

////////////////////////////////////
// Coding Challenge #1
////////////////////////////////////

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// const markWeights = 78;
// const markHeights = 1.69;
// const johnWeights = 92;
// const johnHeights = 1.95;

// const markWeights = 95;
// const markHeights = 1.88;
// const johnWeights = 85;
// const johnHeights = 1.76;

// const markBMI = markWeights / markHeights ** 2;
// const johnBMI = johnWeights / johnHeights ** 2;
// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
////////////////////////////////////
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
////////////////////////////////////
// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);


////////////////////////////////////
// Coding Challenge #2
////////////////////////////////////

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉
*/

// const markWeights = 78;
// const markHeights = 1.69;
// const johnWeights = 92;
// const johnHeights = 1.95;

// const markWeights = 95;
// const markHeights = 1.88;
// const johnWeights = 85;
// const johnHeights = 1.76;

// const markBMI = markWeights / markHeights ** 2;
// const johnBMI = johnWeights / johnHeights ** 2;
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

////////////////////////////////////
// Type Conversion and Coercion
////////////////////////////////////

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion!!
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n); // 10

////////////////////////////////////
// Truthy and Falsy Values
////////////////////////////////////

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   console.log('You should get a job!');
// }

// // let height = 0; //define but false in if
// let height = 10;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

////////////////////////////////////
// Equality Operators: == vs. ===
////////////////////////////////////

// const age = '18';
// if (age === '18') console.log('You just became an adult :D (strict)');
// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// const favourite = 10;
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
//Boolean Logical Operators
////////////////////////////////////

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


////////////////////////////////////
// Coding Challenge #3
////////////////////////////////////

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
///////// test ///////////
// const averageDolphinsScore = (96 + 108 + 89) / 3;
// const averageKoalasScore = (88 + 91 + 110) / 3;
// if (averageDolphinsScore > averageKoalasScore) {
//   console.log(`Dolphins Win! Score is (${averageDolphinsScore}) higher than (${averageKoalasScore})`);
// } else if (averageDolphinsScore < averageKoalasScore) {
//   console.log(`Koalas Win! Score is (${averageKoalasScore}) higher than (${averageDolphinsScore})`);
// } else if (averageDolphinsScore === averageKoalasScore) {
//   console.log("draw competition!" + averageDolphinsScore + " " + averageKoalasScore);
// }
///////// BONUS 1 ///////////
// const averageDolphinsScore = (97 + 112 + 101) / 3;
// const averageKoalasScore = (109 + 95 + 123) / 3;

// if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
//   console.log(`Dolphins Win! Score is (${averageDolphinsScore}) higher than (${averageKoalasScore})`);
// } else if (averageDolphinsScore < averageKoalasScore && averageKoalasScore >= 100) {
//   console.log(`Koalas Win! Score is (${averageKoalasScore}) higher than (${averageDolphinsScore})`);
// } else if ((averageDolphinsScore === averageKoalasScore) && averageDolphinsScore >= 100) {
//   console.log("draw competition!" + averageDolphinsScore + " " + averageKoalasScore);
// } else {
//   console.log("no winner" + averageDolphinsScore + " " + averageKoalasScore)
// }

///////// BONUS 2 ///////////
// const averageDolphinsScore = (97 + 112 + 101) / 3;
// const averageKoalasScore = (109 + 95 + 106) / 3;

// if (averageDolphinsScore > averageKoalasScore) {
//   console.log(`Dolphins Win! Score is (${averageDolphinsScore}) higher than (${averageKoalasScore})`);
// } else if (averageDolphinsScore < averageKoalasScore) {
//   console.log(`Koalas Win! Score is (${averageKoalasScore}) higher than (${averageDolphinsScore})`);
// } else if ((averageDolphinsScore === averageKoalasScore) && averageDolphinsScore >= 100) {
//   console.log("draw competition!" + averageDolphinsScore + " " + averageKoalasScore);
// } else {
//   console.log("no winner" + averageDolphinsScore + " " + averageKoalasScore)
// }

////////////////////////////////////
// The switch Statement
////////////////////////////////////
// const day = 'tuesday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

////////////////////////////////////
// Statements and Expressions
////////////////////////////////////

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
////////////////////////////////////
// const age = 3;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


////////////////////////////////////
// Coding Challenge #4
////////////////////////////////////

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(tip);
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);