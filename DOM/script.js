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


let h2 = document.querySelector("h2");
console.dir(h2);


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


let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    // console.log("button was clicked");
}

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    // console.log("you are inside div")
}