// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> if condition <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const isUserLoggedIn = true
// if (isUserLoggedIn === true) {
// console.log(`User was LoggedIn this Page`)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> else <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const todayTemperature = 28
// if (todayTemperature < 30) {
// console.log(`less then ${todayTemperature}`)
// } else {
// console.log(`Greater then ${todayTemperature}`)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> else if <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let balance = 500
// let userInput = +prompt(`enter your balance`)
// if (userInput === balance) {
// console.log(`your balance is ${userInput} you are eligible for this course`)
// } else if (userInput > balance) {
// console.log(`your balance is higher then ${balance} but its ok you are eligible for this course`)
// } else if (userInput < balance) {
// console.log(`your balance is ${userInput} you are not eligible for this course`)
// } else if (userInput === NaN) {
// console.log(`your balance is ${userInput} you are not eligible for this course`)
// } else {
// console.log(`please enter valid number or valid balance`)
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> switch case <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let month = Math.floor(Math.random() * 12) + 1;
// console.log(month)

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month");
//         break;
// }


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined


// truthy values

// true, "0", 'false', " ", [], {}, function () { } => empty function

// let emptyArray = []
// if (emptyArray.length == 0) {
//     console.log("Array is empty")
// }

// let emptyObject = {}
// if (Object.keys(emptyObject).length == 0){
//     console.log("Object is empty")
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Nullish Coalescing Operator (??) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/* The nullish coalescing operator (??) is a new operator in JavaScript that returns the
first operand if it is not null or undefined; otherwise, it returns the second operand.
It is similar to the OR operator (||), but it only returns the second operand if the
first operand is null or undefined, not if it is a falsy value. */

// let name = null
// let name2 = name ?? 'John Doe'
// console.log(name2) // John Doe

// let val1 = null;
// let val2 = undefined;
// let res = val1 ?? val2; 
// console.log(res); // undefined

// let val1 = undefined;
// let val2 = null;
// let res = val1 ?? val2;
// console.log(res); //null

// let val1 = 0;
// let val2 = null;
// let res = val1 ?? val2;
// console.log(res); // 0
