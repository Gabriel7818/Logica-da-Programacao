function criar(){
    var corpo = document.body;
    var par = document.createElement('p');

    par.textContent = "Isto é um teste";
    corpo.appendChild(par);
}