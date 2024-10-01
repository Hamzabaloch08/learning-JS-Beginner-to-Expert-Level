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
