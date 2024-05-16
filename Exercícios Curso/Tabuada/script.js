function tabuada(){
    var numero = Number(document.getElementById('tabuada').value)
    var tab = document.getElementById('select_tabuada')
    resultado = ''
    if(numero != ''){
    for(var contador = 1; contador< 11; contador++){
        resultado += (`${numero} X ${contador} = ${contador * numero}`) + '<br>'
    }
    res.innerHTML = resultado
}else{
    alert('Digite um número')
}
    
}