const div = document.createElement('div');
div.className = 'Main';
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated-title");
div.style.backgroundColor = 'green';
div.style.padding = '12px';
// div.innerHTML = "Chai or Code"
const addText = document.createTextNode("Chai or Code")
div.appendChild(addText);
document.body.appendChild(div)