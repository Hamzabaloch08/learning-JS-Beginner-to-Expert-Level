function setUserName(userName) {
    // complex DB calls
    this.UserName = userName;
}

function createUser(userName, email, password) {
    setUserName.call(this, userName);
    this.email = email;
    this.password = password;
}

const userOne = new createUser ('john','example@.co','xyz')
const userTwo = new createUser ('ben','example@fb.co','xyz')

console.log(userOne)