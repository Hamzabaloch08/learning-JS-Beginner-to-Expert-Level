// ++++++++++++++++++++++++++++++++++++ Add Element +++++++++++++++++++++++=++

function addLanguage(langNmae) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langNmae))
    document.querySelector('.language').appendChild(li)
}
addLanguage('Python')
addLanguage('Java')
addLanguage('Golang')

// ++++++++++++++++++++++++++++++++ Edit Element +++++++++++++++++++++++++++

const secondLang = document.querySelector('li:nth-child(2)')
const newLi = document.createElement('li')
newLi.textContent = 'Mojo'
secondLang.replaceWith(newLi)

// ++++++++++++++++++++++++++++++++++++ or ++++++++++++++++++++++++++++++++

const thirdLang = document.querySelector('li:nth-child(3)')
thirdLang.innerHTML = 'c#'

// ++++++++++++++++++++++++++++++++++++ or ++++++++++++++++++++++++++++++++

const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = '<li>TypeScript</li>';

// ++++++++++++++++++++++++++++++++++ remove ++++++++++++++++++++++++++++++

const lastLang = document.querySelector('li:last-child')
lastLang.remove()