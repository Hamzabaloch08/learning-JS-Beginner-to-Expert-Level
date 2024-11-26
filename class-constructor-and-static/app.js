// es6
class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const userData = new user('john', 'example@.co', '123');

console.log(userData);
console.log(userData.encryptPassword());
console.log(userData.changeUserName());