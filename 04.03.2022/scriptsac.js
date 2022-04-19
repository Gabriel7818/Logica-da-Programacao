function calcular(){
    var valor = document.getElementById("valor").value;
    var taxa = document.getElementById("juros").value;
    var parcelas = document.getElementById("parcelas").value;
    var tipo = document.getElementById("opt1").checked;
    var parcela = valor / parcelas;
    var result;
    var corpo = document.body;
    if(tipo == true){
        alert("Tabela SAC");
        for (i=0; i<=parcelas; i++){
        var par = document.createElement('p');
        result = ((valor - (parcela * i)) * taxa + parseFloat(parcela));                
        par.textContent = result;
        corpo.appendChild(par);
        } 
    }
    else{
        alert("Tabela PRICE");
        for (i=0; i<=parcelas; i++){
            var par = document.createElement('p');
            result = (valor * (Math.pow((1 + taxa),parcelas) * taxa) / (Math.pow((1 + taxa),parcelas) - 1));
            par.textContent = result;
            corpo.appendChild(par);
        }
    }
}
