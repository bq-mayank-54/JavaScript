// const student = {
//     name: "Mayank Jha",
//     marks: 94.4,
//     printMarks: function() {
//         console.log("Marks =", this.marks);
//     }
// }

// const employee = {
//     calcTax() {
//         console.log("the tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
// };

// karanArjun.__proto__=employee;

// class car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     // start(){
//     //     console.log("start");
//     // }

//     // stop(){
//     //     console.log("end");
//     // }
//     age(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// const myCar1 = new car("Ford", 2014);
// document.getElementById("demo").innerHTML =
// "My car is " + myCar1.age() + " years old.";
// const myCar2 = new car("Audi", 2019);

//Inheritance

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return `I have a ` + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.Model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.Model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = myCar.show();

const myDate = new Date('August 11, 2025');
console.log(my)