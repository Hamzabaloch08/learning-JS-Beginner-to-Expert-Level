// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> this <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const user = {
    userName: 'John Doe',
    age: 30,
    welcomeMessage: () => {
        console.log(`Hi, ${this.userName} welcome to my website`);
    }
}
user.welcomeMessage();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> arrow function <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const arrowFunction = () => {
    console.log('Hello, I am an arrow function')
}
arrowFunction();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> explicit return <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const explicitReturn = (value1, value2) => {
    return value1 + value2
}
console.log(explicitReturn(5, 10));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> implicit return <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// method 1

const implicitReturn = (value1, value2) => value1 + value2
console.log(implicitReturn(10, 10));

// method 2
const implicitReturn2 = (value1, value2) => (value1 + value2)
console.log(implicitReturn2(5, 10));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> object return with arrow function <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const objectReturn = () => ({ username: 'hamza' })
console.log(objectReturn());
