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


// 24. Strings: Finding a Character at a Location


// Q9: How do you find the character at index 4 in the string "JavaScript"?

// A) charAt(4) => correct
// B) indexOf(4)
// C) substring(4)
// D) find(4)


// Q10: What will the following code output?

let str = "Hello World";
console.log(str.charAt(6));


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


// 27. Generating Random Numbers

// Q15: Which method is used to generate a random number between 0 and 1 in JavaScript?

// A) Math.random() => correct
// B) Math.random(0, 1)
// C) random()
// D) Math.randomNumber()


