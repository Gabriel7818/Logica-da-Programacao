class Palavras{

    [0] = "desoxirribonucleico";
    [1] = "ovo";
    [2] = "hipotenusa";
    [3] = "virabrequim";
    [4] = "teguinha";
    [5] = "malte";
    [6] = "carregador";
    [7] = "girafa";
    [8] = "gaivota";
    [9] = "guitarra";

    sorteio(){
        return Math.floor(Math.random() * 10);
    }
    
    escolhida(){
        return(this[this.sorteio()]);
    }   
}

//------------------------------------->

const teclas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numTeclas = teclas.length;

var teclado = document.getElementById("jogada");

for (i=1; i<=numTeclas; i++) {
    var botao = document.createElement("input")
    botao.type = "button";
    botao.size = 1;
    botao.id = teclas[i-1];
    botao.value = teclas[i-1];
    botao.className = "btn-btn-secundary";
    botao.style.margin = "1px";
    botao.addEventListener("click", function() { jogar(this.id) } );
    jogada.appendChild(botao);
}

//------------------------------------->

var obj1 = new Palavras();
var palavra = obj1.escolhida();
var tamanho = palavra.length;



const letras = palavra.split("");
var painel = document.getElementById("painel");

for (var i = 1; i <= tamanho; i++) {
    var caixa = document.createElement("input")
    caixa.type = "text";
    caixa.size = 1;
    caixa.id = "letra_"+i;
    caixa.value = letras[i-1];
    caixa.style.textAlign = "center";
    caixa.readOnly = true;
    caixa.style.color = "white"
    painel.appendChild(caixa);
}

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

        }
    }

    if (contador == 0){
        chute++;
        document.querySelector('div["name=c'+chute+'"]').style;        
    }
}

