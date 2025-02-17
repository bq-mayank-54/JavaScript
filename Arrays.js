//Arrays Practice
// let marks = [97, 82, 44 ,56];
// console.log(marks);
// console.log(marks.length); 

// let heroes = ["Iron Man", "Shakti Man", "Spider Man", "Thor"];

//for loop
// for(let i = 0; i < heroes.length; i++)
// {
//     console.log(heroes[i]);
// }

//for of loop
// for(let hero of heroes)
// {
//     console.log(hero);
// }

//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for(let mark of marks)
// {
//     sum += mark
// }

// let averageMark = sum/marks.length;
// console.log(`Average marks of the class is ${averageMark}`);

//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let prices = [250, 645, 300, 900, 50];

// for(let i=0; i<prices.length; i++)
// {
//     let offer = prices[i]/10;
//     prices[i] -= offer;
// }

// console.log(prices);


// let foodItems = ["Apple", "Mango", "Litchi", "Tomato"];

// // foodItems.push("tomato", "potato");
// // // foodItems.push("Cold drink", "Paties");

// console.log(foodItems);

// // let deleted = foodItems.pop();
// // console.log(foodItems);
// // console.log("deleted", deleted);

// console.log(foodItems.toString());

//Concat Method in Array
// let marvelHeroes = ["ironMan", "spiderMan", "antMan"];
// let dcHeroes = ["superMan", "batMan"];

// let heroes = marvelHeroes.concat(dcHeroes);
// // console.log(heroes);

// // marvelHeroes.unshift("Mayank");
// // console.log(marvelHeroes);

// // marvelHeroes.shift();
// // console.log(marvelHeroes);

// console.log(heroes.slice(1));

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.splice(2, 2, 20, 30);

// console.log(arr);

/* Let's Practice
Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);