const myButton = document.getElementById('myButton');
const h1 = document.getElementById('myH1');
const anInput = document.getElementById('myInput');
const inputButton = document.getElementById('myInputButton');
const messageParagraph = document.getElementById('message');

function buttonClickHandler() {
    myButton.textContent = 'Clicked!';
}

function buttonClickH1Handler() {
    h1.innerHTML = 'Cambiado'
}

function buttonChangeH1Color() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    h1.style.color = randomColor;
}

function changeInputTextHandler() {
    let messageToChange = anInput.value;
    messageParagraph.innerHTML = messageToChange;
}

myButton.addEventListener("click", buttonChangeH1Color);
inputButton.addEventListener("click", changeInputTextHandler);