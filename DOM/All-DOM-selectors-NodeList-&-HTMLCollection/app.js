document.getElementById('pink').setAttribute('class', 'pinkPragraph dummyParagraph');
const title = document.getElementById('aqua');
title.style.backgroundColor = 'green';
title.textContent = 'Reference error!';
let h1 = document.querySelector('h1:last-child');
h1.style.color = 'yellow';

let getBox = document.querySelector('.box');
const yellowH1 = getBox.querySelector('h1:last-child');
yellowH1.style.color = 'yellow';
yellowH1.style.backgroundColor = 'green';

const h1List = getBox.querySelectorAll('h1');
h1List.forEach((headings) => {
    headings.style.color = 'aqua';
    headings.style.backgroundColor = 'purple';
})

const allLists = document.getElementsByClassName('list-item');
const convertAllListInArray = Array.from(allLists);
convertAllListInArray.forEach((lists) => {
    lists.style.color = 'blue';
    lists.style.fontSize = '1.9rem';
    lists.style.listStyleType = 'none';
    lists.style.textTransform = 'uppercase';
})

