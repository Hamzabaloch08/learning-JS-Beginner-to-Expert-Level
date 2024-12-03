

// lexical scoping

//   function outer() {
//     let username = "mozila";
//     // console.log(secret)

//     function inner() {
//       let secret = "123";

//       console.log(`innerOne ${username}`);
//     }

//     function innerTwo() {
//       console.log(`innerTwo ${username}`);
//       //   console.log(secret);
//     }

//     inner();
//     innerTwo();
//   }
//   outer();

// lexical scoping


// closure

let clickHandler = (color) => {
    return () => {
        document.body.style.backgroundColor = `${color}`
    }
}
document.querySelector('#green').onclick = clickHandler('green');
document.querySelector('#orange').onclick = clickHandler('orange');

// closure