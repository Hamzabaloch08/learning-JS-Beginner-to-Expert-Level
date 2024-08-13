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

// let percentage = 72.4
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