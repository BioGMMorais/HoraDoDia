function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 13) {
    // Bom Dia!
    img.src = './imgs/manhã.png'
    document.body.style.background = '#c7a486'
  } else if (hora >= 13 && hora <= 18) {
    // Boa Tarde!
    img.src = './imgs/tarde.png'
    document.body.style.background = '#c17038'
  } else {
    // Boa Noite!
    img.src = './imgs/noite.png'
    document.body.style.background = '#0147a6'
  }
}
