// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> for loop <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// } => syntex of forloop


// inward counting

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// backward counting

// for(let i = 10; i >= 0; i--){
//     console.log(i);
// }

// printing table

// for (let i = 1; i <= 10; i++) {
//     console.log(`2 x ${i} = ${i * 2}`)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> if in forloop <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// for(let i = 0; i <= 10; i++){
//     const numbers = i
//     if (numbers == 5){
//         console.log(`5 is best number!`)
//     }
//     console.log(numbers);

// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> nested loop <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// for (let i = 0; i <=10; i++){
//     console.log(`outer loop ${i}`)
//     for (let j = 0; j <= 10; j++){
//         console.log(`inner loop ${j} outer loop ${i}`);
//         }
// }

// table printing

// for (let i = 2; i <= 10; i++) {
//     document.write(`<br>Table of ${i} <br><br>`)
//     for (let j = 1; j <= 10; j++) {
//         document.write(`${i} x ${j} = ${i * j} <br>`);
//     }
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> forloop on array <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let superHerosNames = ['Superman', 'Batman', 'Thor', 'Ironman', 'Spiderman', 'Antman', 'Hulk', 'Blackpanther']
// for (let i = 0; i < superHerosNames.length; i++) {
//     document.write(`${superHerosNames[i]} `);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> break or continue <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5!`)
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`)
//         continue;
//     }
//     console.log(i);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> while loop <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let index = 1;
// while (index <= 10) {
//     console.log(`value of index is ${index}`)
//     index++;
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> while loop on array <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let index = 0;
// let arr = ['js', 'html', 'css', 'python', 'java', 'c++', 'c#']
// while (index < arr.length) {
//     console.log(arr[index])
//     index++
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> do while loop <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let score = 1;
// do {
//     console.log(`Your score is ${score}`)
//     score++
// } while (score <= 10)