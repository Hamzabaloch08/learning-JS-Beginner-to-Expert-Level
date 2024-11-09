// Object literals
const userData = {
    username: 'hamza',
    loginCount: 8,
    signedIn: true,
    getUserDetails: () => {
        console.log(`Username ${this.username}`);
        // console.log(this)
    }
};

// console.log(user.username);
// console.log(user.getUserDetails());


// Constructor function
function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
};

const userOne = new user('John', 12, true);
const userTwo = new user('sam', 24, true);

console.log(userOne);
console.log(userTwo);

