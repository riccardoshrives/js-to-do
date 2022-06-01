// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo)

// Functions
function addTodo(event){
  // Prevent form from submitting
  event.preventDefault()
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