agora = new Date()
horario = agora.getHours()
divHorario = document.getElementById('horario')

divHorario.innerHTML = `Agora são ${horario} horas.`

divImagem = document.getElementById('imagem')

if(horario < 12){
    divImagem.innerHTML = '<img src="./imagens/dia.jpg">'
    document.body.style.background = '#e2cd9f'
}else if (horario <= 18){
    divImagem.innerHTML = '<img src="./imagens/tarde.jpg">'
    document.body.style.background = '#b9846f'
}else{
    divImagem.innerHTML = '<img src="./imagens/noite.jpg">'
    document.body.style.background = '#515154'
}


