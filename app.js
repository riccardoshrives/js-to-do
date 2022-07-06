// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todos')

// Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteComplete)
filterOption.addEventListener('click', filterTodo)

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault()
  if (todoInput.value) {
    // Create todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // Create li inside div
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    // Item complete button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    // Item delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    // append to ul
    todoList.appendChild(todoDiv)
    // Clear todoInput value
    todoInput.value = ''
  }

}

function deleteComplete(event) {
  const item = event.target
  // Delete item
  if (item.classList[0] === 'trash-btn') {
    const todoItem = item.parentElement
    todoItem.classList.add('fall')
    todoItem.addEventListener('transitionend', function() {
      todoItem.remove()
    })
  }
  // Complete item
  if (item.classList[0] === 'complete-btn') {
    const todoItem = item.parentElement
    todoItem.classList.toggle('completed')
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = 'flex'
        break;
      case "completed":
        console.log(todo.classList)
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex'
        } else {
          todo.style.display = 'none'
        }
    }
  })
}
