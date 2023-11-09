let list = document.querySelector('ul');
let input = document.getElementById('item');
let button = document.querySelector('button');


let inputText = "";

function receiveAfterClick(){
    let listItem = document.createElement('li');
    let span = document.createElement('span');
    let newButton = document.createElement('button');
    span.textContent = input.value;
    newButton.textContent = 'Delete';
    list.appendChild(listItem);
    listItem.appendChild(span);
    listItem.appendChild(newButton);
    input.value = '';
    newButton.addEventListener('click', ()=> {
    listItem.remove();
  });
}

button.addEventListener("click", receiveAfterClick);

