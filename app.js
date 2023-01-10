
//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo)


//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li
    const newTodo = document.createElement('li')
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check" ></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check  delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);

    
}
