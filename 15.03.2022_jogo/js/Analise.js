const chances = 6;
var chute = 0;

function jogar(clicado) {
    var letra = document.getElementById(clicado).value;
    var cont;
    var contador = 0;

    for (i = 1; i <= tamanho; i++){
        cont = document.getElementById('letra_'+i);
        if(letra.toLowerCase() == cont.value){
                cont.style.color = "black";
                contador++;
                acertos++;
        }
    }

    if (contador == 0){
        chute++;
        document.querySelector('div[name="c'+chute+'"]').style.visibility = "visible";       
    }

    if(chute == chances){
        window.location="gameover.html";
    }
}