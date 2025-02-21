// console.log("hello!");
// let id = document.getElementById("myId");
// console.log(id);

// let headings = document.getElementsByClassName("heading-class");
// // console.dir(headings);
// // console.log(headings);

// let para = document.getElementsByTagName("p");
// console.log(para);

// let firstEl = document.querySelector("p");
// console.log(firstEl);

// let allEl = document.querySelectorAll("p");
// console.log(allEl);

// let firstEl = document.querySelector(".myClass");
// console.log(firstEl);

// let allEl = document.querySelectorAll("myClass");
// console.log(allEl);

// let firstEl = document.querySelector("#myId");
// console.log(firstEl);

// let allEl = document.querySelectorAll("p");
// console.log(allEl);

// console.log(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div); 

// setTimeout(function() {
//     console.log("Execute after 2 seconds")
// }, 2000)

// (function() {
//     console.log("Run immediately after defined IIFE")
// })();

// const p = document.querySelector("p");
// const divs = document.querySelectorAll("div");

// console.log(p);
// console.log(divs);

// const heading = document.querySelector('h2');
// heading.textContent = 'Wes is cool';
// console.dir(heading.textcontent);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`
// d


// let h2 = document.querySelector("h2");
// console.dir(h2);


// // // let h2 = document.querySelector("h2");
// // // console.dir(h2);
// // // h2.innerText = `${h2.innerText} by apna college student`

// // let divs = document.querySelectorAll(".box");
// // // console.log(divs[0]);

// // let idx = 1;
// // for(div of divs) {
// //     // console.log(div.innerText);
    
// //     div.innerText = `new unique value ${idx}`;
// //     idx++;
// // }    

// // // divs[0].innerText = "new unique value 1";
// // // divs[1].innerText = "new unique value 2";
// // // divs[2].innerText = "new unique value 3"

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "newClass"));


//  let newBtn = document.createElement("button");
//  newBtn.innerText = "click me";
//  console.log(newBtn);


// //  let div = document.querySelector("div");
// //  div.append(newBtn);
// //  div.prepend(newBtn);
// // div.before(newBtn);

// let p = document.querySelector("p");
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// p.remove();

// newHeading.remove();

 
/*Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
Insert the button as the first element inside the body tag.*/

// let newButton = document.createElement 

/* Qs. Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList. */

// let p = document.querySelector("p");


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     // console.log("button was clicked");
// }

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     // console.log("you are inside div")
// }

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("button one was clicked - handler-1");
//     // console.log(evt);
//     // console.log(evt.type);
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("button one was clicked - handler-2");
//     // console.log(evt);
//     // console.log(evt.type);
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("button one was clicked - handler-3");
//     // console.log(evt);
//     // console.log(evt.type);
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("button one was clicked - handler-4");
//     // console.log(evt);
//     // console.log(evt.type);
// });

// // btn1.addEventListener("click", () => {
// //     console.log("button was clicked - handler2")
// // })

// const handler4 = (evt) => {
//     console.log("button one was clicked - handler-4");
//     // console.log(evt);
//     // console.log(evt.type);
// }

// btn1.removeEventListener("click", handler4);

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button one was clicked - handler-1");
// });

// btn1.addEventListener("click", () => {
//     console.log("button one was clicked - handler-2");
// });

// btn1.addEventListener("click", () => {
//     console.log("button one was clicked - handler-3");
// });

// const handler4 =() => {
//     console.log("button one was clicked - handler-4");
// };

// btn1.addEventListener("click",() => {
//     console.log("button one was clicked - handler-4");
// });


// btn1.removeEventListener("click", handler4); 


//Q chage mode

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// let body = document.querySelector("body");

// modeBtn.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark"
//         // body.style.backgroundColor = "black";

//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else {
//         currMode = "light";
//         // body.style.backgroundColor = "white";


//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currMode);
// });

// console.log(x);
// var x = 4;

// console.log(y);
// let y = 5;

// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(b);
//     let b = 30;
// }

// test();

// console.log(sum(3, 4));
// function sum(a, b) {
//     return a + b;
// }

// console.log(multiply(2, 3));
// const multiply = (a, b) => a * b;

// function createGame(gameName) {
//     let score = 0;

//     return function win(){
//         score++;
//         return `Game Name ${gameName} and score ${score}`;
//     }
// }

// const hockeyGame = createGame("Hockey");

// const cricketGame = createGame("crickeet");

// setTimeout(function ()  {
//     console.log("done time to eat");
// }, 1000);

// let arr = [1, 2, 3, 4, 5, 6];
// let [first, second, ...rest] = arr; 

// const student = {
//     name: "Rahul",
//     age: 20,
//     details: {
//         cgpa: 8.2,
//         grade: "A",
//     },
//     college: "LNCT"
// };

// const{name, age, details: {cgpa, grade}, college } = student;

// const person1 = {
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

//     const person2 = {
//         firstName: "John",
//         lastName: "Doe" 
//     }

//     const person3 = {
//         firstName: "John",
//         lastName: "Dev" 
//     }

//     console.log(person1.fullName.call(person3) );

// const heading = document.querySelector("h2");

// console.log(heading.textContent);
// console.log(heading.innerText);


// const p = document.getElementById("demo");

// let body = document.querySelector("body");
// body.innerHTML = 
// p.style.backgroundColor = "yellow";
// // p.style.backgroundColor = "blue";


// p.style.color = "blue";


// let newElement = document.createElement("p");
// newElement.textContent = "Hello, this is a new paragraph";

// let element = document.getElementById("myElement");

// element.innerHTML = "<strong> Updated Content </strong>"

// element.remove();

let body = document.body;

// let newElement = document.createElement("div");
// body.insertAdjacentElement("beforeEnd", newElement);
// newElement.textContent = "I am a replacement";
// document.body.replaceChild(newElement, element);

let newBtn = document.createElement("button");
newBtn.textContent = "Dark Mode";
body.insertAdjacentElement("afterbegin", newBtn);


newBtn.addEventListener("click", () => {
    // let x = 1;

    // if(x == 0){
    //     body.style.backgroundColor = "black";
    //     x = 1;
    //     console.log("black");
    // }
    // else{
    //     body.style.backgroundColor = "white";
    //     console.log("white");
    //     x = 0;
    // }

    document.body.classList.toggle("dark-mode");
})