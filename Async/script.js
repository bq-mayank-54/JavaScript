// function myDisplayer(some) {
//     document.getElementById("demo").innerText = some;
// }

// // function myFirst() {
// //     myDisplayer("Hello");
// // }
// // function mySecond() {
// //     myDisplayer("Goodbye");
// // }

// // // myFirst();
// // mySecond();
// // myFirst();

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// setInterval(myFunction, 1000);

// function myFunction() {
//     let d = new Date();
//     document.getElementById("demo").innerHTML=
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds();
// // }

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;

//     if(x === 0) {
//         myResolve("Ok");
//     }
//     else 
//     {
//         myReject("Error");
//     }
// });

// myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// );

// console.log("one");
// console.log("two");

// setTimeout( () => {
//     console.log("hello")
// }, 4000);

// console.log("three");
// console.log("four");

// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(3, 4, (a, b) => {
//     console.log(a+b);
// });

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello  , 3000);

// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1 , () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5);
//             });
//         });
//     });
// });

// let promise = new Promise( (resolve, reject) => {
//     console.log("I am a promise");
    // resolve("Success");
    // reject("some error occured");
// })

// function getData(dataId, getNextData) {
//     return new Promise( (resolve, reject) => {
//         setTimeout ( () => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// getData(1, getData);

// const getPromise = () => {
//     return new Promise ( (resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then( (res) => {
//     console.log("promise fullfilled", res);
// });

// promise.catch( (err) => {
//     console.log("Erorr", err)
// })

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log("data1");
//             resolve("success");
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log("data2");
//             resolve("success");
//         }, 4000)
//     })
// }

// console.log("fetching data1")
// asyncFunc().then( () => {
//     console.log("fetching data2")
//     asyncFunc2().then( () => {})
// })

// function getData(dataId) {
//     return new Promise( (resolve, reject) => {
//         setTimeout ( () => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 1000);
//     });
// }

// console.log("Gettind data 1...");
// getData(1).then( (res) => {
//     console.log("Gettind data 2...");
//     return getData(2);
// }).then( (res) => {
//     console.log("Gettind data 3...");
//     return getData(3);
// }).then( (res) => {
//     console.log(res);
// });

// async function hello() {
//     console.log("hello")
// }

// async hello = () => {
//     console.log("hello");
// }

// let hello = () => {
//     console.log("hello");
// }

// function getData(dataId) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//         }, 2000);
//     });
// }

// async function getAllData() {
//     console.log("Getting data 1 ...");
//     await getData(1);
//     console.log("Getting data 2 ...");
//     await getData(2);
//     console.log("Getting data 3 ...");
//     await getData(3);
//     console.log("Getting data 4 ...");
//     await getData(4);
//     console.log("Getting data 5 ...");
//     await getData(5);
//     console.log("Getting data 6 ...");
//     await getData(6);
// }

// (async function () {
//     console.log("Getting data 1 ...");
//     await getData(1);
//     console.log("Getting data 2 ...");
//     await getData(2);
//     console.log("Getting data 3 ...");
//     await getData(3);
//     console.log("Getting data 4 ...");
//     await getData(4);
//     console.log("Getting data 5 ...");
//     await getData(5);
//     console.log("Getting data 6 ...");
//     await getData(6);
// })();

// getAllData();

let promise = new Promise( () => {
    console.log("abajfj");
})

setTimeout(() => {
    console.log("jkj")
}, 10);



// console.log(promise);