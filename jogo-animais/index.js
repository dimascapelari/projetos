function verificar() {
  let tartaruga = document.getElementById('tartaruga')
  let hipopotamo = document.getElementById('hipopotamo')
  let macaco = document.getElementById('macaco')
  let guepardo = document.getElementById('guepardo')
  var animal = document.getElementsByName('radanimal')
  var res = document.getElementById('res')
  var img = document.createElement('img')

  if (animal[3].checked) {
    res.innerHTML = 'Você acertou! <br>'
    res.style.color = "blue";
    //img.setAttribute('id', 'foto')
    img.setAttribute('src', './img/guepardo.png')
    document.body.style.background = 'green'
  } else if (animal[0].checked) {
    res.innerHTML = 'Você errou! <br>'
    img.setAttribute('src', './img/tartaruga.png')
    document.body.style.background = 'red'
    res.style.color = "#ff0000";
  } else if (animal[1].checked) {
    res.innerHTML = 'Você errou! <br>'
    img.setAttribute('src', './img/hipopotamo.png')
    document.body.style.background = 'red'
    res.style.color = "#ff0000";
  } else if (animal[2].checked) {
    res.innerHTML = 'Você errou! <br>'
    img.setAttribute('src', './img/macaco.png')
    document.body.style.background = 'red'
    res.style.color = "#ff0000";
  } else {
    res.innerHTML = 'Escolha uma opção!'
    res.style.color = "#ff0000";
  }

  res.style.textAlign = 'center'
  res.appendChild(img)
}