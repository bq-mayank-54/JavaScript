// const input = document.getElementById("inputField");
// const displayName = document.getElementById("displayName");

// function saveName() {
//     let value = input.value;
//     localStorage.setItem("userName", value);
//     alert("Name Saved");
// }

// function loadName() {
//     let savedName = localStorage.getItem("userName");
//     if(savedName) {
//         displayName.innerText = "Welcome, " + savedName;
//     }
// }

// window.onload = loadName;

// function toggleMode() {
//     // const body = document.querySelector("body");
//     document.body.classList.toggle("mode");
//     let isDark = document.body.classList.toggle.contains("mode");
//     localStorage.setItem("darkMode", isDark);
// }

// window.onload = function () {
//     let darkMode = localStorage.getItem("darkMode");
//     if(darkMode === "true"){
//         document.body.classList.add("mode");
//     }
// }

// function toggleDarkMode() {
//     document.body.classList.toggle("dark-mode");
//     let isDark = document.body.classList.contains("dark-mode");
//     localStorage.setItem("darkMode", isDark);
// }

// window.onload = function() {
//     let darkMode = localStorage.getItem("darkMode");
//     if (darkMode === "true") {
//         document.body.classList.add("dark-mode");
//     }
// };

// const promise = new Promise( (resolve, reject) => {
//     reject("EveryThing is fine");
//     // rejected("Somethid went wrong");
// })

// promise
// .then(value => console.log(value))
// .catch(error => console.log("Error:", error))

// // const promise = new Promise((resolve, reject) => {
// //     reject("Something went wrong!");
// // });

// // promise
// //     .then(value => console.log(value))
// //     .catch(error => console.log("Error:", error));

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data received");
//     }, 1000);
// }

// fetchData(data => console.log(data));

// // function fetchData( (resolve, reject) => {
// //     setTimeout ( () => {

// //     })
// // })

// function fetchData() {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 1000);
//     })
// }

// // fetchData().then(value => console.log(value));


// (async function() {
//     const data = await fetchData();
//     console.log(data);
// })();

// let URLs = [];
// for (let i=1 ; i<5 ; i++){
//    URLs[i] = `https://jsonplaceholder.typicode.com/posts/${i}`;
// }

// let result = 


// function counter (value) {
//     let count = value;

//     // function increaseCounter() {
//     //         count++;
//     //         return count;
//     // }

//     return increaseCounter;
// }

// let callCounter = counter();

// callCounter();
// callCounter();
// callCounter();
// callCounter();
// callCounter();

// let value = callCounter();
// console.log(value);

// let count = 0;

// if(count < 3){
// function printName(name, count) {
//     console.log(name);
// }

// };

// printName("Mayank");


//Control Counter

// function counter() {
//     let count = 0;
    
//         // function increaseCounter(){
//         //     if(count < finalCount){
//         //     count++;
//         //     console.log(count);
//         //     }
//         //     else{
//         //         console.log("Cannot increase counter");
//         //     }
            
//         // }
    
//     // return increaseCounter;
//     return {
//         function: incrementCounter(value) {
//             if(count < value)
//             {
//                 count++;
//                 console.log(count);
//             }
//         },


//     };
// }


// function createBankAccount(initialBalance) {
//     let balance = initialBalance;  // Private variable

//     return {
//         deposit: function(amount) {
//             balance += amount;
//             console.log("Deposited:", amount, "New Balance:", balance);
//         },
//         withdraw: function(amount) {
//             if (amount > balance) {
//                 console.log("Insufficient funds!");
//             } else {
//                 balance -= amount;
//                 console.log("Withdrew:", amount, "New Balance:", balance);
//             }
//         },
//         getBalance: function() {
//             console.log("Balance:", balance);
//         }
//     };
// }

// const account = createBankAccount(1000);

// account.deposit(500);   // Deposited: 500, New Balance: 1500
// account.withdraw(200);  // Withdrew: 200, New Balance: 1300
// account.getBalance();   // Balance: 1300

// console.log(account.balance);  // Undefined (because `balance` is private)


function counter(){
    let count = 0;
    let finalCount;

    return {
        
        increment: function(value){
            if (count < value){
                
                count++;
            }
            else{
                console.log(`Value of count can't be more than ${value}`);
            }
        },
        decrement: function(){
            count--;
        },
        getCount: function(){
            return count;
        }
    }
}

let callCounter = counter();

// callCounter.increment(5);
// callCounter.increment();
// callCounter.increment();
// console.log(callCounter.getCount());

// callCounter.decrement();
// console.log(callCounter.getCount());
callCounter.increment(5);
callCounter.increment(5);
callCounter.increment(5);
callCounter.increment(5);
callCounter.increment(5);
callCounter.increment(5);
console.log(callCounter.getCount());









