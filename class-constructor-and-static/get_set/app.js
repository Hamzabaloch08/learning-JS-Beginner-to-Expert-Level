// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> get set on class_constructor

// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     get password() {
//         return this._password.toUpperCase()
//     }

//     set password(value) {
//         this._password = value
//     }
// }

// const john = new User('john@gmail.com', 'v8engine')
// console.log(john.password);






// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> get set on function 

// function User(email, password) {
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return this._email.toUpperCase();
//         },

//         set: function (value) {
//             this.email = value;
//         }
//     })

//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return this._password.toUpperCase();
//         },

//         set: function (value) {
//             this.password = value
//         }
//     })
// }

// const william = new User('wil@.co', 'will.078');
// console.log(william.email);
// console.log(william.password);





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> get set on Object

// const User = {
//     _email: 'jhn@.pk',
//     _password: "john.008",

//     get email() {
//         return this._email.toUpperCase();
//     },

//     set email(value) {
//         this.email = value
//     },

//     get password() {
//         return this._password.toUpperCase();
//     },

//     set password(value) {
//         this.password = value
//     }
// }

// const john = Object.create(User);
// console.log(john.email)
// console.log(john.password)