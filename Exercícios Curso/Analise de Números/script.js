let lista = []

function adicionar(){
    let valor = parseInt(document.getElementById('num').value)
    let info = document.getElementById('info')
    let res = document.getElementById('retorno')

    if(valor >= 1 && valor <= 100){
        if(lista.indexOf(valor) == -1){
            lista.push(valor)
            info.innerHTML += `Valor ${valor} adicionado com sucesso!` + '<br>'
            num.value = ''
            num.focus()
            res.value = ''
        }else{
            alert('Valor já inserido anteriormente!')
        }
    }else{
        alert('Valor inválido!')
    }
}

function analisar(){
    let res = document.getElementById('retorno')
    res.innerHTML = ''
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    let media = 0

    if (lista.length != 0){
        for (let numero of lista){
            if (numero > maior){
                maior = numero
            }
            if (numero < menor){
                menor = numero
            }
            soma += numero
            media = soma / lista.length
        }
        res.innerHTML += `O maior número foi ${maior}`+ '<br>'
        res.innerHTML += `O menor número foi ${menor}`+ '<br>'
        res.innerHTML += `A soma dos números foi ${soma}`+ '<br>'
        res.innerHTML += `A média dos números é igual a ${media}`+ '<br>'
    }else{
        alert('Adicione pelo menos um valor para analisar!')
    }
}