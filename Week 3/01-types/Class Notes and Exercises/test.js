// // const v = null;
// // console.log(typeof v);

// // v = function(){};
// // console.log(typeof v);

// v = [1,2,3]
// // console.log(v instanceof Array);

// // console.log(Number(" "));
// // let a = [];
// // console.log(a.pop());

// // console.log(null);
// let obj1 = {}
// let obj2 = obj1

// obj2.name = 'Christina'

// // console.log(obj1.name);

// // console.log(3.0 === 4);

// let myInt;
// // console.log(typeof(myInt));
// myInt = 23;

// let b = 4;
// const a = (b == 1);
// // console.log(a);

// // let i = 2;
// // while (i >= 0){
// //   console.log(i);
// //   i--;
// // }

// let students = ["Sara", "Ella", "Jane", "Ana"];
// students.shift();
// // console.log(students[1]);

// // while(students.length > 0){
// //   let student = students.pop();
// //   // console.log(student);
// // }

// // const ingredients = ["egg", "chocolate", "flour"];
// // ingredients = ["milk", "chocolate", "oil"];
// // console.log(ingredients);

// // const person = {
// //   name : "Ana",
// //   surname: "Wilson",
// //   age: 23,

// // }
// // const property = "name";
// // console.log(person.property);


//shallow and deep array
// let firstObject={name:"Paola"};
// let sameObject = firstObject; //it's referencing the same object

// // sameObject.name = "Maria";
// // console.log(firstObject.name);

// let clonedObject = Object.assign({}, firstObject); //now it's a new object
// clonedObject.name = "Sara";
// console.log(firstObject.name);

// firstObject.dimensions = {height: 163};
// const anotherClone = Object.assign({}, firstObject)

// anotherClone.dimensions.height = 175;
//it's referencing the same dimensions object
//we need a cloning loop or a library
// console.log(firstObject.dimensions.height); //175


// const firstArray = ['oranges', 'apples'];
// const lonedArray = firstArray.slice(); //that's a new array

// console.log('w' + null + 1);

// ## Challenge 2: checking equality
// Predict which of these will be console logged

// ```javascript
if ([]){
    console.log('empty array is truthy')
}
if ([1,2,3]){
    console.log('non-empty array is truthy')
}

if ({}){
    console.log('empty object is truthy')
}

if ({a:'1'}){
    console.log('non-empty object is truthy')
}
if (null){
    console.log('null is truthy')
}

if (false){
    console.log('false is truthy')
}

if (NaN){
    console.log('NaN is truthy')
}

if (''){
    console.log('empty string is truthy')
}

if (''){
    console.log('empty string is truthy')
}

if ([] === true){ //if sth is truthy it does not mean it is equal (===) to true//also for ==
  // 0 != 1 // === and == coerce operatins to number
    console.log('empty array equals to true')
}
// bonus
if (!![] === true){//double exclamation marks. !![] is true
    console.log('double negated empty array equals true')
}


// Example: Get Random Item From an Array
// A random number between 0 to array.
// length is generated using the Math. random() method.
// The Math. floor() returns the nearest integer value generated by Math. random() .
// This random index is then used to access a random array element.
// var myArray = ['January', 'February', 'March'];
// const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
// console.log(randomElement);

//With no repetition
// Whenever an item is selected,
// move it to the back of the array and randomly select
// from a slice of the original array array.slice(0, -5).
// https://stackoverflow.com/questions/17891173/how-to-efficiently-randomly-select-array-item-without-repeats

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

//     // swap elements array[i] and array[j]
//     // we use "destructuring assignment" syntax to achieve that
//     // you'll find more details about that syntax in later chapters
//     // same can be written as:
//     // let t = array[i]; array[i] = array[j]; array[j] = t
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// console.log(3.0 === 3);
// b = 4;
// let a;
// a = (b==1);
// console.log(a);

// const person ={
//   name: "Ana",
//   surname: "Wilson",
//   age: 23
// }
// // const property = "name";
// // console.log(person[property]);

// let myArr = [1, 3, 4, 6];
// myArr.shift();
// console.log(myArr);
// console.log(typeof(NaN));

// const msg1 = "There are ";
// const numStudentsG1 = 16;
// const numStudentsG2 = "10";
// const msg2 = " Students in two groups";

// console.log(msg1 + (numStudentsG1 + numStudentsG2) + msg2);
// // "There are 1610 Students in two groups" ???


// console.log(msg1 + (numStudentsG2 + numStudentsG1) + msg2);
// "There are 1016 Students in two groups" ???

// let obj1 ={};
// let obj2 = obj1;

// obj2.name = "Christina";
// console.log(obj1.name);
