// const promiseOne = new Promise((resolve, reject) => {
//     // do an async task 
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task complete')
//         resolve()
//     }, 1000)
// });

// promiseOne.then(() => {
//     console.log('Promise consume')
// });





// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task 2')
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log('Promise consume 2')
// })





// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             userName: 'hb07',
//             password: '12345678900',
//             emailAddress: 'example@gmail.com',
//             userAge: 17,
//             followers: 659,
//             following: 233
//         });
//     }, 1000)
// })

// promiseThree.then((userData) => {
//     console.log(`userName => ${userData.userName}\nuserpassword is => ${userData.password}`)
// })





// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({
//                 userName: 'ab.19',
//                 password: '12345678900',
//                 emailAddress: 'example@gmail.com',
//                 userAge: 30,
//                 followers: 659,
//                 following: 233
//             })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })
// promiseFour.then((userData) => {
//     return userData.userName;
// }).then((userName) => {
//     console.log(`userName => ${userName}`);
// }).catch((error) => {
//     console.log(error)
// }).finally(() => console.log('The promise is either resolve or rejected'));





// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({
//                 userName: 'li.39',
//                 password: '0123456789',
//                 emailAddress: 'example07@gmail.com',
//                 userAge: 19,
//                 followers: 659,
//                 following: 233
//             })
//         } else {
//             reject('ERROR: JS went wrong');
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const responce = await promiseFive
//         console.log(responce);
//     } catch (error) {
//         console.log('ERROR: error detected in promise five ');
//     }
// }

// consumePromiseFive();



// let getAllusers = async () => {
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await responce.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log(`E: ${error}`);
//     }
// }
// getAllusers();






fetch('https://api.github.com/users/Hamzabaloch08')
    .then((response) => {
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(`Error: ${error}`));