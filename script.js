// CREATING HTML ELEMENTS
const inputText = document.createElement("input");
const button =  document.createElement("button");
const h1 = document.createElement("h1");
const ul = document.createElement("ul");

inputText.setAttribute("type","text");
inputText.setAttribute("placeholder","Enter Items")
button.appendChild(document.createTextNode("Add"));
h1.appendChild(document.createTextNode("Shopping List"));

document.body.appendChild(inputText);
document.body.appendChild(button);
document.body.appendChild(h1);
document.body.appendChild(ul);

// USER INTERACTION 

function inputLength() {
    return inputText.value.length;
}

function createListElement() {
    const li = document.createElement("li");
    const liBtn =  document.createElement("button");
    liBtn.appendChild(document.createTextNode("X"));
    li.appendChild(document.createTextNode(inputText.value));
    li.appendChild(liBtn); 
    ul.appendChild(li);
    inputText.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

function toggleList(item) {
    if (item.target.nodeName === "LI") {
        item.target.classList.toggle("done");
    }
    if (item.target.nodeName === "BUTTON"){
        item.target.parentNode.remove();
    }
}

button.addEventListener("click", addListAfterClick);
inputText.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click",toggleList);