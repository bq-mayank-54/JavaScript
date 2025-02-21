// (async function apiCalling() {
//     console.log("calling api with id 1");
//     await(console.log(fetch("https://jsonplaceholder.typicode.com/posts/1")));

//     console.log("calling api with id 2");
//     await(console.log(fetch("https://jsonplaceholder.typicode.com/posts/2")));

//     console.log("calling api with id 3");
//     await(console.log(fetch("https://jsonplaceholder.typicode.com/posts/3")));

//     console.log("calling api with id 4");
//     await(console.log(fetch("https://jsonplaceholder.typicode.com/posts/4")));

//     console.log("calling api with id 5");
//     await(console.log(fetch("https://jsonplaceholder.typicode.com/posts/5")));


// })();

// apiCalling();

// let idx = [1, 2, 3, 4, 5];

// // let result = idx.map( () => {
// //     let apiLink = `https://jsonplaceholder.typicode.com/posts/${idx}`;
// //     return fetch(apiLink);
// // })





// let arrRes = [];
// (async function apiCalling() {
//     // let arrRes = []
//     for(let i=1 ; i<=5 ; i++)
//     {
//         let apiLink = `https://jsonplaceholder.typicode.com/posts/${i}`;
//         arrRes[i] = fetch(apiLink);
//     }
// })();

// console.log(arrRes);

// let id = [1, 2, 3, 4, 5];

// let result = idx.map( () => {
//     return new PromiseAll( (resolve, reject) => {
        
//     })
// })


// let posBtn = document.getElementById("posBtn");
// let negBtn = document.getElementById("negBtn");
// let reset = document.getElementById("reset");

// let score = document.createElement("")


// posBtn.addEventListener("click", () => {

// })





// let counter = prompt("Enter the initial value of counter");

let counter = prompt("Enter the initial value of counter");
let count = document.getElementById("count");

count.textContent = counter;

    function negative() {
        if(counter > 0){

            count.addEventListener("click", () => {
                
            })

        counter--;
        count.textContent = counter;
        }
    }

    function positive(){
        counter++;
        count.textContent = counter;
    }

    function reset() {
        counter = 0;
        document.getElementById("count").textContent = counter;
    }