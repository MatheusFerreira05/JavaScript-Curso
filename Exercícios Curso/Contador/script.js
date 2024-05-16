function contar(){
    var inicio = parseInt(document.getElementById('inicio').value);
    var fim = parseInt(document.getElementById('fim').value);
    var passo = parseInt(document.getElementById('passo').value);
    var res = document.getElementById('res');
    var resultado = '';

    if (!isNaN(inicio) && !isNaN(fim) && !isNaN(passo) && passo != 0){
        if (fim > inicio){
            for (var i = inicio; i <= fim; i += passo){
                resultado += i + "&#128073;"
            }
        }else if(inicio > fim){
            for (var i = inicio; i >= fim; i -= passo){
                resultado += i + "&#128073;"
            }
        }
        res.innerHTML = resultado + "&#127988";
    }else{
        res.innerHTML = "Impossível contar"
    }
}