function verificar(){
    agora = new Date()
    anoAtual = agora.getFullYear()

    anoNasc = document.getElementById('anoNasc').value
    masculino = document.getElementById('masculino').checked
    feminino = document.getElementById('feminino').checked
    res = document.getElementById('res')
    img = document.getElementById('img')
    idade = Number(anoAtual) - Number(anoNasc)

    if (masculino){
        res.innerHTML = ` Detectamos homem com ${idade} anos.`
        if (idade <= 20){
            img.innerHTML = '<img src="./imagens/homemjovem.jpg" alt=""></img>'
        }else if (idade < 65 ){
            img.innerHTML = '<img src="./imagens/homemmeiaidade.jpg" alt=""/>'
        }else{
            img.innerHTML = '<img src = "./imagens/homemidoso.jpg" alt=""/>'
        }
    }else if (feminino){
        res.innerHTML = ` Detectamos mulher com ${idade} anos.`
        if (idade <= 20){
            img.innerHTML = '<img src="./imagens/mulherjovem.jpg" alt=""></img>'
        }else if (idade < 65 ){
            img.innerHTML = '<img src="./imagens/mulhermeiaidade.jpg" alt=""/>'
        }else{
            img.innerHTML = '<img src = "./imagens/mulheridosa.jpg" alt=""/>'
        }
    }else{
        res.innerHTML = 'Por favor selecione um sexo.'
    }
}
