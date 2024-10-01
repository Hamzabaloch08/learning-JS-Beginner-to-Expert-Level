// nested loop

// let num = ["Front-End","Back-End","Full-stack",]
// let num2 = ["Development","Developer"]

// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num2.length; j++) {
//         document.write(num[i] , " " , num2[j],"<br>")
//     }
// }

// for(let i = 1; i < 100; i=i+10){
//     for(let j = i; j < i+10; j++ ){
//         document.write(j , " ")
//     }
//     document.write("<br>")
// }

// method of strings

// .toLowerCase()

// let userInput = prompt("conver anything into lowercase")
// document.write(userInput.toLowerCase())
// The toLowerCase() method of String values returns this string converted to lower case.

// .toUpperCase()

// let userInput = prompt("conver anything into lowercase")
// document.write(userInput.toUpperCase())
// The toUpperCase() method of String values returns this string converted to uppercase.

// let pro = prompt('Enter city name')
// let pro1 = pro.slice(0,1).toUpperCase()
// let pro2 = pro.slice(1).toLowerCase()

// let res = pro1 + pro2
// document.write(res)

// .charAt()

// let Name = "hamza"
// document.write(Name.charAt("2"))

// Math.round

// let percentage = 72.4
// document.write(Math.round(percentage))

// Math.ceil

// let percentage = 72.2
// document.write(Math.ceil(percentage))

// Math.floor

// let percentage = 72.9
// document.write(Math.floor(percentage))

// Math.random

// document.write(Math.random()*10)

// function

// function abc(){
//     alert("hello world")
// }

// for(let i = 0; i < 10; i++){
//     abc()
// }

// function sum(a, b, c) {
//     return a + b + c
// }

// alert(sum(5, 6, 11));
// alert(sum(11, 11, 11));

// function sum(a = 2, b = 3, c = 4) {
//     return a + b + c
// }

// alert(sum(10, 10, 10));
// alert(sum());

// let abc = 2.8888888888;
// document.write(abc.toFixed(10))


// >>>>>>>>>>>>>>>>>>>>>>>> loops <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>> for loop <<<<<<<<<<<<<<

// for(let i = 0; i <= 10; i++){
//     document.write(i , '<br>')
// }

// >>>>>>>>>>> while loop <<<<<<<<<<<<
//  let number = 10
//  while(number >= 1){
//     document.write(number , '<br>')
//     number--
//  }

//>>>>>>>>>>> Do While loop <<<<<<<<<<<<
// let num = 1
// do {
//     document.write(num, '<br>')
//     num++
// } while (num <= 10)

// function func1() {
//     let obj = {
//         name: "saad",
//         age: 25,
//     }

//     func2(obj)
// }

// function func2(e){
//     console.log(e)
// }

// func1()


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> loop forEach

// let names = ['hamza','ahmed','raza','saad','rahul','ayan','hassan','usman','farhan','rehman']

// names.forEach(function(printNames){
//     document.write(`${printNames} <br>`)
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> forEach + .reverse() method

// let names = ['hamza','ahmed','raza','saad','rahul','ayan','hassan','usman','farhan','rehman']
// let reverseNames = names.reverse()
// reverseNames.forEach(function(printReverseNames){
//     document.write(`${printReverseNames} <br>`)
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> .map loop

// let names = ['hamza','ahmed','raza','saad','rahul','ayan','hassan','usman','farhan','rehman']

// names.map(function(printNames){
//     document.write(`${printNames} `)
// })

// let fullName = 'jamsheed'
// if (fullName == 'java' || 'html' || 'javascript') {
//     console.log('you are a programmer')
// }
// else {
//     console.log('you are not a programmer')
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> check some date method

// let myDate = new Date();
// document.write(myDate.toDateString())
// document.write(myDate.toISOString())
// document.write(myDate.toJSON())
// document.write(myDate.toLocaleDateString())
// document.write(myDate.toLocaleString())
// document.write(myDate.toLocaleTimeString())

// const myCreatedDate = new Date(2020, 0, 5)
// console.log(myCreatedDate.toDateString())

// let myTimeStamp = Date.now()
// let myCreatedDate = new Date(2020, 0, 5)
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

// let newDate = new Date();
// console.log(newDate.getFullYear())
// console.log(newDate.getMonth() + 1)

// console.log(newDate.toLocaleString("default",{
//     weekday: "long",
//     year: "numeric",
//     day: "numeric"
// }))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> concating array <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const marval_heros = ['SpiderMan', 'IronMan', 'Thor','Hulk']
// const dc_heros = ['Batman', 'Superman','Flash']

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> spread operator <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const marval_heros = ['SpiderMan', 'IronMan', 'Thor','Hulk']
// const dc_heros = ['Batman', 'Superman','Flash']
//  const allHeros = [...marval_heros, ...dc_heros]
//  console.log(allHeros)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> falting array <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let arr = [1, 2, 3, 4, 5, 6, [6, 7, 8, 8], 4, 23, 12, 53, [23, 3, 4, [3, 5, [3, 4], 1, 5]]]
// let flatArray = arr.flat(Infinity)
// console.log(flatArray)

// console.log(Array.from("hamza"))

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// let totalScore = Array.of(score1,score2,score3);
// console.log(totalScore); // Output: [100, 200, 300]

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> object literals <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let mySym = Symbol("name");

// let user = {
//   [mySym]: "Hamza",
//   userName: "hb._07x",
//   age: 16,
//   country: "pakistan",
//   city: "Karachi",
//   address: "Garden west karachi",
//   hobbies: ["Coding", "Football", "Reading", "Gaming"],
//   skills: ["JavaScript", "Css", "html"],
//   isMarried: false,
// };

// Object.freeze(user);

// console.log(user[mySym])

// console.log(
//   `Name: ${user.name} \nHobbies: ${user.hobbies} \nUsername: ${user.userName} \nSkills: ${user.skills} \nAge: ${user.age}`
// );

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> assigning object <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let obj1 = {
//   name: "Hamza",
// };
// let obj2 = {
//   age: 16,
// };

// let obj3 = {
//   country: "pakistan",
// };

// // let assigningObject = Object.assign({}, obj1, obj2, obj3);
// console.log(assigningObject);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> spreading object  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let obj1 = {
//   name: "Hamza",
//   fullname: "Hamza baloch"
// };
// let obj2 = {
//   age: 16,
// };

// let obj3 = {
//   country: "pakistan",
// };

// const spreadingObject = { ...obj1, ...obj2, ...obj3 };
// console.log(spreadingObject);

// console.log(Object.entries(obj1))
// console.log(obj1.hasOwnProperty('name'))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> objects in array <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let obj = [
//   {
//     name: "Hamza",
//     age: 16,
//   },
//   {
//     name: "raza",
//     age: 19,
//   },
//   {
//     name: "ali",
//     age: 20,
//     },
// ];

// console.log(obj[0])

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> destructuring object <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let course = {
//   courseName: "Mobile app and web development",
//   courseDuration: "12 months",
//   courseFees: "50000",
//   courseLanguage: "english",
//   courseLocation: "karachi",
// };

// const { courseName } = course;
// const { courseDuration } = course;
// const { courseFees } = course;

// console.log(`Course Name: ${courseName}`);
// console.log(`Course Duration ${courseDuration}`);
// console.log(`Course Fees: ${courseFees}`);
