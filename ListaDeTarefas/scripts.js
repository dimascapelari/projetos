let input = document.getElementById('input-principal')
let button = document.getElementById('botao-adicionar')
let task = document.getElementById('nome-tarefa-id')
let fullList = document.getElementById('tarefas')
let arrayAddTask = []


function viewTask() {
  let newLi = ''
  arrayAddTask.forEach((addTask, index) => {

    newLi = newLi + `<li class="item-tarefa">
    <button class="botao-arrow"><i class="fa-solid fa-circle-arrow-right"></i></button>
    <p class="nome-tarefa" id="nome-tarefa-id">${addTask}</p>
    <button class="botao-delete" onclick="delTask(${index})"><i class="fa-solid fa-trash"></i></button>
    </li>`
  })

  fullList.innerHTML = newLi

}

function delTask(index) {
  arrayAddTask.splice(index, 1)
  viewTask()
}

function addTask() {
  arrayAddTask.push(input.value)
  viewTask()
}

button.addEventListener('click', addTask)

