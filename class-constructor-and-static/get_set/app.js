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

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },

        set: function (value) {
            this.email = value;
        }
    })

    Object.defineProperty(this)
}

const william = new User('wil@.co', 'will.123');
console.log(william.email);