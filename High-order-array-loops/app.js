// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> for of <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> dataType Maps <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const map = new Map()
map.set('name', 'john');
map.set('age', '18');
map.set('city', 'NYC');
map.set('country', 'USA');

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> for of on maps <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// for (const [key, value] of map) {
//     console.log(`${key} => ${value}`)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> for in on object <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const myObject = {
    game1: "Gta v",
    game2: "Assasins creed",
    game3: "Fifa 22",
    game4: "Nfs"
}

// for (const names in myObject) {
//     console.log(`${names} is ${myObject[names]}`)
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> for in on array <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let names = ['john', 'Sam', 'lara']
// for (const i in names) {
//     console.log(names[i])
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> for each on array <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let coding = ['JavaScript', 'python', 'c++', 'Java', 'Cpp', 'Ruby']
coding.forEach((lang) => {
    // console.log(lang)
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> function reference on for each <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function print(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, array) => {
//     console.log(item, index, array)
// })

const list = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

list.forEach((item) => {
    console.log(`languages: ${item.languageName} => languageFileName: ${item.languageFileName}`);
})