let botao = document.getElementById('botao-pergunta')
let menu = document.getElementById('pergunta')

function abacate() {

  if (menu.style.display == 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}

botao.addEventListener('click', abacate)
