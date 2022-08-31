let toDo = document.body.getElementsByClassName('toDo');
let newToDo = document.body.querySelector('[name="newToDo"]');
let button = document.body.querySelector('.button');
let section1 = document.body.querySelector('.section1');
let alert1 = document.body.querySelector('.alert1');
let alert2 = document.body.querySelector('.alert2');
let newElement;

function add() {
    if (newToDo.value != '') {
        newElement = section1.insertAdjacentHTML('beforeend', `<p><input type="checkbox" class="toDo">${newToDo.value}</p>`);
        newToDo.value = '';
    } else if (newToDo.value == '') {
        alert1.style.display = 'block';
        setTimeout(() => alert1.style.display = 'none', 2000)
    }
}

section1.addEventListener('click', function (event) {
    if (event.target.type == "checkbox" && toDo.length > 1) {
        event.target.parentElement.remove();
    } else if (event.target.type == "checkbox" && toDo.length == 1) {
        alert2.style.display = 'block';
        setTimeout(() => alert2.style.display = 'none', 2000);
        section1.reset();
    }
})


button.addEventListener('click', add);
button.addEventListener('mousedown', () => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';

})
button.addEventListener('mouseup', () => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
})