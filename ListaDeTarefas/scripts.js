let input = document.getElementById('input-principal')
let button = document.getElementById('botao-adicionar')
let task = document.getElementById('nome-tarefa-id')
let fullList = document.getElementById('tarefas')
let arrayAddTask = []


function viewTask() {
  let newLi = ''
  arrayAddTask.forEach((addTask) => {

    newLi = newLi + `<li class="item-tarefa">
    <button class="botao-arrow"><i class="fa-solid fa-circle-arrow-right"></i></button>
    <p class="nome-tarefa" id="nome-tarefa-id">${addTask}</p>
    <button class="botao-delete"><i class="fa-solid fa-trash"></i></button>
    </li>`
  })

  fullList.innerHTML = newLi

}


function addTask() {
  arrayAddTask.push(input.value)

  viewTask()
}


button.addEventListener('click', addTask)

