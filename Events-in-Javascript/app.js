// document.querySelector('#owl').addEventListener('click', (e) => {
//     console.log(e)
// }, false)


// document.querySelector('#images').addEventListener('click', (e) => {
//     console.log("click inside the ul");
// }, false)


// document.querySelector('#owl').addEventListener('click', (e) => {
//     console.log("owl clicked");
//     e.stopPropagation();
// }, false)


// document.querySelector('#google').addEventListener('click', (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked");
// }, false)


document.querySelector('#images').addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentNode.remove()
    }
})