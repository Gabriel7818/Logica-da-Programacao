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
