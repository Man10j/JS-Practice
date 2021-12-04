// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* ----------- To get xth max value ----------- */
// const x = [12, 2, 3, 10, 5, 120, 30, 40, 450, 33];

// console.log(getmaxof(4, x));

// function getmaxof(largest, arr) {
//   if (largest <= arr.length && largest !== 0) {
//     for (let i = 0; i < largest - 1; i++) {
//       let max = Math.max.apply(null, arr);
//       arr.splice(arr.indexOf(max), 1);
//     }
//     return Math.max.apply(null, arr);
//   } else if (largest === 0) {
//     console.log("0th max is invalid");
//   } else {
//     return console.log("array length is small");
//   }
// }

/* -----------end----------- */
// var result_obj;
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     printfunc(result);
//   });

// function printfunc(res) {
//   console.log(res);
// }

/* ----------- u103.Array destructuring ------ */

// destructuring

// pblm 1
// const [x, y, z] = arr;

// console.log(x, y, z);

// // pblm 2 swapping
// const arr_new = [10, 20];

// let [first, second] = arr_new;
// console.log(first, second);
// // swapping
// [second, first] = [first, second];
// console.log(first, second);

// // nested

// const nested = [2, 3, [5, 7]];
// const [nest1, , nest2] = nested;

// console.log(nest2);

// // desfault values

// const [p = 1, q = 1, r = 10] = [2, 5];
// console.log(p, q, r);

// function add(m = 1, n = 1, o = 1) {
//   return m + n + o;
// }
// console.log(add());

/* --- End array destructuring ---*/

/* ---Object destructuring ---*/

// const obj = {
//   Fname: "manoj",
//   job: "web developer",
//   opening: {
//     thu: {
//       open: 12,
//       close: 12,
//     },
//     fri: {
//       open: 11,
//       close: 11,
//     },
//   },
// };

// // with same name
// const { Fname, job } = obj;
// console.log(Fname, job);

// // with diff name with default value

// const { Fname: frstname = [], job: currjob = [], age = [] } = obj;
// console.log(frstname, currjob, age);

// // mutating variables
// let m = 10;
// let n = 12;
// const newobj1 = { m: 100, n: 200 };
// // {m,n} =newobj1; => throws error
// ({ m, n } = newobj1);
// console.log(m, n);

// // nested objects

// const {
//   fri: { open: o, close: c },
// } = obj.opening;
// console.log(o, c);

// // in function parameter
// printobj(obj);
// function printobj({ Fname, job }) {
//   console.log(Fname, job);
// }

// // in function parameter with default value

// // default value will work if it couldn't find the values
// printobj1(obj);
// function printobj1(objval) {
//   // console.log(Fname, job, age);
//   objval.age = 20;
// }
// console.log(obj);

// const newobj = {
//   lname: "prabhakar",
// };
// newobj.lname = "manoj";
// console.log(newobj);

// const newarr = [2, 3, 4, 5];

// console.log(newarr.slice(2));
// console.log(newarr);

/* --- End Object destructuring ---*/

/* --U105 -Start of Spread operator ---*/

// const arr = [1, 2, 3];
// const newarr = [...arr, 4, 5];
// console.log(newarr);

// // copy array
// const mainmenu = [...newarr];
// console.log(mainmenu);

// // join array
// const newmenu = [...mainmenu, ...arr];
// console.log(newmenu);

// // string

// const str = "Manoj";
// const letters = [...str];
// console.log(letters);

// // function

// function add(a, b, c) {
//   return a + b + c;
// }

// const addval = [1, 2, 3];
// console.log(add(addval[0], addval[1], addval[2]));
// // using spread operator passing three arr values separately by comma
// console.log(add(...addval));

// const obj = {
//   name: "manoj",
//   age: "24",
// };

// const newobj = {
//   ...obj,
//   job: "web developer",
// };
// console.log(obj, newobj);
// newobj.name = "Prabhakar";
// console.log(obj, newobj);

/* ---End of Spread operator ---*/

/* ---U106 Start of Rest operator ---*/
// const arr = [1, 2, 3, 4, 5];
// const newarr = [6, 7, 8];
// const [a, b, ...others] = arr;
// // rest
// console.log(a, b, others);

// // rest and spread
// // rest must be the last element
// const [x, y, ...restof] = [...arr, ...newarr];
// console.log(x, y, restof);

// // destructuring obj using rest
// const obj = {
//   Fname: "manoj",
//   job: "web developer",
//   opening: {
//     fri: {
//       open: 11,
//       close: 11,
//     },
//     sat: {
//       open: 9,
//       close: 9,
//     },
//     sun: {
//       open: 10,
//       close: 10,
//     },
//   },
// };

// const { fri, ...weekend } = obj.opening;
// console.log(weekend);

// function funcaddrest(...num) {
//   let sum = 0;
//   console.log(num);
//   num.map((val) => {
//     sum += val;
//   });
//   return sum;
// }

// console.log(funcaddrest(1, 2, 3));
// console.log(funcaddrest(10, 25, 37, 77));
// // passing spread and get it as rest in func
// const addarr = [100, 200, 500, 600];
// console.log(funcaddrest(...addarr));

/* ---End of Rest operator ---*/

// coding challenge

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')

// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldplayer] = players1;
// console.log(gk);
// console.log(fieldplayer);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals = function (...players) {
//   console.log(`${players.length} scored`);
//   players.map((player) => {
//     console.log(player);
//   });
// };
// printGoals(...game.scored);
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// team1 > team2 && console.log("Team2 will win");
// team2 > team1 && console.log("Team1 will win");

// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich", ...game.scored);

/* ---U110 start of for-of loop ---*/

// ES6
// const arr = [1, 2, 3, 4, 5];

// for (const val of arr) console.log(val);

// // to get index
// for (const val of arr.entries()) {
//   console.log(val);
// }

/* ---End of for-of loop ---*/

/* ---U111 start of object literal  ---*/
// ES6

// const details = {
//   name: "xx",
//   age: "27",
// };

// const newobj = {
//   data: "collection of obj",
//   details,
// };
// console.log(newobj);

// // methods new syntax in ES6

// const add = {
//   newobj,
//   addval(x, y) {
//     console.log(x + y);
//   },
// };
// add.addval(1, 2);

// // obj property name
// const data = ["manoj", "xx", "yy"];
// const newobj1 = {
//   [data[0]]: {
//     Fname: "manoj",
//     Lname: "Prabhkar",
//   },
//   job: {
//     type: "web developer",
//   },
//   [`${1 + 1}-days`]: {
//     testval: "test val",
//   },
// };
// console.log(newobj1);
/* --- end of object literal  ---*/

/* ---U112 start of optional chaining  ---*/

// const details = {
//   name: "xx",
//   age: "27",
//   add(x, y) {
//     return x + y;
//   },
// };

// const newobj1 = {
//   propname: {
//     Fname: "manoj",
//     Lname: "Prabhkar",
//   },
//   job: {
//     type: "web developer",
//   },
//   [`${1 + 1}-days`]: {
//     testval: "test val",
//   },
// };
// const newobj = {
//   data: "collection of obj",
//   details,
// };

// console.log(newobj1.propname?.midname);

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// for (const day of weekdays) {
//   const openday = openingHours[day]?.open ?? "closed";
//   console.log(`we open on ${day} at ${openday}`);
// }
// // Method
// console.log(details.add?.(1, 2) ?? "method doesn't exist");
// console.log(details.sub?.(1, 2) ?? "method doesn't exist");

// // arrays

// let arr = [
//   {
//     name: "mj",
//     age: "24",
//   },
//   {
//     name: "prabhakar",
//     age: "24",
//   },
// ];
// console.log(arr[1]?.name ?? "user not found");
// console.log(arr[2]?.name ?? "not found");

/* --- End of optional chaining  ---*/

/* ---U113 start of Looping object  ---*/
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Property names

// const probnames = Object.keys(openingHours);
// console.log(probnames);

// // property values

// const probvalues = Object.values(openingHours);
// console.log(probvalues);

// // entries => prop names and values
// const entry = Object.entries(openingHours);
// console.log(entry);

// for (const [key, { open, close }] of entry) {
//   console.log(key, open, close);
// }
/* ---U113 end of Looping object  ---*/

// coding challenge

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// console.log(game.scored);

// for (const [goal, playername] of game.scored.entries()) {
//   console.log(`Goal ${goal} : ${playername}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let avg = 0;
// let odds = Object.values(game.odds);
// for (const x of odds) avg += x;
// avg /= odds.length;
// console.log(avg);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// for (const [team, oddval] of Object.entries(game.odds)) {
//   let teamstr = team === "x" ? "draw" : game[team];
//   console.log(`Odds of ${teamstr} : ${oddval}`);
// }

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }

/* end of coding challenge*/

/* u115. starting of Sets */
// const fruits = new Set([
//   "mango",
//   "orange",
//   "mango",
//   "banana",
//   "apple",
//   "apple",
// ]);

// console.log(fruits.size);
// console.log(fruits.has("mango"));
// fruits.add("berries");
// fruits.delete("mango");
// console.log(fruits);
// for (const fruitname of fruits) {
//   console.log(fruitname);
// }

// // to get rid of dublicate values from array using set and spread operator
// let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 6, 7, 8];
// arr = [...new Set(arr)];
// console.log(arr);
// // to clear
// // // fruits.clear();
// // console.log(fruits);

/* end of of Sets */

/* u116. starting of Maps */

// const mapval = new Map();
// mapval.set("name", "manoj");
// mapval.set("age", 24);
// console.log(mapval);
// console.log(mapval.set(1, "chennai"));

// mapval
//   .set(2, "Thiruthangal")
//   .set("job", "web dev")
//   .set(true, "yes")
//   .set(false, "no");
// console.log(mapval);

// console.log(mapval.get(true));
// console.log(mapval.get("job"));
// console.log(mapval.has("name"));
// mapval.delete(1);
// console.log(mapval);
// console.log(mapval.size);
// let arr = [1, 2];
// console.log(mapval.set(arr, "test val"));
// console.log(mapval.get(arr));
// //  store obj in maps advanced func
// console.log(mapval.set(document.querySelector("h1"), "Heading"));

// // converting obj into maps
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const gamemap = new Map(Object.entries(game));
// console.log(gamemap);

// // real time ex

// const quest = new Map([
//   ["question", "what is ur name"],
//   [1, "manoj"],
//   [2, "prabhakar"],
//   ["correct", 1],
//   [true, "correct answer"],
//   [false, "wrong answer"],
// ]);
// console.log(quest);

// console.log(quest.get("question"));
// for (const [key, value] of quest) {
//   if (typeof key == "number") console.log(`Answer ${key} : ${value}`);
// }
// // // const ans = Number(prompt("enter ur answer"));
// // console.log(quest.get(ans === quest.get("correct")));
// // convert map to array
// const arrval = [...quest];
// console.log(arrval);
/* Ending of Maps */

/*
Coding challenge 3
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).



GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
// // 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// console.log(gameEvents.delete(64));
// console.log(gameEvents);
// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL

/* U120 Strings */
/* U121 Strings */
/* U122 Strings */
// const user = "Manoj Prabhakar";
// console.log(user[2]);
// console.log(user.slice(3));
// console.log(user.indexOf("a"));
// console.log(user.lastIndexOf("a"));
// console.log(user.slice(2, 9));
// console.log(user.length);
// console.log(user.slice(0, user.indexOf(" ")));
// console.log(user.slice(user.lastIndexOf(" ") + 1));
// console.log(user.slice(-2));
// console.log(user.toLowerCase());
// console.log(user.toUpperCase());

// const newuser = "bRUce";
// // req result Bruce
// const newuser_low = newuser.toLowerCase();
// const newuser_crct = newuser_low[0].toUpperCase() + newuser_low.slice(1);
// console.log(newuser_crct);

// const user_email = "  mnj@gmail.com \n";
// console.log(user_email.trim());

// const price = "100,234#";
// const crct_price = price.replace(",", ".").replace("#", "$");
// console.log(crct_price);

// const msg = "yes yes yes no";
// // to change all to no
// // this will change only the first occurance
// console.log(msg.replace("yes", "no"));

// //  Regular expression
// console.log(msg.replace(/yes/g, "no"));

// // Booleans
// const empname = "Manoj Prabhakar";
// // Case sensitive
// console.log(empname.includes("Man"));
// console.log(empname.startsWith("Prab"));
// console.log(empname.startsWith("Man"));
// console.log(empname.endsWith("oj"));
// console.log(empname.endsWith("ar"));

// // split
// console.log(empname.split(" "));
// const [Fname, Lname] = empname.split(" ");
// console.log(`First name ${Fname} , Last name ${Lname}`);

// //join
// const newempname = ["Mr.", Fname, Lname.toUpperCase()].join("");
// console.log(newempname);

// // Capitalize evry word first letterna

// const capitalize = function (str) {
//   const str_split = str.split(" ");
//   const res_str = [];
//   for (const n of str_split) {
//     // res_str.push(n[0].toUpperCase() + n.slice(1));
//     // another way
//     res_str.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   const result = res_str.join(" ");
//   console.log(result);
// };

// capitalize("yes no welocme home dec");
// capitalize("manoj prabhakar ram janani peter max");

// // padstrt and padend
// const str1 = "manoj";
// console.log(str1.padStart("30", "-"));
// console.log(str1.padStart("20", "-").padEnd("30", "-"));

// const maskcrdtcard = function (number) {
//   const str = String(number);
//   const masked = str.slice(-4).padStart(str.length, "*");
//   console.log(masked);
// };

// maskcrdtcard(5103456099876667);
// maskcrdtcard("63726376763764774774765655");
// // Repeat
// const wrngmsg = "just do it";
// console.log(wrngmsg.repeat(10));

/* End of Strings */

// Coding challenge #4
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   console.log(rows.entries());
//   for (const [i, str] of rows.entries()) {
//     const [first, second] = str.toLowerCase().trim().split("_");
//     const outputstr = `${first}${second[0].toUpperCase() + second.slice(1)}`;
//     const emot = "✅";
//     console.log(`${outputstr.padEnd(20, " ")} ${emot.repeat(i + 1)}`);
//   }
// });

// const emot = "*";
// for (let i = 1; i <= 5; i++) {
//   console.log(emot.repeat(i).padStart(4, "1").padEnd(4, "2"));
// }

/* U132 call,apply */

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
// };

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// };
// // To manually manipulate this keyword
// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, "Sarah Williams");
// book.call(lufthansa, 239, "Mary Cooper");
// book.call(lufthansa, 777, "Manoj");
// book.call(eurowings, 777, "Manoj");

// console.log(lufthansa);

// const user = [121, "manoj"];
// // Apply method
// // arguments are in array
// book.apply(eurowings, user);
// console.log(eurowings);

// // Above call methods are not in practice in modern js sice we have a better solution
// // using spread operator
// book.call(lufthansa, ...user);
// console.log(lufthansa);

/* End of call and apply */

/* U132 Bind */
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;
// book.call(eurowings, 121, "manoj");
// console.log(eurowings);

// // bind

// const bookew = book.bind(eurowings);
// bookew(101, "prabhakar");
// console.log(eurowings);
// // passing argument while bind
// const bookew100 = book.bind(eurowings, 100);
// bookew100("siva");
// console.log(eurowings);

// const bookew109siva = book.bind(eurowings, 109, "siva");
// bookew109siva();
// console.log(eurowings);

// const user = {
//   fname: "manoj",
//   age: 24,
// };
// user.incage = function () {
//   this.age++;
//   console.log(this.age);
//   console.log(this);
// };

// // This won't work
// // document.body.addEventListener("click", user.incage);
// document.body.addEventListener("click", user.incage.bind(user));

/* End of Bind */

/* U135 Immediately invoked function expression (IIFE) */
// IIFE
// (function () {
//   console.log("this will run only once");
// })();

// // using arrow function
// (() => {
//   console.log("this will run only once");
// })();
// // this used for data encapsulation/data privacy but in modern js we use

// {
//   const pvtdata = "manoj";
//   var pvt = "manoj";
// }

// console.log(pvt); //this is not pvt since var
// console.log(pvtdata); // will work as private

/* end of IIFE */

/* U136 Closures */

/* end of Closures */

/* U141 Array methods */

// const arr = ["a", "b", "c", "d", "e"];
// // slice
// console.log(arr.slice(2));
// console.log(arr.slice(1, 4));
// // last element using slice
// console.log(arr.slice(-1));
// // shallowcopy
// console.log(arr.slice());

// // Splice
// // changes will affect in element
// let newarr = ["a", "b", "c", "d", "e", "f"];
// console.log(newarr.splice(3));
// console.log(newarr);

// // common use case of splice is to remove elmt

// console.log(newarr.splice(-1));
// console.log(newarr);
// // To delete with specific count
// let newarr1 = ["a", "b", "c", "d", "e", "f"];
// console.log(newarr1.splice(2, 3));
// console.log(newarr1);

// // Reverse
// const rvrarr = ["a", "b", "c", "d", "e", "f"];
// console.log(rvrarr.reverse());
// // changes will reflect
// console.log(rvrarr);

// // concat
// const ar1 = ["1", "2"];
// const ar2 = ["3", "4"];
// const ar3 = ar2.concat(ar1);
// console.log(ar3);
// // another way using spread operator
// const ar4 = [...ar2, ...ar1];
// console.log(ar4);

// // join
// const str = ar3.join("");
// console.log(str);
// const str1 = ar3.join("-");
// console.log(str1);

// const strval = "abc";
// const arrstr = [...strval];
// console.log(arrstr);

/* end of Array methods */

/* U142 Looping Array */
// const arr = [100, 200, 300, 500];
// arr.forEach((val) => {
//   console.log(val);
// });
// // cuurentval,currindex,entirearray
// arr.forEach((val, index, array) => {
//   console.log(val, index, array);
// });
// continue and break won't work in foreach like in for
/* end of Looping Array */

/* U143 Foreach in maps and sets */
// map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
// currencies.set("key", "2");
// console.log(currencies);

// currencies.forEach(function (val, index, mapval) {
//   console.log(val, index, mapval);
// });

// // set
// const currset = new Set(["usd", "eur", "gbp", "usd"]);
// console.log(currset);
// // set doesnt have index or second parmeter in foreach
// // val , index[won't work],setval
// currset.forEach(function (val, index, setval) {
//   console.log(val, index, setval);
// });
/* end of map and sets */

// Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀

// const checkdog = function (jul, kate) {
//   const newjul = [...jul.slice(1, 4)];
//   console.log(newjul);
//   const botharr = newjul.concat(kate);
//   console.log(botharr);
//   botharr.forEach((age, i) => {
//     const result =
//       age >= 3
//         ? `Dog number ${i + 1} is an adult and is ${age} yeard old`
//         : `Dog number ${i + 1} is still a puppy 🐶`;
//     console.log(result);
//   });
// };

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// checkdog(julia, kate);
// checkdog([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/* U148 maps */
// const arr = [1, 2, 3, 4, 5];

// const newarr = arr.map((val, i, arrs) => {
//   console.log(arrs);
//   console.log(i);
//   return val + 1;
// });
// console.log(newarr);
/* End of maps */

/* U150 Filter */
// const arr = [1, 2, 3, 4, 5];

// const newarr = arr.filter((val) => {
//   return val > 2;
// });
// console.log(newarr);
/* End of Filter */

/* U151 Reduce */
// const arr = [1, 2, 3, 4, 5];
// // returns one value not array
// // accumuling,val,index,array
// const newval = arr.reduce(function (acc, val) {
//   return acc + val;
// }, 0);
// // 0 is initial value of accumulator
// console.log(newval);

// // max num
// const max = arr.reduce((acc, val) => (acc > val ? acc : val), arr[0]);
// console.log(max);

/* End of Reduce */

// Coding challenge 2

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = (arr) => {
//   const dogageinhum = arr.map((arrval) => {
//     return arrval <= 2 ? 2 * arrval : 16 + arrval * 4;
//   });
//   console.log(dogageinhum);
//   const adultdog = dogageinhum.filter((val) => val >= 18);
//   console.log(adultdog);
//   const avg = adultdog.reduce((acc, val) => acc + val, 0) / adultdog.length;
//   console.log(avg);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Coding challenge 3
// use chain method for coding challenge 3
// const calcAverageHumanAge = (arr) =>
//   arr
//     .map((arrval) => {
//       return arrval <= 2 ? 2 * arrval : 16 + arrval * 4;
//     })
//     .filter((val) => val >= 18)
//     .reduce((acc, val, i, arr) => acc + val / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/* U151 Find */
// const arr = [1, 2, -3, 4, 5];
// const newval = arr.find((val) => val < 0);
// console.log(newval);

// // Find in array of obj

// const users = [
//   {
//     fname: "manoj",
//     age: 24,
//   },
//   {
//     fname: "ravi",
//     age: 23,
//   },
//   {
//     fname: "kumar",
//     age: 26,
//   },
// ];

// const mnj = users.find((user) => user.fname === "manoj");
// console.log(mnj);
// const age25 = users.find((user) => user.age > 25);
// console.log(age25);

/* End Find */

/* U160 FindIndex */

// const users = [
//   {
//     fname: "manoj",
//     age: 24,
//   },
//   {
//     fname: "ravi",
//     age: 23,
//   },
//   {
//     fname: "kumar",
//     age: 26,
//   },
// ];

// const mnj = users.findIndex((user) => user.fname === "manoj");
// console.log(mnj);
// const age25 = users.findIndex((user) => user.age > 25);
// console.log(age25);

/* End FindIndex */

/* U161 Some and every */
// const arr = [1, 2, 3, 4, 5];
// // some
// // to check some condition and returns boolean value
// // some checks if anyone of the val passes the condition
// console.log(arr.some((val) => val > 4));

// // every
// // every checks if all of the val passes the condition
// console.log(arr.every((val) => val > 4));
// console.log(arr.filter((val) => val > 4));
/* End Some and every */

/* U162 Flat and Flatmap */
// ES2019
// to convert nested array [in level1] into flat array
// const arr = [[1, 2, 4], 10, 100, [200, 300]];
// console.log(arr.flat());

// // to flat deep nested array
// const newarr = [[1, [2, 3], 4], 5, 6, [7, 8, [9, 10]]];
// // flat(arg) arg represents the level deep the array needs to flatten
// console.log(newarr.flat(2));

// // Flatmap is combination of map and flat which contains callback func so that we can perform some action but it has depth 1 only
// console.log(arr.flatMap((val) => val));

// const mularrandjoin = [1, 2, 3, 4];
// console.log(mularrandjoin.flatMap((x) => [x, x * 2]));
// // is equivalent to
// console.log(mularrandjoin.reduce((acc, x) => acc.concat([x, x * 2]), []));
// [1, 2, 2, 4, 3, 6, 4, 8]

/* End Flat and Flatmap */

/* U163 Sorting arrays */
// const fname = ["manoj", "adam", "spiderman", "batman", "wolverine"];
// // to sort alphabetically
// console.log(fname.sort());

// // sort by first val in number
// let arr = [-2, -6, -100, 4, 5, 100, 300, 0];
// console.log(arr.sort());
// console.log(arr);
// // to sort the same array in ascending order

// // mutate the array
// arr = [2, 6, 3, 1];
// arr.sort((a, b) => {
//   // if (a > b) return 1;
//   // else if (b > a) return -1;
//   // instead we can write this
//   return a - b;
// });
// console.log(arr);
/* End  Sorting arrays */

/* U164 filling or creating arrays */
// let arr = new Array(7);
// console.log(arr);
// arr.fill(1);
// console.log(arr);
// // args = val to fill, strt, end
// arr.fill(2, 1, 4);
// console.log(arr);

// // Array.some

// const x = Array.from({ length: 8 }, () => 1);
// console.log(x);

// // args = from (length, callbackfunc like map)
// // callback args = currentelement, index
// const y = Array.from({ length: 7 }, (cur, i) => {
//   console.log(cur, i);
//   return i + 1;
// });
// console.log(y);
// // instead
// // used underscore for unused argument
// const z = Array.from({ length: 3 }, (_, i) => i + 1);
// console.log(z);
/* Emd of Fill arrays */

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).


HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach((dog) => {
//   dog.recommendedFood = Math.round(Number(dog.weight) ** 0.75 * 28);
// });
// console.log(dogs);

// const sarahsdog = dogs.find((dog) => dog.owners.includes("Sarah"));

// if (
//   sarahsdog.curFood > sarahsdog.recommendedFood * 0.9 &&
//   sarahsdog.curFood < sarahsdog.recommendedFood * 1.1
// ) {
//   console.log("Sarah's dog eats healthy");
// } else if (sarahsdog.curFood > sarahsdog.recommendedFood * 1.1) {
//   console.log("Sarah's dog too much food");
// } else {
//   console.log("Sarah's dog eats too little");
// }

// // 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recommendedFood)
//   .flatMap((dog) => dog.owners)
//   .flat();
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recommendedFood)
//   .flatMap((dog) => dog.owners)
//   .flat();
// console.log(ownersEatTooLittle);

// // 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// // 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

// console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// // 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// // 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// const checkeat = (dog, index, arr) => {
//   return (
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1
//   );
// };
// console.log(dogs.some(checkeat));
// console.log(dogs.filter(checkeat));

// // 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// const sorteddog = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(sorteddog);

// End of coding challenge 4

/* U170 Converting and checking numbers */

// Js error
// console.log(0.1 + 0.2 === 0.3);

// // Conversion
// console.log(Number("23"));
// // or
// console.log(+"23");

// // parsing
// // 10 represents base10
// console.log(Number.parseInt("23px", 10));
// console.log(Number.parseInt("e23", 10));
// // base 2 would return NaN
// console.log(Number.parseInt("23px", 2));
// console.log(Number.parseFloat("100.5px", 10));

// console.log(Number.isNaN("23px"));
// console.log(Number.isNaN(+"23px"));

// // best way to check finite number or if it is a number
// console.log(Number.isFinite(23));
// console.log(Number.isFinite("23"));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.9));

// // square root
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// // Cube root
// console.log(25 ** (1 / 3));

// // Max
// console.log(Math.max(1, 2, 5, 6, 7));
// console.log(Math.max(1, 2, 5, 6, "7"));
// // Min
// console.log(Math.min(1, 2, 5, 6, "7"));
// // PI
// console.log(Math.PI);
// // random
// // to display between 1 to 7
// console.log(Math.trunc(Math.random() * 7) + 1);

// console.log(Math.round(23.555));
// console.log(Math.ceil(23.555));
// console.log(Math.floor("23.555"));

// // to fixed
// // returns string
// console.log((24.5).toFixed(0));
// console.log(Number((24.5).toFixed(0)));
// console.log((24.5).toFixed(3));
// console.log(Number((24.545).toFixed(2)));

/* End of Converting and checking numbers */

/* U172 Remainder operator */
// console.log(10 % 3);
/* End of Remainder operator */

/* U173 Numeric separator */
// const num = 1_23_445_667;
// console.log(num);
/* end of Remainder operator */

/* U174 BigInt */
// ES2020
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 - 1);
// console.log(6676742734987328473893274893748739);
// // to resolve this
// // bigint
// // by adding n at end
// console.log(6676742734987328473893274893748739n);
// // or
// console.log(BigInt(6676742734987328473893274893748739));

// const huge = 54544646445151n;
// const newnum = 23;
// // console.log(huge*newnum) will throw error
// // to resolve
// console.log(huge * BigInt(newnum));

/* end of BigInt */

/* U175 Date */
// const now = new Date();
// console.log(now);
// const future = new Date(2027, 0, 27);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());

// //
// console.log(future.toISOString());
// console.log(Date.now());
/* End of  Dates */

/* U178 internationalizing date */
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   // month: "2-digit",
//   month: "long",
//   // month: "numeric",
//   year: "numeric",
// };
// console.log(new Intl.DateTimeFormat("en-us", options).format(new Date()));
// console.log(
//   new Intl.DateTimeFormat(navigator.language, options).format(new Date())
// );
// console.log(
//   navigator.language,
//   navigator.languages,
//   navigator.geolocation,
//   navigator.permissions,
//   navigator.cookieEnabled
// );
// console.log(
//   navigator.geolocation.getCurrentPosition(success, error, options_geo)
// );
// var options_geo = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   console.log(pos);
//   var crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

/* End of  internationalizing date */

/* U179 internationalizing Numbers */
// console.log(new Intl.NumberFormat(navigator.language).format("2176473647"));

// const option_num = {
//   // style: "unit",
//   // unit: "celsius",
//   style: "unit",
//   unit: "kilometer-per-hour",
//   // style: "currency",
//   // currency: "Eur",
//   useGrouping: false,
// };
// console.log(
//   new Intl.NumberFormat(navigator.language, option_num).format("100")
// );

/* End of  internationalizing Numbers */

/* U180 Timers */
// console.log("wait fo 3s....");
// setTimeout(() => {
//   console.log("after 3s it got executed");
// }, 3000);

// // passing agmnts

// const arr = [1, 2, 100];
// const timer = setTimeout(
//   (num1, num2, num3) => {
//     console.log(`array contains ${num1} ${num2} ${num3}`);
//   },
//   3000,
//   ...arr
// );

// // cancel timer
// const arr2 = [1, 2, 200];

// const timer2 = setTimeout(
//   (num1, num2, num3) => {
//     console.log(`array contains ${num1} ${num2} ${num3}`);
//   },
//   3000,
//   ...arr2
// );

// if (arr2.includes(200)) {
//   console.log("clearing");
//   clearTimeout(timer2);
// }

// // Setinterval

// setInterval(() => {
//   console.log(new Date());
// }, 1000);
/* End of Timers */

/* U184 DOM and Events */
// console.log(document.querySelector("h1").textContent);
// document.querySelector("h1").textContent = "Dom element changes";
/* End of DOM and Events */

// Section 13
/* U208 Constructor function and new operatorr */
// arrow func wont work in constructor func since we need 'this' keyword

// const Person = function (firstname, birthyear) {
//   this.firstname = firstname;
//   this.birthyear = birthyear;
// };
// // manoj is instance of Person
// const manoj = new Person("manoj", "1997");
// const jack = new Person("jack", "1977");

// console.log(manoj);
// console.log(manoj instanceof Person); // returns true

// // Protoype
// // func can access by every instance
// Person.prototype.calcage = function () {
//   console.log(2021 - this.birthyear);
// };
// manoj.calcage();
// jack.calcage();
// console.log(manoj.__proto__);
// console.log(manoj.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(manoj));

// Person.prototype.species = "Human";
// console.log(manoj.species, jack.species);

// console.log(manoj.hasOwnProperty("firstname"));
// console.log(manoj.hasOwnProperty("species")); // returns false

/* End of Constructor function and new operatorr */

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelarate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 10;
//   console.log(`'${this.make}' going at ${this.speed}km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelarate();
// mercedes.brake();

// end of coding challenge 1

/* U213 ES6 classes */
// OOP using es6 class
// class Person {
//   constructor(fname, birthyear) {
//     this.fname = fname;
//     this.birthyear = birthyear;
//   }
//   calcage() {
//     console.log(2021 - this.birthyear);
//   }
// }
// const manoj = new Person("manoj", 1997);
// manoj.calcage();
// console.log(manoj);
// console.log(manoj.__proto__);
/* End of ES6 classes*/

/* U214 Getter and setters of obj in js */

// getter and setter in obj with keyword get and set.
// set should have exactly one arg

// const obj = {
//   fname: "manoj",
//   birthyear: 1997,
//   mov: [100, 200, 300],
//   get age() {
//     return 2021 - this.birthyear;
//   },
//   set latest(val) {
//     this.mov.push(val);
//   },
// };
// console.log(obj);
// // no need to call getter like function
// console.log(obj.age);
// // no need to pass arg to setter like func, simply do like obj
// obj.latest = 400;
// console.log(obj);

// class Person {
//   constructor(fname, year) {
//     this.fname = fname;
//     this.year = year;
//   }
//   set fname(name) {
//     // changing fname to _fname to avoid error
//     if (name.includes(" ")) this._fname = name;
//     else {
//       console.log(`${name} is not a fullname`);
//     }
//   }

//   static hey() {
//     console.log("hey");
//   }
// }
// const manoj = new Person("manoj prabhakar", 1997);
// console.log(manoj);
// const heisenberg = new Person("heisenberg", 1967);
// console.log(heisenberg); //only has year since name is not a full name

/* End of Getter and setters of obj in js */

/* U215 static methods */

// class Person {
//   constructor(fname, year) {
//     this.fname = fname;
//     this.year = year;
//   }
//   set fname(name) {
//     // changing fname to _fname to avoid error
//     if (name.includes(" ")) this._fname = name;
//     else {
//       console.log(`${name} is not a fullname`);
//     }
//   }

//   static hey() {
//     console.log("hey");
//   }
// }
// const manoj = new Person("manoj prabhakar", 1997);
// console.log(manoj);
// Person.hey();
// // manoj.hey(); it throws error since hey is static and only accessible with constructor

/* End of static methods */

/* U216 Object create */
// const Person = {
//   init(fname, birthyear) {
//     this.fname = fname;
//     this.birthyear = birthyear;
//   },
//   calcage() {
//     console.log(2021 - this.birthyear);
//   },
// };
// const manoj = Object.create(Person);
// manoj.init("manoj", 1997);
// manoj.calcage();
// console.log(manoj);
/* End Object create */

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelarate() {
//     this.speed += 10;
//     console.log(`'${this.make}' going at ${this.speed}km/h`);
//   }
//   brake() {
//     this.speed -= 10;
//     console.log(`'${this.make}' going at ${this.speed}km/h`);
//   }
//   get speedUS() {
//     return `${this.speed / 1.6}mi/h`;
//   }
//   set speedUS(newspeed) {
//     this.speed = newspeed * 1.6;
//   }
// }

// const Ford = new Car("Ford", 120);
// console.log(Ford);
// Ford.accelarate();
// console.log(Ford.speedUS);
// Ford.speedUS = 100;
// console.log(Ford);

//End of Coding Challenge #2

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelarte() {
    this.speed += 10;
    return this;
  }
}
class Ev extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  chargeev() {
    this.charge += 10;
  }
}

const tesla = new Ev("tesla", 200, 100);
console.log(tesla);
tesla.accelarte();
tesla.chargeev();
console.log(tesla);
