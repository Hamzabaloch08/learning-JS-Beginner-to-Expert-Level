class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherInput = new Teacher('william', 'will@gmail.co', 'will.xyz');
teacherInput.logMe();
teacherInput.addCourse();

const userInput = new user('john');
userInput.logMe();

console.log(teacherInput instanceof user);