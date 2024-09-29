// let studentName = prompt("Name")
// let allSubjects = [+prompt("Marks in English"), +prompt("Marks in Urdu"), +prompt("Marks in Maths"), +prompt("Marks in islamiyat"), +prompt("Marks in computer")]
// let subjectMarks = allSubjects[0] + allSubjects[1] + allSubjects[2] + allSubjects[3] + allSubjects[4]
// let percentage = ((subjectMarks / 500) * 100)

// if (percentage >= 80 && percentage < 101) {
//     document.write("<h1>", studentName, ": Your percentage is ", percentage, "%", "</h1>")
//     document.write("<h1>", "Grade A+", "</h1>")
// }
// else if (percentage >= 70 && percentage < 80) {
//     document.write("<h1>", studentName, ": Your percentage is ", percentage, "%", "</h1>")
//     document.write("<h1>", "Grade A", "</h1>")
// }
// else if (percentage >= 60 && percentage < 70) {
//     document.write("<h1>", studentName, ": Your percentage is ", percentage, "%", "</h1>")
//     document.write("<h1>", "Grade B", "</h1>")
// }
// else if (percentage >= 50 && percentage < 60) {
//     document.write("<h1>", studentName, ": Your percentage is ", percentage, "%", "</h1>")
//     document.write("<h1>", "Grade C", "</h1>")
// }
// else if (percentage >= 40 && percentage < 50) {
//     document.write("<h1>", studentName, ": Your percentage is ", percentage, "%", "</h1>")
//     document.write("<h1>", "Grade D", "</h1>")
// }
// else if (percentage >= 0 && percentage < 40) {
//     document.write("<h1>", studentName, ": Your percentage is ", percentage, "%", "</h1>")
//     document.write("<h1>", "Grade F", "</h1>")
// }
// else {
//     document.write("<h1>", "Invalid percentage", "</h1>")
//     document.write("<h1>", "Enter Correct Marks", "</h1>")
// }

// let array = ["hamza","16",true,"ali"]
// array.push("hsadgh")
// array.pop()
// array.unshift("web")
// array.shift()
// array.splice(1,1,"ali")
// let array2 = array.slice(0)

// document.write(array)
// document.write("<br>")
// document.write(array2)

// let arr = [1,2,3,4,5]
// for(i = 0; i < arr.length; i++){
//     document.write(arr[i])
// }

// let userInput = +prompt("which table you want")
// let userInput2 = +prompt("1 till..?")
// for (let i = 1; i <= userInput2; i++) {
//     document.write(userInput, " x ", i, " = ", i * userInput, "<br>")
// }

// let userInput = prompt("Enter city name of Pakistan")
// let cityNames = ["karachi", "lahore", "islamabad",
// "quetta", "peshawer","hyderabad", "gwadar", "hub"]
// let match = false

// for (i = 0; i < cityNames.length; i++) {
//     if ( userInput == cityNames[i]) {
//         match = true
//         alert("City found")
//         break
//     }
// }
// if (match == false) {
//     alert("City Not Found")
// }

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

// .indexOf()

// let userInput = prompt("Enter your name")
// let studentNames = ["saad", "adeel", "ahmed", "ali"]
// let res = studentNames.indexOf(userInput)

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

// create heads tails game

// let player1 = prompt("Enter HEADS name")
// let player2 = prompt("Enter TAILS name")

// let toss = Math.random() * 2
// let ch = Math.floor(toss)

// if (ch == 0) {
//     document.write(player1, " HEADS WIN")
// }
// else {
//     document.write(player2, " TAILS WIN")
// }

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

// setInterval

// setInterval(function(){
//     document.write("hello world")
// },1000)

// function timer(){
//     document.write("html")
// }
// setInterval(timer, 1000)

// setTimeout(function(){
//     document.write("hello world")
// },1000)

// let num = 0
// setInterval(function(){
//     num++
//     console.log(num)
// },1000)

// stop watch--------------------->

// let min = 0
// let sec = 0
// let miliSeconds = 0
// let getMint = document.getElementById('min');
// let getSec = document.getElementById('sec');
// let getMili = document.getElementById('mSec');
// let stopTheWatch;

// function start() {
//     stopTheWatch = setInterval(function () {
//         miliSeconds++
//         getMili.innerHTML = miliSeconds
//         if (miliSeconds >= 100) {
//             sec++
//             getSec.innerHTML = sec
//             miliSeconds = 0
//         } else if (sec >= 60) {
//             min++
//             getMint.innerHTML = min
//             sec = 0
//         }
//     }, 10)
//     document.getElementById('disable').disabled = true
// }

// function stop() {
//     document.getElementById('disable').disabled = false
//     clearInterval(stopTheWatch)
// }

// function Reset() {
//     min = 0
//     sec = 0
//     miliSeconds = 0
//     getMint.innerHTML = min
//     getSec.innerHTML = sec
//     getMili.innerHTML = miliSeconds
// }

// stop watch-------------------------->

// getAttribute

// let input = document.getElementById('yes')
// let attribute = input.getAttribute('class')
// console.log(attribute)

// hasAttribute

// let input = document.getElementById('yes')
// let attribute = input.hasAttribute('is')
// console.log(attribute)

// setAttribute

// function add() {
//     let input = document.getElementById('yes')
//     let attribute = input.setAttribute('class','aaa')
//     console.log(attribute)
// }

// todo app

// const getUl = document.getElementById('ul')

// function add() {
//     const input = document.getElementById('inp')
//     let li = document.createElement('li')
//     let liText = document.createTextNode(input.value)
//     // edit button
//     let edit = document.createElement('button')
//     edit.setAttribute('onclick','EditText(this)')
//     let editText = document.createTextNode('Edit')
//     edit.appendChild(editText)
//     // edit button
//     // delete button
//     let clear = document.createElement('button')
//     clear.setAttribute('onclick', 'del(this)')
//     let clearText = document.createTextNode('Clear')
//     clear.appendChild(clearText)
//     // delete button
//     li.appendChild(liText)
//     li.appendChild(edit)
//     li.appendChild(clear)
//     getUl.appendChild(li)
//     input.value = ''
// }

// // for clear all
// function ClearAll() {
//     getUl.innerHTML = ''
// }

// function del(e) {
//     e.parentNode.remove()
// }

// function EditText(edit){
//     let editPrompt = prompt('Enter Edit Value',edit.parentNode.firstChild.nodeValue)
//     edit.parentNode.firstChild.nodeValue = editPrompt
// }

// const getShowPasswordInput = document.getElementById('passwordInput')

// function showPassword(){
//     if(getShowPasswordInput.type === 'password'){
//         getShowPasswordInput.type = 'text'
//         }
//         else{
//             getShowPasswordInput.type = 'password'
//         }
// }

// let input = prompt('email')
// let pass = prompt('pass')

// // Retrieve existing data from local storage
// let existingData = JSON.parse(localStorage.getItem("students")) || [];

// // Define a new student object
// let student = {
//     email: input,
//     password: pass
// };

// // Add the new student to the existing data array
// existingData.push(student);

// // Store the updated data back to local storage
// localStorage.setItem("students", JSON.stringify(existingData));

// // For debugging and verification
// console.log(existingData);

// let divData = document.getElementById("divData")

// existingData.forEach(element => {
//     divData.innerHTML += `
//     <li>${element.name}</li>
//     <li>${element.rollNo}</li>
//     <li>${element.email}</li>
//     `
//     console.log(element.name)
// })

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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> .filter method

// let data = [100,65,,64,76,567,578,345,123,45,432,654,754,567,754,234,908,890]

// let filteredData = data.filter(function(data){
//     return data > 500;
// })

// console.log(filteredData)

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

let user = {
  name: "Hamza",
  userName: "hb._07x",
  age: 16,
  country: "pakistan",
  city: "Karachi",
  address: "Garden west karachi",
  hobbies: ["Coding", "Football", "Reading", "Gaming"],
  skills: ["JavaScript", "Css", "html"],
  isMarried: false,
};

console.log(
  `Name: ${user.name} \nHobbies: ${user.hobbies} \nUsername: ${user.userName} \nSkills: ${user.skills} \nAge: ${user.age}`
);
