// let num =  prompt("Enter the number");

// if(num % 5 ===0)
// {
//     console.log(num, "is a multiple of 5");
// }
// else
// {
//     console.log(num, "is not a multiple of 5");
// }

// let score = prompt("Enter the score ");
// let grade;
// if(score>=90 && score<=100)
// grade = "A";
// else if(score>=80 && score<90)
// grade = "B";
// else if(score>=70 && score<80)
// grade = "C";
// else if(score>=60 && score<70)
// grade = "D";
// else if(score>=50 && score<60)
// grade = "E";
// else
// grade = "F";

// console.log("Student Grade = ", grade); 

//Qs2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let num = 10;
// while(true)
// {
//     let value = prompt("Guess the value of number");
   
//     if(value === num)
//     {
//         console.log("You guess the right number");
//         break;
//     }

// }

// let Name = prompt("Enter your full name without spaces");
// let userName = "@" + Name + Name.length;
// console.log(userName);  
// let marks = [97, 82, 44 ,56];
// console.log(marks); 

// const arrowMultiplication = (x,y) => {
//     console.log(x*y);
// }


// let idx = [1, 2, 3, 4, 5];

// let newValues = idx.map( (value) => {
//     return new Promise( (response, regret) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${value}`);
//         response("succes");
//         regret("error");
//     })
// })

// const urls = [
//     `https://jsonplaceholder.typicode.com/posts/1`,
//     `https://jsonplaceholder.typicode.com/posts/2`,
//     `https://jsonplaceholder.typicode.com/posts/3`,
//     `https://jsonplaceholder.typicode.com/posts/4`,
//     `https://jsonplaceholder.typicode.com/posts/5`,
// ];

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5"
];


let Result = urls.map(url => fetch(url).then(response => response.json()));


Promise.all(Result)
    .then(res => {
        console.log("responses:", res);
    })
    .catch(error => {
        console.error("error :", error);
    });
