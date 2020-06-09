const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('#item');

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
};

let itemsArray;
if (localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'));
} else {
    itemsArray = [];
}
localStorage.setItem('items', JSON.stringify(itemsArray))

const data = JSON.parse(localStorage.getItem('items'));

form.addEventListener('submit', function(e) {
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = '';
});

data.forEach(item => {
    liMaker(item);
});

button.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    };
});

