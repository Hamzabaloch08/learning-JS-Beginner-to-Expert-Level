// Immediately Inovoke Function Expressions => ? (IIFE)

// named IIFE
(function helloMessage() {
    console.log("Hello, World!");
})();

// Immediately Invoked Function Expressions => ? (IIFE) with Arrow Function

// simple IIFE
(() => {
    console.log(`Hello, World2!`);
})();

((name) => {
    console.log(`Hello my name ${name}`);
})(`Hamza`)