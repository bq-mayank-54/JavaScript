// function myFunction(msg) { //parameter
//     // console.log("say hi to function in javascript");
//     // console.log("lets deep dive into functions");
//     console.log(msg);

// }

// myFunction("I love JS"); //argument

//Function -> 2 number, sum

// function sum(x, y)
// {
//     return x+y;
// }


//Arrow Function

// const arrowSum = (x,y) => {
//     console.log(x+y);
// };

// arrowSum(2, 3);
// // let ans = sum(5,4);
// // console .log(sum(2,3));

// //Multiplication arrow function
// const arrowMultiplication = (x,y) => {
//     console.log(x*y);
// }

// arrowMultiplication

/* Let's Practice
Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of 
vowels in the string.
Qs. Create an arrow function to perform the same task. */
// function countVowels(str)
// {
//     let count = 0;
//     for(let char of str)
//     {
//         if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
//         count++;
//     }
//     console.log(count);
// }

// const countVowels = (str) => {
//     let count = 0;
//     for(let char of str)
//     {
//         if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
//         count++;
//     }
//     console.log(count);
// }

// // countVowels("aaaaaaaaaaaaaaaaaaaaaaaa");
// countVowels("mayank aaaaa")

// let arr = ["pune", "delhi", "mumbai", "indore"];

// // arr.forEach(function printValue(val) {
// //     console.log(val);
// // })

// arr.forEach((value, idx, arr) => {
//     console.log(value.toUpperCase(), idx, arr);
// });

//Let's Practice
//Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let nums = [2, 4, 6, 8];

// let newArr = nums.map( (val) => {
//     return val * 2;
// });

// console.log(newArr);

// let calcSquare = (num) => {
//     console.log(num*num);
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let evenArr = arr.filter( (val) => {
//     return val%2 !== 0;
// }) 

// console.log(evenArr);

// let arr = [1, 2, 3, 4, 5];

// const output = arr.reduce((prev, curr) => {
//     // return res+curr;
//     return prev > curr ? prev : curr;
// });

// console.log(output);

// const [a, b, c] = [1, 3, 4];

// console.log(b);

const {firstName, lastName} = {firstName:'John', lastName:'dso'};

console.log(firstName);
console.log(lastName);