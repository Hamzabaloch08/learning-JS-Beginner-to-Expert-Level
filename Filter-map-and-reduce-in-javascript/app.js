const coding = ['js', 'py', 'java', 'c++', 'c#', 'ruby', 'cbb']
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let result = coding.forEach((item) => {
    return item;   // => forEach does not return anything
})
// console.log(result); //undefined

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> method filter operation <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let filteredValues = num.filter((num) => {
    return num > 4
})
// console.log(filteredValues);

const books = [
    {
        title: 'Book 1', genre: 'History', publish: '1990'
    },
    {
        title: 'Book 2', genre: 'Fiction', publish: '1995'
    },
    {
        title: 'Book 3', genre: 'History', publish: '1998'
    },
    {
        title: 'Book 4', genre: 'Science', publish: '1999'
    },
    {
        title: 'Book 5', genre: 'Fiction', publish: '1997'
    },
    {
        title: 'Book 6', genre: 'History', publish: '2005'
    },
    {
        title: 'Book 7', genre: 'Non-Fiction', publish: '2000'
    },
    {
        title: 'Book 8', genre: 'History', publish: '1994'
    }
]

let userBooks = books.filter((seletedBooks) => {
    return seletedBooks.publish >= 2000 && seletedBooks.genre === 'History'
})
// console.log(userBooks);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> .map <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


let newNums = num.map((num) => {
    return num + 10 // => map returns a new array with the results of the function applied to each element,
})

// console.log(newNums);   

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> chaining method <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let newNumber = num.map((num) => num * 10)
    .map((num) => num + 1).filter((num) => {
        return num >= 40
    })
// console.log(newNumber);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> reduce method <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const numbers = [1, 2, 3]
const myTotal = numbers.reduce((accumulator, currentValue) => {
    console.log(`acc: ${accumulator} cur: ${currentValue}`)
    return accumulator + currentValue;
}, 0)
console.log(myTotal); // 6