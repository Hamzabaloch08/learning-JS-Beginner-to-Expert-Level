// for (let i = 1; i <= 100; i = i + 10) {
//     for (let j = i; j < i + 10; j++) {
//         document.write(`${j} `);
//     }
//     document.write(`<br>`)
// }

// 20. For Loops (Nested)
// Q1: What will be the output of the following code?


// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(i, j);
//     }
// }

// for (let i = 0; i < 2; i++) {
//     console.log('i=>', i)
// }

// for (let j = 0; j < 2; j++) {
//     console.log('j=>',j);
// }


// Q2: How many times will the inner loop execute if both the outer and inner loops are as follows?

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(i, j)
//     }
// }


//chapter
// 21. Changing Case


// Q3: Which method is used to convert a string to lowercase in JavaScript?

// A) toLower()
// B) capitalize()
// C) toLowerCase() => correct
// D) toCasefold()

// Q4: What will be the output of the following code?

// console.log("Hello".toUpperCase());

// A) hello
// B) HELLO => correct
// C) Hello
// D) hello world

// 22. Strings: Measuring Length and Extracting Parts

// Q5: Which property is used to find the length of a string in JavaScript?

// A) length => correct
// B) size
// C) lengthOf
// D) sizeOf

// Q6: What will be the output of the following code?

// let string = "JavaScript Programming";
// console.log(string.slice(0, 10));

// A) JavaScript => correct
// B) avaScript P
// C) JavaScript 
// D) Java


//chapter
// 23. Strings: Finding Segments


// Q7: What is the correct way to check if the substring "apple" is in the string "I love apples" in JavaScript?

// A) apple in "I love apples"
// B) "I love apples".contains("apple")
// C) "I love apples".indexOf("apple") !== -1  => correct
// D) "I love apples".find("apple")


// Q8: What will the following code output?

// let sentence = "JavaScript is amazing";
// console.log(sentence.indexOf('amazing'));

// A) -1
// B) 14 => correct
// C) 15 
// D) 12


//chapter
// 24. Strings: Finding a Character at a Location


// Q9: How do you find the character at index 4 in the string "JavaScript"?

// A) charAt(4) => correct
// B) indexOf(4)
// C) substring(4)
// D) find(4)


// Q10: What will the following code output?

// let str = "Hello World";
// console.log(str.charAt(6));


//chapter
// 25. Strings: Replacing Characters

// Q11: Which method is used to replace all occurrences of a substring in a string in JavaScript?

// A) replaceAll()  => correct
// B) replace()
// C) substring()
// D) split()


// Q12: What will the output of this code be?

// let sentence = "I like apples, apples is tasty";
// console.log(sentence.replace("apples", "oranges"));

// A) I like apples => correct
// B) I like oranges
// C) I like fruits
// D) I like Oranges

// console.log(sentence.replaceAll("apples", "oranges"));


//chapter
// 26. Rounding Numbers


// Q13: Which function is used to round numbers to the nearest integer in JavaScript?

// A) Math.round() => correct
// B) Math.floor()
// C) Math.ceil()
// D) Math.trunc()

// Q14: What is the result of Math.round(4.7)?

// A) 4
// B) 5 => correct
// C) 6
// D) 7


//chapter
// 27. Generating Random Numbers


// Q15: Which method is used to generate a random number between 0 and 1 in JavaScript?

// A) Math.random() => correct
// B) Math.random(0, 1)
// C) random()
// D) Math.randomNumber()


// Q16: How can you generate a random number between 1 and 10 (inclusive)? A) Math.random() * 10?

// B) Math.floor(Math.random() * 10) + 1 => correct
// C) Math.random() + 10
// D) Math.ceil(Math.random() * 10)


//chapter
// 28. Converting Strings to Integers and Decimals


// Q17: Which function is used to convert a string to an integer in JavaScript?

// A) parseInt() => correct
// B) toInteger()
// C) parseFloat()
// D) convertInt()

// Q18: What will parseFloat("12.34abc") return?

// A) 12.34 => correct
// B) 12
// C) 0
// D) NaN 


//chapter
// 29. Converting Strings to Numbers and Numbers to Strings


// Q19: How do you convert the number 100 into a string in JavaScript?

// A) 100.toString()
// B) String(100)
// C) 100.convertToString()
// D) Both A and B => correct

// Q20: What is the output of the following code?

// let num = 100;
// console.log(num.toString());

// A) 100 (as a string) => correct
// B) 100 (as a number)
// C) Error
// D) 1


//chapter
// 30. Controlling the Length of Decimals


// Q21: Which method is used to format a number to a fixed number of decimal places?

// A) toFixed() => correct
// B) toPrecision()
// C) Math.round()
// D) truncate()

// Q22: What will the following code output?

// let num = 5.6789;
// console.log(num.toFixed(2));  // Output: 5.68

// A) 5.67
// B) 5.678
// C) 5.68
// D) 6.00


//chapter
// 31. Getting the Current Date and Time


// Q23: Which method is used to get the current date and time in JavaScript?

// A) new Date() => correct 
// B) Date.now()
// C) getCurrentDate()
// D) currentDate()

// Q24: What is the output of Date.now()?

// A) Current date in string format
// B) Unix timestamp (milliseconds since 1970) => correct
// C) Current time in 24-hour format
// D) Timezone offset


//chapter
// 32. Extracting Parts of the Date and Time


// Q25: How can you get the current year using the Date object in JavaScript?

// A) Date.getFullYear() => correct
// B) new Date().getYear()
// C) new Date().getFullYear()
// D) Date().getYear()


// Q26: What will the following code output?

let today = new Date();
console.log(today.getMonth());

// A) Current month (0-11) => correct
// B) Current month (1-12)
// C) Month name
// D) NaN


//chapter
// Functions

// What is the correct syntax for defining a function in JavaScript?

// A) function myFunction: { }
// B) function myFunction() { }
// C) myFunction() = function { }
// D) function: myFunction() { }

// Answer: B) function myFunction() { }


// Which of the following statements correctly calls a function named calculateSum?

// A) calculateSum[]
// B) calculateSum{}
// C) calculateSum()
// D) call calculateSum()

// Answer: C) calculateSum()


// Passing Data to Functions
// How do you pass arguments to a function in JavaScript?

// A) By enclosing them in parentheses.
// B) By using curly braces.
// C) By separating them with commas within the parentheses.
// D) By placing them in square brackets.

// Answer: C) By separating them with commas within the parentheses.